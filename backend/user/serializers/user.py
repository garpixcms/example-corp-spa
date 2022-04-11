from rest_framework import serializers
from ..models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
            'password',
            'first_name',
            'last_name',
        )
        read_only = (
            'username',
        )
        extra_kwargs = {
            'password': {'write_only': True},
        }
