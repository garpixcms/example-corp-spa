from garpixcms.settings import *  # noqa

INSTALLED_APPS += [  # noqa
    'home',
    'contacts',
    'news',
    'search',
]

FEEDBACK_EVENT = 1

NOTIFY_EVENTS = {
    FEEDBACK_EVENT: {
        'title': 'Обратная связь',
    },
}

CHOICES_NOTIFY_EVENT = [(k, v['title']) for k, v in NOTIFY_EVENTS.items()]


MENU_TYPE_HEADER_MENU = 'header_menu'

MENU_TYPES = {
    MENU_TYPE_HEADER_MENU: {
        'title': 'Верхнее меню',
    },
}

CHOICE_MENU_TYPES = [(k, v['title']) for k, v in MENU_TYPES.items()]

SOCIAL_AUTH_AUTHENTICATION_BACKENDS = [
    'social_core.backends.vk.VKOAuth2',  # for client backend: vk-oauth2
    'social_core.backends.facebook.FacebookOAuth2',  # for client backend: facebook
]

SOCIAL_AUTH_VK_OAUTH2_KEY = env('SOCIAL_AUTH_VK_OAUTH2_KEY')
SOCIAL_AUTH_VK_OAUTH2_SECRET = env('SOCIAL_AUTH_VK_OAUTH2_SECRET')

SOCIAL_AUTH_FACEBOOK_KEY = env('SOCIAL_AUTH_FACEBOOK_KEY')
SOCIAL_AUTH_FACEBOOK_SECRET = env('SOCIAL_AUTH_FACEBOOK_SECRET')
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
  'locale': 'ru_RU',
  'fields': 'id, name, email'
}
SOCIAL_AUTH_FACEBOOK_API_VERSION = '2.10'
