from ..models import User
from rest_framework import viewsets
from ..serializers.user import UserSerializer
from rest_framework import filters
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.response import Response
from rest_framework import permissions


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('username',)

    # permission_classes = (permissions.AllowAny,)

    def get_permissions(self):
        permission_classes = [permissions.IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]

    @action(methods=['get'], detail=False)
    def current(self, request):
        """
        Получение данных текущего пользователя.
        """
        if request.user.is_authenticated:
            user = User.objects.get(pk=request.user.pk)
            serializer = UserSerializer(user, context={'request': request})
            return Response(serializer.data)
        else:
            return Response({'status': False}, status=status.HTTP_400_BAD_REQUEST)
