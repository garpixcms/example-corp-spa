from modeltranslation.translator import TranslationOptions, register
from ..models import PostPage


@register(PostPage)
class PostPageTranslationOptions(TranslationOptions):
    pass
