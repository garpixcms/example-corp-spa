from modeltranslation.translator import TranslationOptions, register
from ..models import PostListPage


@register(PostListPage)
class PostListPageTranslationOptions(TranslationOptions):
    pass
