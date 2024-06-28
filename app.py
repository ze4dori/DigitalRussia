from flask import Flask, render_template, request, redirect, session, jsonify
import sqlite3 as sql

app = Flask(__name__)

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

@app.route("/third", methods=['POST', 'GET'])
def third_filter(): #компании по фильтру ПО
    filter_first = 'ПО'
    filter_second = ''
    filter_third = ''
    filter_fourth = ''

    # if request.method == 'POST':
    #     filter_first = request.form['ecosystem']
    #     filter_second = request.form['region']
    #     filter_third = request.form['softwareclass']
    #     filter_fourth = request.form['field']

    with sql.connect("company.db") as conn:
        cursor = conn.cursor()
        query = "SELECT name, position, (SELECT SUBSTR(address, 1, INSTR(address, ',') - 1) FROM company) AS region, contact FROM company"

        if filter_first is not None:
            query += f" WHERE ecosystem = '{filter_first}'"

        if filter_second is not None:
            if query[-1] == ' ':
                query += " AND region = '" + filter_second + "'"
            else:
                query += f" AND region = '{filter_second}'"

        if filter_third is not None:
            if query[-1] == ' ':
                query += " AND software_classname = '" + filter_third + "'"
            else:
                query += f" AND software_classname = '{filter_third}'"

        if filter_fourth is not None:
            if query[-1] == ' ':
                query += " AND field = '" + filter_fourth + "'"
            else:
                query += f" AND field = '{filter_fourth}'"

        cursor.execute(query)
        company = cursor.fetchone()

        return jsonify(company)
        # return render_template("list.html", company = company)

@app.route("/filter", methods=['POST', 'GET']) #СПИСОК КОМПАНИЙ
def fourth_filter(): #компании по фильтру ПАК 

    if request.method == "POST":
        data = request.get_json()
        ecosystem = data.get('ecosystem')
        region = data.get('region')
        hardwareclass = data.get('hardwareclass')
        field = data.get('field')

        with sql.connect("company.db") as conn:
                cursor = conn.cursor()
                query = "SELECT id, name, position, address, SUBSTR(address, 1, INSTR(address, ',') - 1) AS region FROM company"

                conditions = []
                if ecosystem is not None:
                    conditions.append(f"ecosystem = '{ecosystem}'")
                if region is not None:
                    conditions.append(f"region = '{region}'")
                if hardwareclass is not None:
                    conditions.append(f"hardware_classname = '{hardwareclass}'")
                if field is not None:
                    conditions.append(f"field = '{field}'")

                if conditions:
                    query += ' WHERE ' + ' AND '.join(conditions)

                cursor.execute(query)
                companies = cursor.fetchall()

                # Преобразуем результаты в список словарей
                companies_list = [{'id': id, 'company_name': name, 'position_company': position, 'address': address, 'region': region} for id, name, position, address, region in companies]

        return companies_list   

@app.route("/fifth", methods=['POST', 'GET'])
def about_company(): #информация по выбранной компании
    name = 'Компания 1'

    # name = request.form['name']

    with sql.connect("company.db") as conn:
        cursor = conn.cursor()
        cursor.execute(f"""SELECT name, position, product, service, address, description, contact, site, whatsapp, telegram, viber, vk FROM company
            WHERE name = '{name}'""")
        company = cursor.fetchone()

    conn.close()
    return jsonify(company)

if __name__ == '__main__':
    app.run(debug=True)