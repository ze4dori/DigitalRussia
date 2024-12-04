import sqlite3
from flask import current_app

def get_db_connection():
    """Создание подключения к базе данных."""
    conn = sqlite3.connect(current_app.config['DATABASE'])
    conn.row_factory = sqlite3.Row
    return conn

def get_active_records_count():
    """Возвращает количество активных записей из таблицы Companies."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(id) FROM Companies")
    count = cursor.fetchone()[0]
    conn.close()
    return count

def get_region_contacts():
    """Возвращает список всех контактов из таблицы Region."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT name, email, phone, abb FROM Region")
    contacts = cursor.fetchall()
    conn.close()
    return contacts

def get_active_records_count_map(filter='ПАК'):
    """Возвращает количество активных записей из таблицы Companies по фильтру типа компании (ПАК или ПО)."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT COUNT(id) FROM Companies WHERE type = ?", (filter,))
    count = cursor.fetchone()[0]
    conn.close()
    return count

def get_companies_by_filter_pak(type_company, regions, hardwareclasses, fields, errp):
    """Получение списка компаний по фильтрам."""
    conn = get_db_connection()
    cursor = conn.cursor()

    query = """
    SELECT DISTINCT c.id, c.name, c.short_description, c.address, c.region, c.logo_url
    FROM Companies c
    LEFT JOIN CompanyHardware ch ON c.id = ch.company_id
    LEFT JOIN HardwareSubclasses hs ON ch.subclass_id = hs.id
    LEFT JOIN CompanyIndustries ci ON c.id = ci.company_id
    LEFT JOIN CompanyRegistry cr ON c.id = cr.company_id
    """

    conditions = []
    if type_company:
        conditions.append(f"c.type = '{type_company}'")
    if regions and regions != ['Вся Россия']:
        regions_placeholder = ', '.join(f"'{region}'" for region in regions)
        conditions.append(f"c.region IN ({regions_placeholder})")
    if hardwareclasses and hardwareclasses != ['Все']:
        hardwareclass_conditions = ' OR '.join(f"hs.name LIKE '%{hardwareclass}%'" for hardwareclass in hardwareclasses)
        conditions.append(f"({hardwareclass_conditions})")
    if fields and fields != ['Все']:
        field_conditions = ' OR '.join(f"ci.industry LIKE '%{field}%'" for field in fields)
        conditions.append(f"({field_conditions})")
    if errp is not None:
        conditions.append(f"cr.is_in_registry = {errp}")

    if conditions:
        query += ' WHERE ' + ' AND '.join(conditions)

    cursor.execute(query)
    companies = cursor.fetchall()
    conn.close()

    return companies

def get_companies_by_filter_po(type_company, regions, hardwareclasses, fields, errp, ai):
    """Получение списка компаний по фильтрам."""
    conn = get_db_connection()
    cursor = conn.cursor()

    query = """
    SELECT DISTINCT c.id, c.name, c.short_description, c.address, c.region, c.logo_url
    FROM Companies c
    LEFT JOIN CompanySoftware cs ON c.id = cs.company_id
    LEFT JOIN SoftwareSubclasses hs ON cs.subclass_id = hs.id
    LEFT JOIN CompanyIndustries ci ON c.id = ci.company_id
    LEFT JOIN CompanyRegistry cr ON c.id = cr.company_id
    LEFT JOIN AI_CompanyRegistry ai ON c.id = ai.company_id
    """

    conditions = []
    if type_company:
        conditions.append(f"c.type = '{type_company}'")
    if regions and regions != ['Вся Россия']:
        regions_placeholder = ', '.join(f"'{region}'" for region in regions)
        conditions.append(f"c.region IN ({regions_placeholder})")
    if hardwareclasses and hardwareclasses != ['Все']:
        hardwareclass_conditions = ' OR '.join(f"hs.name LIKE '%{hardwareclass}%'" for hardwareclass in hardwareclasses)
        conditions.append(f"({hardwareclass_conditions})")
    if fields and fields != ['Все']:
        field_conditions = ' OR '.join(f"ci.industry LIKE '%{field}%'" for field in fields)
        conditions.append(f"({field_conditions})")
    if errp is not None:
        conditions.append(f"cr.is_in_registry = {errp}")
    if ai is not None:
        conditions.append(f"ai.is_specializing_in_ai = {ai}")

    if conditions:
        query += ' WHERE ' + ' AND '.join(conditions)

    cursor.execute(query)
    companies = cursor.fetchall()
    conn.close()

    return companies

def get_region_info(regions, companies):
    """Получение информации о регионах."""
    conn = get_db_connection()
    cursor = conn.cursor()

    info = []
    if regions:
        for region in regions:
            cursor.execute(f"SELECT abb, side FROM Region WHERE name = '{region}'")
            region_data = cursor.fetchone()
            if region_data:
                info.append({'abb': region_data[0], 'side': region_data[1]})
            else:
                info.append({'abb': None, 'side': None})
    else:
        unique_regions = set(company['region'] for company in companies)
        for region in unique_regions:
            cursor.execute(f"SELECT abb, side FROM Region WHERE name = '{region}'")
            region_data = cursor.fetchone()
            if region_data:
                info.append({'abb': region_data[0], 'side': region_data[1]})
            else:
                info.append({'abb': None, 'side': None})

    conn.close()

    return info

def get_region_name_by_abb(region_abb):
    """Получить название региона по его аббревиатуре."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM Region WHERE abb = ?", (region_abb,))
    region_name = cursor.fetchone()
    conn.close()

    return region_name[0] if region_name else None

