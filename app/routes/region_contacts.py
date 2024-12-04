from flask import Blueprint, render_template, jsonify
from app.db import get_region_contacts

region_contacts_bp = Blueprint('region_contacts', __name__)

@region_contacts_bp.route("/region-contacts")
def region_contacts():
    return render_template("regcontacts.html")

@region_contacts_bp.route("/region-contacts/info")
def info_region_contacts():
    contacts = get_region_contacts()
    contacts_list = [{'region': name, 'email': email, 'phone': phone, 'id': abb} 
                     for name, email, phone, abb in contacts]
    return jsonify({'contacts': contacts_list})

@region_contacts_bp.route("/region-contacts/info-filter")
def info_region_contacts_filter():
    contacts = get_region_contacts()
    contacts_list = [{'region': name, 'email': email, 'phone': phone, 'id': abb} 
                     for name, email, phone, abb in contacts]
    return jsonify({'contacts': contacts_list})
