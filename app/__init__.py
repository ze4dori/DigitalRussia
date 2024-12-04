from flask import Flask
from flask_mail import Mail, Message
from flask_cors import CORS
from flask import current_app
from .routes import home_bp, application_bp, region_contacts_bp, privacy_policy_bp, map_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    app.config['MAIL_SERVER'] = 'smtp.yandex.ru'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = 'ze.dori@yandex.ru'  # Ваш email
    app.config['MAIL_PASSWORD'] = 'crzyszdznywdzcho'  # Пароль приложения для Яндекса
    app.config['MAIL_DEFAULT_SENDER'] = 'ze.dori@yandex.ru'  # Почтовый адрес отправителя

    mail = Mail(app)
    

    CORS(app)

    app.register_blueprint(home_bp)
    app.register_blueprint(application_bp)
    app.register_blueprint(region_contacts_bp)
    app.register_blueprint(privacy_policy_bp)
    app.register_blueprint(map_bp)

    return app
