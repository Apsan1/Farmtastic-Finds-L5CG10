from django.urls import path,include
from .views import ProductsList,ProductsDetail,ProductsDeleteAll

urlpatterns = [
    path("products/", ProductsList.as_view(), name="product-list"),
    path("products/<str:pk>/", ProductsDetail.as_view(), name="product-detail"),
    path("all/",ProductsDeleteAll.as_view(),name='all-delete'),
]
