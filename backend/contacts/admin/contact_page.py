from ..models.contact_page import ContactPage
from django.contrib import admin
from garpix_page.admin import BasePageAdmin


@admin.register(ContactPage)
class ContactPageAdmin(BasePageAdmin):
    pass
