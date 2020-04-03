import django_heroku
from .base import *
DEBUG = False
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
SECRET_KEY = os.getenv('SECRET_KEY')

    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Portfolio',
        'USER': 'postgres',
        'PASSWORD': os.getenv('DATABASE_PASSWORD'),
        'HOST': 'localhost'
    }
}

django_heroku.settings(locals())
