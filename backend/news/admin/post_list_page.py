from ..models.post_list_page import PostListPage
from django.contrib import admin
from garpix_page.admin import BasePageAdmin


@admin.register(PostListPage)
class PostListPageAdmin(BasePageAdmin):
    pass
