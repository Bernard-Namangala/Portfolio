from .base import *
DEBUG = True

SECRET_KEY = "@u)^5#hm-6gc=(x5408r$qfyhwq$xo+9)yw=^eq52%rlj^&6mx"


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Portfolio',
        'USER': 'postgres',
        'PASSWORD': "ilovecoding1@",
        'HOST': 'localhost'
    }
}


STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend/static'),
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')