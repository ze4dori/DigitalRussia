from flask import Flask, render_template, request, redirect, session, jsonify
import sqlite3 as sql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# @app.route("/", methods=['POST', 'GET'])
# def first_filter(): #число компаний по первому фильтру (Российский/Евразийский)
#     filter = 'Российский'

#     # filter = request.form['filter']

#     with sql.connect("company.db") as conn:
#         cursor = conn.cursor()
#         cursor.execute(f"""SELECT COUNT(id) FROM company
#             WHERE country = '{filter}'""")
#         active_records_count = cursor.fetchone()[0]

#     conn.close()
#     # return jsonify(count_company)
#     return render_template("index.html", active_records_count = active_records_count)

@app.route("/", methods=['POST', 'GET']) #КОЛИЧЕСТВО АКТИВНЫХ ЗАПИСЕЙ
def second_filter():
    filter = "ПАК"

    if request.method == "POST":
        button_id = request.form["active_button"]
        if button_id == "ButtonPO":
            filter = "ПО"
        else:
            filter = "ПАК"
        
        with sql.connect("company.db") as conn:
            cursor = conn.cursor()
            cursor.execute(f"""SELECT COUNT(id) FROM company WHERE ecosystem = '{filter}'""")
            active_records_count = cursor.fetchone()[0]

        conn.close()
        return jsonify({'active_records_count': active_records_count})
    else:
        with sql.connect("company.db") as conn:
            cursor = conn.cursor()
            cursor.execute(f"""SELECT COUNT(id) FROM company WHERE ecosystem = '{filter}'""")
            active_records_count = cursor.fetchone()[0]

        conn.close()
        return render_template("index.html", active_records_count=active_records_count)

@app.route("/filterPAK", methods=['POST', 'GET']) #СПИСОК КОМПАНИЙ ПАК
def third_filter(): #компании по фильтру ПАК

    ecosystem = 'ПАК'

    if request.method == "POST":
        data = request.get_json()
        region = data.get('region')
        hardwareclass = data.get('hardwareclass')
        field = data.get('field')
        errp = data.get('errp')

        with sql.connect("company.db") as conn:
                cursor = conn.cursor()
                query = "SELECT id, name, position, SUBSTR(address, INSTR(address, ',') + 1) as address, SUBSTR(address, 1, INSTR(address, ',') - 1) AS region, images FROM company"

                conditions = []
                if ecosystem is not None:
                    conditions.append(f"ecosystem = '{ecosystem}'")
                if region != 'Вся Россия':
                    conditions.append(f"region = '{region}'")
                if hardwareclass != 'Выбрать':
                    conditions.append(f"hardware_classname LIKE '%' || '{hardwareclass}' || '%'")
                if field != 'Выбрать':
                    conditions.append(f"field LIKE '%' || '{field}' || '%'")
                if errp != '':
                    conditions.append(f"errp = {errp}")

                if conditions:
                    query += ' WHERE ' + ' AND '.join(conditions)

                cursor.execute(query)
                companies = cursor.fetchall()

                # Преобразуем результаты в список словарей
                companies_list = [{'id': id, 'company_name': name, 'position_company': position, 'address': address, 'region': region, 'logo_company': image} for id, name, position, address, region, image in companies]

        return companies_list

@app.route("/filterPO", methods=['POST', 'GET']) #СПИСОК КОМПАНИЙ ПО
def fourth_filter(): #компании по фильтру ПО 

    ecosystem = 'ПО'

    if request.method == "POST":
        data = request.get_json()
        region = data.get('region')
        softwareclass = data.get('softwareclass')
        field = data.get('field')
        errp = data.get('errp')
        software_ai = data.get('software_ai')


        with sql.connect("company.db") as conn:
                cursor = conn.cursor()
                query = "SELECT id, name, position, SUBSTR(address, INSTR(address, ',') + 1) as address, SUBSTR(address, 1, INSTR(address, ',') - 1) AS region, images FROM company"

                conditions = []
                if ecosystem is not None:
                    conditions.append(f"ecosystem = '{ecosystem}'")
                if region != 'Вся Россия':
                    conditions.append(f"region = '{region}'")
                if softwareclass != 'Выбрать':
                    conditions.append(f"software_classname LIKE '%' || '{softwareclass}' || '%'")
                if field != 'Выбрать':
                    conditions.append(f"field LIKE '%' || '{field}' || '%'")
                if errp != '':
                    conditions.append(f"errp = {errp}")
                if software_ai != '':
                    conditions.append(f"software_ai = {software_ai}")

                if conditions:
                    query += ' WHERE ' + ' AND '.join(conditions)

                cursor.execute(query)
                companies = cursor.fetchall()

                # Преобразуем результаты в список словарей
                companies_list = [{'id': id, 'company_name': name, 'position_company': position, 'address': address, 'region': region, 'logo_company': image} for id, name, position, address, region, image in companies]
        return companies_list   

@app.route("/info", methods=['POST', 'GET']) #ИНФОРМАЦИЯ
def about_company(): #информация по выбранной компании
    if request.method == "POST":
        data = request.get_json()
        id = data.get('idCompany')

        with sql.connect("company.db") as conn:
            cursor = conn.cursor()
            cursor.execute(f"""SELECT id, name, position, product, service, SUBSTR(address, INSTR(address, ',') + 1) as address, description, contact, images FROM company
                WHERE id = {id}""")
            company = cursor.fetchall()

        info = [{'id': id, 'company_name': name, 'position_company': position, 'product': product, 'service': service, 'address': address, 'description': description,  'contact': contact, 'image': image} for id, name, position, product, service, address, description, contact, image in company]
    return info

@app.route("/icon", methods=['POST', 'GET']) #ИКОНКИ
def icon_contact():
    if request.method == "POST":
        data = request.get_json()
        id = data.get('idCompany')

        with sql.connect("company.db") as conn:
            cursor = conn.cursor()
            cursor.execute(f"""SELECT whatsapp, telegram, viber, vk, site FROM company
                WHERE id = {id}""")
            company = cursor.fetchall()

        icon = []
        for whatsapp, telegram, viber, vk, site in company:
            icon.append({'whatsapp': whatsapp})
            icon.append({'telegram': telegram})
            icon.append({'viber': viber})
            icon.append({'vk': vk})
            icon.append({'site': site})
            
    return icon

if __name__ == '__main__':
    app.run(debug=True)