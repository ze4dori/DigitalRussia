from flask import Blueprint, render_template
from app.db import get_active_records_count

home_bp = Blueprint('home', __name__)

@home_bp.route("/")
def home():
    active_records_count = get_active_records_count()
    return render_template("main.html", active_records_count=active_records_count)

@home_bp.route("/auth")
def active_home():
    active_records_count = get_active_records_count()
    return render_template("activemain.html", active_records_count=active_records_count)
