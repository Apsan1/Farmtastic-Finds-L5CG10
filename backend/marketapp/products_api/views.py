from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from products.models import Products,Category
from .serializers import ProductsSerializers



class ProductsList(generics.ListCreateAPIView):
    queryset=Products.objects.all()
    serializer_class= ProductsSerializers
   
class ProductsDetail(generics.RetrieveDestroyAPIView):
    queryset=Products.objects.all()
    serializer_class= ProductsSerializers
    
class ProductsDeleteAll(generics.DestroyAPIView):
    queryset = Products.objects.all()

    def delete(self, request, *args, **kwargs):
        self.queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)   