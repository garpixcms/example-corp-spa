from django.contrib import admin
from garpix_page.admin import BasePageAdmin
from ..models.home_page import HomePage
from .carousel_item import CarouselItemInline


@admin.register(HomePage)
class HomePageAdmin(BasePageAdmin):
    inlines = (CarouselItemInline,)
