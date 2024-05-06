from django.urls import path
from .views import paymentAPI, paymentSuccess

urlpatterns = [
    path("", paymentAPI, name='payment'),  # Endpoint for initiating payment
    path("success/", paymentSuccess, name='payment-success'),  # Endpoint for handling payment success
]
