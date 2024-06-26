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

@app.route("/", methods=['POST', 'GET'])
def second_filter(): #число компаний по второму фильтру (ПО/ПАК)
    filter = 'ПАК'

    # filter = request.form['filter']

    with sql.connect("company.db") as conn:
        cursor = conn.cursor()
        cursor.execute(f"""SELECT COUNT(id) FROM company
            WHERE ecosystem = '{filter}'""")
        active_records_count = cursor.fetchone()[0]

    conn.close()
    # return jsonify(active_records_count)
    return render_template("index.html", active_records_count = active_records_count)

@app.route("/third", methods=['POST', 'GET'])
def third_filter(): #компании по фильтру ПО
    filter_first = 'ПО'
    filter_second = 'регион'
    filter_third = 'Наименование класса ПО'
    filter_fourth = 'Область применений'

    # filter_first = request.form['ecosystem']
    # filter_second = request.form['region']
    # filter_third = request.form['softwareclass']
    # filter_fourth = request.form['field']

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

@app.route("/fourth", methods=['POST', 'GET'])
def fourth_filter(): #компании по фильтру ПАК
    filter_first = 'ПАК'
    filter_second = 'регион'
    filter_third = 'Наименование класса ПАК'
    filter_fourth = 'Область применений'

    # filter_first = request.form['ecosystem']
    # filter_second = request.form['region']
    # filter_third = request.form['softwareclass']
    # filter_fourth = request.form['field']

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