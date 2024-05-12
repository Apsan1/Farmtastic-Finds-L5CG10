from django.urls import path,include
from .views import ProductsList,ProductsDetail,ProductsDeleteAll,CategoryList,CategoryDetail,OrdersList,OrdersDetail,apiDoc

urlpatterns = [
    path("",apiDoc,name="homepage"),
    path("products/", ProductsList.as_view(), name="product-list"),
    path("products/<str:pk>/", ProductsDetail.as_view(), name="product-detail"),
    path("category/", CategoryList.as_view(), name="product-list"),
    path("category/<str:pk>/",CategoryDetail.as_view(), name="product-detail"),
    path("all/",ProductsDeleteAll.as_view(),name='all-delete'),
    path('order/',OrdersList.as_view(),name='orders'),
    path('order/<str:pk>/',OrdersDetail.as_view(),name='orders'),
]