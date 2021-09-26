from rest_framework import serializers
from ..models.feedback import Feedback


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['email', 'comment']
