from django.db import models
from garpix_page.models import BaseListPage


class PostListPage(BaseListPage):
    paginate_by = 25
    template = 'pages/post_list.html'

    class Meta:
        verbose_name = "PostList"
        verbose_name_plural = "PostLists"
        ordering = ('-created_at',)
