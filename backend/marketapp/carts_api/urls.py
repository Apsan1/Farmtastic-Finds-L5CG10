from django.urls import path,include
from .views import CartList, CartDetail, CartDeleteAll

urlpatterns = [
    path("cart/", CartList.as_view(), name="cart-list"),
    path("cart/<str:pk>/", CartDetail.as_view(), name="cart-detail"),
    path("cart/all/", CartDeleteAll.as_view(), name="cart-delete-all"),
]
