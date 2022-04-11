from django.contrib import admin
from .models import User, LoginPage
from django.contrib.auth.admin import UserAdmin
from garpix_page.admin import BasePageAdmin


@admin.register(LoginPage)
class LoginPageAdmin(BasePageAdmin):
    pass


@admin.register(User)
class UserAdmin(UserAdmin):
    fieldsets = (
        ('Viber', {
            'fields': (
                'viber_chat_id',
                'viber_secret_key',
            )
        }),
    ) + UserAdmin.fieldsets
