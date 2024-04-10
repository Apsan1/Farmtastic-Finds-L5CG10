from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from products.models import Products,Category
from .serializers import ProductsSerializer



class ProductsList(generics.ListCreateAPIView):
    queryset=Products.objects.all()
    serializer_class= ProductsSerializer
   
class ProductsDetail(generics.RetrieveDestroyAPIView):
    queryset=Products.objects.all()
    serializer_class= ProductsSerializer
    
class ProductsDeleteAll(generics.DestroyAPIView):
    queryset = Products.objects.all()

    def delete(self, request, *args, **kwargs):
        self.queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)   