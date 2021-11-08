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

AUTHENTICATION_BACKENDS = [
    'social_core.backends.vk.VKOAuth2',  # for client backend: vk-oauth2
    'social_core.backends.facebook.FacebookOAuth2',  # for client backend: facebook
    'social_core.backends.google.GoogleOAuth2',  # for client backend: google-oauth2
    'social_core.backends.apple.AppleIdAuth',  # for client backend: apple-id
] + AUTHENTICATION_BACKENDS

# social - vk
SOCIAL_AUTH_VK_COMPLETE_URL = 'https://example.cms.garpix.com'
SOCIAL_AUTH_VK_OAUTH2_KEY = env('SOCIAL_AUTH_VK_OAUTH2_KEY')
SOCIAL_AUTH_VK_OAUTH2_SECRET = env('SOCIAL_AUTH_VK_OAUTH2_SECRET')
SOCIAL_AUTH_VK_OAUTH2_SCOPE = [
    'email',
]

# social - facebook
SOCIAL_AUTH_FACEBOOK_KEY = env('SOCIAL_AUTH_FACEBOOK_KEY')
SOCIAL_AUTH_FACEBOOK_SECRET = env('SOCIAL_AUTH_FACEBOOK_SECRET')
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
  'locale': 'ru_RU',
  'fields': 'id, name, email'
}
SOCIAL_AUTH_FACEBOOK_API_VERSION = '2.10'

# social - google
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = env('SOCIAL_AUTH_GOOGLE_OAUTH2_KEY')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = env('SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET')

# social - apple
SOCIAL_AUTH_APPLE_ID_CLIENT = env('SOCIAL_AUTH_APPLE_ID_CLIENT')  # Your client_id com.application.your, aka "Service ID"
SOCIAL_AUTH_APPLE_ID_TEAM = env('SOCIAL_AUTH_APPLE_ID_TEAM')  # Your Team ID, ie K2232113
SOCIAL_AUTH_APPLE_ID_KEY = env('SOCIAL_AUTH_APPLE_ID_KEY')  # Your Key ID, ie Y2P99J3N81K
SOCIAL_AUTH_APPLE_ID_SECRET = env('SOCIAL_AUTH_APPLE_ID_SECRET')  # SOCIAL_AUTH_APPLE_ID_SECRET="-----BEGIN PRIVATE KEY-----\nMIGTAgE.....\n-----END PRIVATE KEY-----"
SOCIAL_AUTH_APPLE_ID_SCOPE = ['email', 'name']
SOCIAL_AUTH_APPLE_ID_EMAIL_AS_USERNAME = True
