from rest_framework import serializers
from ..models import CarouselItem


class CarouselItemSerializer(serializers.ModelSerializer):
    link = serializers.SerializerMethodField(read_only=True, required=False)

    def get_link(self, obj):
        return obj.get_link()

    class Meta:
        model = CarouselItem
        fields = '__all__'
