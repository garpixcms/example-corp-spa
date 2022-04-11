from garpixcms.urls import *  # noqa
from rest_framework import routers
from contacts.viewsets.feedback import CreateFeedbackViewSet
from user.views.user import UserViewSet

router = routers.SimpleRouter()
router.register(r'feedback', CreateFeedbackViewSet)
router.register(r'user', UserViewSet)
urlpatterns = [
    path('api/', include((router.urls, 'contacts'))),
] + urlpatterns  # noqa
