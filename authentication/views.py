import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework import generics, views, status
from rest_framework.response import Response
from authentication.serializers.user import UserSerializer


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class LoginView(views.APIView):

    def post(self, request, format=None):
        data = json.loads(request.body)

        username = data.get('username')
        password = data.get('password')

        user = authenticate(username=username, password=password)

        if not user:
            return Response({'error': 'Invalid username or password'},
                            status=status.HTTP_400_BAD_REQUEST)

        if not user.is_active:
            return Response({'error': 'User account inactive'},
                            status=status.HTTP_401_UNAUTHORIZED)

        login(request, user)
        serialized = UserSerializer(user)
        return Response(serialized.data)
