from django.db import models
from garpix_page.models import BaseSearchPage


class SearchPage(BaseSearchPage):
    paginate_by = 25
    template = 'pages/search.html'

    class Meta:
        verbose_name = "Search"
        verbose_name_plural = "Searchs"
        ordering = ('-created_at',)
