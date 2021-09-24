from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from garpix_page.models import BasePage
from ..forms.feedback import FeedbackForm
from garpix_notify.models import Notify
from django.conf import settings


class ContactPage(BasePage):
    content = RichTextUploadingField(verbose_name='Содержание', blank=True, default='')
    postal_address = models.CharField(max_length=250, blank=True, default='', verbose_name='Почтовый адрес')

    template = "pages/contact.html"

    def get_context(self, request=None, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        if request.method == 'POST':
            form = FeedbackForm(request.POST)
            if form.is_valid():
                feedback = form.save()
                Notify.send(settings.FEEDBACK_EVENT, {
                    'feedback': feedback,
                }, email=feedback.email)
                context.update({
                    'message': 'Сообщение успешно отправлено',
                })
            context.update({
                'form': form,
            })
        return context

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        ordering = ("-created_at",)
