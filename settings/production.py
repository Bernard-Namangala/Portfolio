import django_heroku
from .base import *
DEBUG = False
STATIC_ROOT = os.path.join(BASE_DIR, 'frontend/static')

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend/static'),
]
SECRET_KEY = os.environ['SECRET_KEY']


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Portfolio',
        'USER': 'postgres',
        'PASSWORD': os.environ['DATABASE_PASSWORD'],
        'HOST': 'localhost'
    }
}

django_heroku.settings(locals())
