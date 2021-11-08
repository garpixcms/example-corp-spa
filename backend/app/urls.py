from garpixcms.urls import *  # noqa
from rest_framework import routers
from contacts.viewsets.feedback import CreateFeedbackViewSet

router = routers.SimpleRouter()
router.register(r'feedback', CreateFeedbackViewSet)
urlpatterns = [
    path('api/', include((router.urls, 'contacts'))),
    path('api/social-auth/', include('rest_framework_social_oauth2.urls')),
    path('', include('social_django.urls', namespace='social')),
] + urlpatterns  # noqa
