from ..models.carousel_item import CarouselItem
from django.contrib import admin


class CarouselItemInline(admin.TabularInline):
    model = CarouselItem
    fk_name = 'home_page'
    fields = ('title', 'image', 'sort', 'page', 'url')
    extra = 1
