from flask import Blueprint, render_template

privacy_policy_bp = Blueprint('privacy_policy', __name__)

@privacy_policy_bp.route("/privacy-policy")
def privacy_policy():
    return render_template("confidentiality.html")
