from django.db import models
from garpix_page.models import BasePage



class HomePage(BasePage):
    template = "pages/home.html"

    def get_context(self, request=None, *args, **kwargs):
        from ..serializer import CarouselItemSerializer

        context = super().get_context(request, *args, **kwargs)
        obj = kwargs.get('object')
        # context.update(object_context)
        context.update({
            'carousel_items': CarouselItemSerializer(
                obj.carousel_items.all(), many=True, context={"request": request}).data
        })
        return context

    class Meta:
        verbose_name = "Home"
        verbose_name_plural = "Homes"
        ordering = ("-created_at",)
