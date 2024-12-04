from flask import Blueprint, request, jsonify, render_template
from app.db import get_active_records_count_map, get_region_info, get_companies_by_filter_pak, get_companies_by_filter_po, get_region_name_by_abb, get_companies_count_by_region_and_type, get_company_info_by_id, get_company_icons_by_id

map_bp = Blueprint('map', __name__)

@map_bp.route("/map", methods=['POST', 'GET'])
def get_active_records_count_by_filter():
    filter = "ПО"

    if request.method == "POST":
        button_id = request.form["active_button"]
        if button_id == "ButtonPAK":
            filter = "ПАК"
        
        active_records_count = get_active_records_count_map(filter)
        return jsonify({'active_records_count': active_records_count})
    else:
        active_records_count = get_active_records_count_map(filter)
        return render_template("index.html", active_records_count=active_records_count)
    

@map_bp.route("/filterPAK", methods=['POST', 'GET'])  # ФИЛЬТРИРОВАНИЕ ПО КОМПАНИЯМ ПАК
def get_companies_by_pak():
    type_company = 'ПАК'

    if request.method == "POST":
        data = request.get_json()
        regions = data.get('regions') or []
        hardwareclasses = data.get('hardwareclasses') or []
        fields = data.get('fields') or []
        errp = data.get('errp')

        companies = get_companies_by_filter_pak(type_company, regions, hardwareclasses, fields, errp)

        companies_list = [{'id': id, 'company_name': name, 'position_company': position, 'address': address, 'region': region, 'logo_company': logo_url} 
                          for id, name, position, address, region, logo_url in companies]

        info = get_region_info(regions, companies_list)

        return jsonify({'companies': companies_list, 'region': info})
    

@map_bp.route("/filterPO", methods=['POST', 'GET'])  # ФИЛЬТРИРОВАНИЕ ПО КОМПАНИЯМ ПАК
def get_companies_by_po():
    type_company = 'ПО'

    if request.method == "POST":
        data = request.get_json()
        regions = data.get('regions') or []
        softwareclasses = data.get('softwareclasses') or []
        fields = data.get('fields') or []
        errp = data.get('errp')
        ai = data.get('software_ai')

        companies = get_companies_by_filter_po(type_company, regions, softwareclasses, fields, errp, ai)

        companies_list = [{'id': id, 'company_name': name, 'position_company': position, 'address': address, 'region': region, 'logo_company': logo_url} 
                          for id, name, position, address, region, logo_url in companies]

        info = get_region_info(regions, companies_list)

        return jsonify({'companies': companies_list, 'region': info})
    
@map_bp.route('/region/<id>', methods=['GET'])  # ИНФОРМАЦИЯ ПО РЕГИОНУ
def region(id):
    activeButtonId = request.args.get('button')
    ai = request.args.get('software_ai')
    errp = request.args.get('errp')
    if activeButtonId == 'ButtonPAK':
        type_company = 'ПАК'
    else:
        type_company = 'ПО'

    region_name = get_region_name_by_abb(id)

    if region_name:
        countCompany = get_companies_count_by_region_and_type(region_name, type_company, errp, ai)
        info = {
            'name': region_name,
            'count': countCompany
        }
    else:
        info = {
            'name': None,
            'count': 0
        }

    return jsonify(info)

@map_bp.route("/info", methods=['POST', 'GET'])  # ВЫВОД ИНФОРМАЦИИ ПО КОМПАНИИ
def about_company():
    if request.method == "POST":
        data = request.get_json()
        id = data.get('idCompany')

        # Получаем информацию о компании из базы данных
        company = get_company_info_by_id(id)

        # Формируем ответ
        if company:
            company_info = [{
                'id': id,
                'company_name': name,
                'position_company': short_description,
                'description': full_description,
                'product': products,
                'service': services,
                'address': f'{region}, {address}',
                'contact': phone,
                'video': video_url,
                'main_logo_image': main_logo_url,
                'second_image': image1_url,
                'third_image': image2_url,
                'fourth_image': image3_url,
            } for id, name, short_description, full_description, products, services, video_url, main_logo_url, image1_url, image2_url, image3_url, image4_url, region, address, phone in company]

            return jsonify(company_info)
        else:
            return jsonify({"error": "Company not found"}), 404
        
@map_bp.route("/icon/<int:id>", methods=['GET'])  # ВЫВОД ИКОНОК
def icon_contact(id):
    # Получаем иконки компании по ID
    company = get_company_icons_by_id(id)

    if company:
        icon = {
            'telegram': company[0],
            'vk': company[1],
            'rutube': company[2],
            'dzen': company[3],
            'site': company[4]
        }
        return jsonify(icon)
    else:
        return jsonify({"error": "Company not found"}), 404