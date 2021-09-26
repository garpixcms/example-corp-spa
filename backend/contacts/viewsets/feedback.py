from rest_framework import mixins, viewsets
from django.conf import settings
from garpix_notify.models import Notify
from ..serializers.feedback import FeedbackSerializer
from ..models.feedback import Feedback


class CreateFeedbackViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Feedback.objects.none()
    serializer_class = FeedbackSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        Notify.send(settings.FEEDBACK_EVENT, {
            'feedback': instance,
        }, email=instance.email)
