from ..models.post_page import PostPage
from django.contrib import admin
from garpix_page.admin import BasePageAdmin


@admin.register(PostPage)
class PostPageAdmin(BasePageAdmin):
    pass
