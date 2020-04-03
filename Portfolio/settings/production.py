import django_heroku
from .base import *
DEBUG = False
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
django_heroku.settings(locals())
