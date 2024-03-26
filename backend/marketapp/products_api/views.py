from rest_framework import generics
from products.models import Products,Category
from .serializers import ProductsSerializers



class ProductsList(generics.ListCreateAPIView):
    queryset=Products.objects.all()
    serializer_class= ProductsSerializers
   
class ProductsDetail(generics.RetrieveDestroyAPIView):
    queryset=Products.objects.all()
    serializer_class= ProductsSerializers
    
    