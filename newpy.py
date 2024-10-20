from flask import Flask, render_template, request, redirect, session, jsonify
import sqlite3 as sql
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)


@app.route("/", methods=['POST', 'GET']) #КОЛИЧЕСТВО АКТИВНЫХ ЗАПИСЕЙ
def second_filter():
    filter = "ПАК"

    if request.method == "POST":
        button_id = request.form["active_button"]
        if button_id == "ButtonPO":
            filter = "ПО"
        else:
            filter = "ПАК"
        
        with sql.connect("newdb.db") as conn:
            cursor = conn.cursor()
            cursor.execute(f"""SELECT COUNT(id) FROM Companies WHERE type = '{filter}'""")
            active_records_count = cursor.fetchone()[0]

        conn.close()
        return jsonify({'active_records_count': active_records_count})
    else:
        with sql.connect("newdb.db") as conn:
            cursor = conn.cursor()
            cursor.execute(f"""SELECT COUNT(id) FROM Companies WHERE type = '{filter}'""")
            active_records_count = cursor.fetchone()[0]

        conn.close()
        return render_template("index.html", active_records_count=active_records_count)

#Фильтр по компаниям ПАК
@app.route("/filterPAK", methods=['POST', 'GET']) 
def third_filter():  

    type_company = 'ПАК'

    if request.method == "POST":
        data = request.get_json()
        regions = data.get('regions') or []
        hardwareclasses = data.get('hardwareclasses') or []
        fields = data.get('fields') or []
        errp = data.get('errp')

        with sql.connect("newdb.db") as conn:
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
            if type_company is not None:
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

            companies_list = [{'id': id, 'company_name': name, 'position_company': position, 'address': address, 'region': region, 'logo_company': logo_url} 
                              for id, name, position, address, region, logo_url in companies]

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
                unique_regions = set(company['region'] for company in companies_list)
                print(unique_regions)
                for region in unique_regions:
                    cursor.execute(f"SELECT abb, side FROM Region WHERE name = '{region}'")
                    region_data = cursor.fetchone()
                    if region_data:
                        info.append({'abb': region_data[0], 'side': region_data[1]})
                    else:
                        info.append({'abb': None, 'side': None})

        return {'companies': companies_list, 'region': info}


#Фильтр по компаниям ПО
@app.route("/filterPO", methods=['POST', 'GET']) 
def fourth_filter():  

    type_company = 'ПО'

    if request.method == "POST":
        data = request.get_json()
        regions = data.get('regions') or []
        softwareclasses = data.get('softwareclasses') or []
        fields = data.get('fields') or []
        errp = data.get('errp')
        ai = data.get('software_ai')

        with sql.connect("newdb.db") as conn:
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
            if type_company is not None:
                conditions.append(f"c.type = '{type_company}'")
            if regions and regions != ['Вся Россия']:
                regions_placeholder = ', '.join(f"'{region}'" for region in regions)
                conditions.append(f"c.region IN ({regions_placeholder})")
            if softwareclasses and softwareclasses != ['Все']:
                softwareclass_conditions = ' OR '.join(f"hs.name LIKE '%{softwareclass}%'" for softwareclass in softwareclasses)
                conditions.append(f"({softwareclass_conditions})")
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

            companies_list = [{'id': id, 'company_name': name, 'position_company': position, 'address': address, 'region': region, 'logo_company': logo_url} 
                              for id, name, position, address, region, logo_url in companies]

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
                unique_regions = set(company['region'] for company in companies_list)
                for region in unique_regions:
                    cursor.execute(f"SELECT abb, side FROM Region WHERE name = '{region}'")
                    region_data = cursor.fetchone()
                    if region_data:
                        info.append({'abb': region_data[0], 'side': region_data[1]})
                    else:
                        info.append({'abb': None, 'side': None})

        return {'companies': companies_list, 'region': info}


#Информация о регионе
@app.route('/region/<id>', methods=['GET'])
def region(id):
    activeButtonId = request.args.get('button')
    fields = request.args.get('fields') or []
    softwareclasses = request.args.get('softwareclasses') or []
    hardwareclasses = request.args.get('hardwareclasses') or []
    ai = request.args.get('software_ai')
    errp = request.args.get('errp')

    # Determine company type and base query
    if activeButtonId == 'ButtonPAK':
        type_company = 'ПАК'
        query = """
            SELECT COUNT(DISTINCT c.id)
            FROM Companies c
            LEFT JOIN CompanyHardware ch ON c.id = ch.company_id
            LEFT JOIN HardwareSubclasses hs ON ch.subclass_id = hs.id
            LEFT JOIN CompanyIndustries ci ON c.id = ci.company_id
            LEFT JOIN CompanyRegistry cr ON c.id = cr.company_id
            WHERE c.region = ? AND c.type = ?
        """
    else:
        type_company = 'ПО'
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
    params = []

    if errp is not None:
        conditions.append(f"cr.is_in_registry = {errp}")

    if ai is not None:
        conditions.append(f"ai.is_specializing_in_ai = {ai}")

    if conditions:
        query += ' AND ' + ' AND '.join(conditions)

    with sql.connect("newdb.db") as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT name FROM Region WHERE abb = ?", (id,))
        region_result = cursor.fetchone()

        if region_result:
            params.insert(0, type_company)
            params.insert(0, region_result[0])
            
            try:
                cursor.execute(query, params)
                countCompany = cursor.fetchone()
            except Exception as e:
                print(f"Error executing query: {e}")
                countCompany = (0,)
        else:
            countCompany = (0,)

    info = {
        'name': region_result[0] if region_result else None,
        'count': countCompany[0] if countCompany else 0
    }

    return jsonify(info)


@app.route("/info", methods=['POST', 'GET'])
def about_company():
    if request.method == "POST":
        data = request.get_json()
        id = data.get('idCompany')

        with sql.connect("newdb.db") as conn:
            cursor = conn.cursor()
            cursor.execute(f"""SELECT id, name, short_description, full_description, products,
                            services, video_url, logo_url, image1_url, image2_url, image3_url,
                            image4_url, region, address, phone
                           FROM Companies
                WHERE id = {id}""")
            company = cursor.fetchall()

        info = [{
            'id': id,
            'company_name': name,
            'position_company': short_description,
            'description': full_description,
            'product': products,
            'service': services,
            'address': f'{region}, {address}',
            'contact': phone,
            'video': video_url,
            'first_image': logo_url,
            'second_image': image1_url,
            'third_image': image2_url,
            'fourth_image': image3_url,
        } for id, name, short_description, full_description, products, services, video_url, logo_url, image1_url, image2_url, image3_url, image4_url, region, address, phone in company]

        return jsonify(info)
    
#Вывод иконок
@app.route("/icon/<int:id>", methods=['GET'])
def icon_contact(id):
    with sql.connect("newdb.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT telegram, vk, whatsapp, viber, website_url 
            FROM Companies 
            WHERE id = ?
        """, (id,))
        company = cursor.fetchone()

    icon = {
        'telegram': company[0],
        'vk': company[1],
        'whatsapp': company[2],
        'viber': company[3],
        'site': company[4]
    }

    return jsonify(icon)
    
if __name__ == '__main__':
    app.run(debug=True)