def get_companies_count_by_region_and_type(region, type_company, errp=None, ai=None):
    """Подсчитать количество компаний по региону и типу компании с дополнительными фильтрами."""
    conn = get_db_connection()
    cursor = conn.cursor()

    if type_company == 'ПАК':
        query = """
        SELECT COUNT(DISTINCT c.id)
        FROM Companies c
        LEFT JOIN CompanyHardware ch ON c.id = ch.company_id
        LEFT JOIN HardwareSubclasses hs ON ch.subclass_id = hs.id
        LEFT JOIN CompanyIndustries ci ON c.id = ci.company_id
        LEFT JOIN CompanyRegistry cr ON c.id = cr.company_id
        WHERE c.region = ? AND c.type = ?
        """
    else:  # ПО
        query = """
        SELECT COUNT(DISTINCT c.id)
        FROM Companies c
        LEFT JOIN CompanySoftware ch ON c.id = ch.company_id
        LEFT JOIN SoftwareSubclasses sf ON ch.subclass_id = sf.id
        LEFT JOIN CompanyIndustries ci ON c.id = ci.company_id
        LEFT JOIN CompanyRegistry cr ON c.id = cr.company_id
        LEFT JOIN AI_CompanyRegistry ai ON c.id = ai.company_id
        WHERE c.region = ? AND c.type = ?
        """

    conditions = []
    params = [region, type_company]

    if errp is not None:
        conditions.append(f"cr.is_in_registry = {errp}")

    if type_company == 'ПО' and ai is not None:
        conditions.append(f"ai.is_specializing_in_ai = {ai}")

    if conditions:
        query += ' AND ' + ' AND '.join(conditions)

    cursor.execute(query, params)
    count = cursor.fetchone()[0]
    conn.close()

    return count


