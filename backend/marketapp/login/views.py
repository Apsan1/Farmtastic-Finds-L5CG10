from django.contrib.auth import authenticate, login,logout
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import redirect
from rest_framework import authentication, permissions
from django.http import HttpResponseRedirect
from django.urls import reverse

class LoginAPI(APIView):
    # authentication_classes = [authentication.BasicAuthentication]
    # permission_classes = [permissions.AllowAny]

    def post(self, request):
        authentication_classes = [authentication.BasicAuthentication]
        permission_classes = [permissions.AllowAny]
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

def custom_logout(request):
    logout(request)
    return redirect('http://localhost:5173/admin/login')
