from django.urls import path,include
from .views import ProductsList,ProductsDetail

urlpatterns = [
    path("", ProductsList.as_view(), name="product-list"),
    path("<str:pk>/", ProductsDetail.as_view(), name="product-detail")
]
