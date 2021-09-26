from garpixcms.urls import *  # noqa
from rest_framework import routers
from contacts.viewsets.feedback import CreateFeedbackViewSet

router = routers.SimpleRouter()
router.register(r'feedback', CreateFeedbackViewSet)
urlpatterns = [
    path('api/', include((router.urls, 'contacts'))),
] + urlpatterns  # noqa
