from modeltranslation.translator import TranslationOptions, register
from ..models import ContactPage


@register(ContactPage)
class ContactPageTranslationOptions(TranslationOptions):
    pass
