from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import authentication, permissions

class LoginAPI(APIView):
    authentication_classes = [authentication.BasicAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_superuser:
                login(request, user)  # Log the user into Django's authentication system
                return Response({'message': 'Logged in successfully'})
            else:
                return Response({'message': 'Only superusers are allowed to login'}, status=403)
        else:
            return Response({'message': 'Invalid username or password'}, status=401)
