import os
from dotenv import load_dotenv

# load_dotenv()  # Загружаем данные из .env файла

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_default_secret_key')
    DATABASE = os.getenv('DATABASE_URL', 'newdb.db')
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_RECIPIENT = os.getenv('MAIL_RECIPIENT')

    # .env
    # MAIL_USERNAME=your_email@gmail.com
    # MAIL_PASSWORD=your_email_password_or_app_password
