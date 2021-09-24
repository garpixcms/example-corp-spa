from django.db import models


class Feedback(models.Model):
    email = models.EmailField(verbose_name='Email')
    comment = models.TextField(verbose_name='Комментарий')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    class Meta:
        ordering = ('-created_at',)
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'

    def __str__(self):
        return self.email
