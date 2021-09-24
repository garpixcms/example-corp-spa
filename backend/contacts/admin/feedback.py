from django.contrib import admin
from ..models.feedback import Feedback


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('email', 'comment', 'created_at')
    readonly_fields = ('created_at',)
