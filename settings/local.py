from .base import *
DEBUG = True

with open("secrets.json") as f:
    secrets = json.loads(f.read())


def get_secret(setting, the_secrets=secrets):
    """
    get the setting or return explicit exception
    """
    try:
        return the_secrets[setting]
    except KeyError:
        error_message = "Set {0} environmental variable".format(setting)
        raise ImproperlyConfigured(error_message)


SECRET_KEY = get_secret("SECRET_KEY")


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Portfolio',
        'USER': 'postgres',
        'PASSWORD': get_secret("DATABASE_PASSWORD"),
        'HOST': 'localhost'
    }
}