def get_company_info_by_id(id):
    """Получить информацию о компании по её ID."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(f"""
        SELECT id, name, short_description, full_description, products,
               services, video_url, main_logo_url, image1_url, image2_url, image3_url,
               image4_url, region, address, phone
        FROM Companies
        WHERE id = ?
    """, (id,))
    company = cursor.fetchall()
    conn.close()

    return company

def get_company_icons_by_id(id):
    """Получить контактные данные (иконки) компании по её ID."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT telegram, vk, rutube, dzen, website_url
        FROM Companies
        WHERE id = ?
    """, (id,))
    company = cursor.fetchone()
    conn.close()

    return company

def check_existing_company_by_inn(inn):
    """Проверка, существует ли компания с данным ИНН в базе данных."""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM NewCompanies WHERE inn = ?', (inn,))
    company = cursor.fetchone()
    conn.close()
    
    return company

def insert_company(data):
    """Вставка компании в таблицу NewCompanies."""
    conn = get_db_connection()
    cursor = conn.cursor()

    name = data.get('companyName', '')
    inn = data.get('inn', '')
    company_type = data.get('type', '')
    short_description = data.get('companyType', '')[:255]
    full_description = data.get('companyDescription', '')
    main_logo_url = data.get('main_logo', '')
    logo_url = data.get('logo', '')
    video_url = data.get('video', '')

    products = data.get('productNames', '')
    services = data.get('serviceNames', '')
    image1_url = data.get('first_image', '')
    image2_url = data.get('second_image', '')
    image3_url = data.get('third_image', '')

    region = data.get('region', [])[0] if data.get('region') else ''
    address = data.get('address', '')
    phone = data.get('phoneNumber', '')
    telegram = data.get('telegram', '')
    vk = data.get('vk', '')
    rutube = data.get('rutube', '')
    dzen = data.get('dzen', '')
    website_url = data.get('website', '')

    is_in_registry = data.get('isRegistered', False)
    is_specializing_in_ai = data.get('isAI', False)

    softwareclasses = '; '.join(data.get('softwareclasses', [])) if data.get('softwareclasses') else ''
    hardwareclasses = '; '.join(data.get('hardwareclasses', [])) if data.get('hardwareclasses') else ''
    field = '; '.join(data.get('fields', [])) if data.get('fields') else ''

    try:
        cursor.execute(''' 
            INSERT INTO NewCompanies (
                name, inn, type, short_description, full_description, 
                products, services, main_logo_url, logo_url, video_url, 
                image1_url, image2_url, image3_url, region, address,
                phone, telegram, vk, rutube, dzen, website_url,
                is_in_registry, is_specializing_in_ai, softwareclasses, hardwareclasses, field
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            name, inn, company_type, short_description, full_description, 
            products, services, main_logo_url, logo_url, video_url, 
            image1_url, image2_url, image3_url, region, address,
            phone, telegram, vk, rutube, dzen, website_url,
            is_in_registry, is_specializing_in_ai, softwareclasses, hardwareclasses, field
        ))

        conn.commit()
        company_id = cursor.lastrowid  # Получаем id только что вставленной компании
        return company_id

    except sqlite3.Error as e:
        print(f"Ошибка при вставке компании: {e}")
        conn.rollback()  # Откатить изменения в случае ошибки
        return None

    finally:
        conn.close()

# def insert_company_registry(company_id, is_registered): 
#     """Вставка записи в таблицу CompanyRegistry."""
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     try:
#         cursor.execute('''
#             INSERT INTO CompanyRegistry (company_id, is_in_registry)
#             VALUES (?, ?)
#         ''', (company_id, is_registered))
        
#         conn.commit()
#     except sqlite3.Error as e:
#         print(f"Ошибка вставки в CompanyRegistry: {e}")
#     finally:
#         conn.close()

# def insert_ai_registry(company_id, is_ai):
#     """Вставка записи в таблицу AI_CompanyRegistry."""
#     if is_ai:  # Вставка только если компания занимается ИИ
#         conn = get_db_connection()
#         cursor = conn.cursor()

#         try:
#             cursor.execute('''
#                 INSERT INTO AI_CompanyRegistry (company_id, is_specializing_in_ai)
#                 VALUES (?, ?)
#             ''', (company_id, True))

#             conn.commit()
#         except sqlite3.Error as e:
#             print(f"Ошибка вставки в AI_CompanyRegistry: {e}")
#         finally:
#             conn.close()

# def insert_software_classes_and_relations(company_id, softwareclasses):
#     """Вставка программного обеспечения и связи с компанией."""
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     for softwareclass in softwareclasses:
#         cursor.execute('''
#             INSERT INTO SoftwareClasses (name)
#             VALUES (?)
#         ''', (softwareclass,))
#         conn.commit()

#         subclass_id = cursor.lastrowid  # Получаем id добавленного класса программного обеспечения

#         # Связываем компанию с программным классом
#         cursor.execute('''
#             INSERT INTO CompanySoftware (company_id, subclass_id)
#             VALUES (?, ?)
#         ''', (company_id, subclass_id))
#         conn.commit()

#     conn.close()

# def insert_hardware_classes_and_relations(company_id, hardwareclasses):
#     """Вставка аппаратного обеспечения и связи с компанией."""
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     for hardwareclass in hardwareclasses:
#         cursor.execute('''
#             INSERT INTO HardwareClasses (name)
#             VALUES (?)
#         ''', (hardwareclass,))
#         conn.commit()

#         hardware_subclass_id = cursor.lastrowid  # Получаем id добавленного класса аппаратного обеспечения

#         # Связываем компанию с аппаратным классом
#         cursor.execute('''
#             INSERT INTO CompanyHardware (company_id, subclass_id)
#             VALUES (?, ?)
#         ''', (company_id, hardware_subclass_id))
#         conn.commit()

#     conn.close()