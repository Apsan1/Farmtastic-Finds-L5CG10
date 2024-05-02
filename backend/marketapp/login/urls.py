from django.urls import path
from . views import LoginAPI

urlpatterns = [
    path("login/",LoginAPI.as_view(),name='login'),
]
