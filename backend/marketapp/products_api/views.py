from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import filters
from products.models import Products,Category
from order.models import Order
from .serializers import ProductsSerializer,CategorySerializerAll,OrderSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class= CategorySerializerAll
   
class CategoryDetail(generics.RetrieveDestroyAPIView):
    queryset=Category.objects.all()
    serializer_class= CategorySerializerAll

class ProductsList(generics.ListCreateAPIView):
    queryset=Products.objects.all()
    serializer_class= ProductsSerializer
    search_field=['name','category']
    filter_backends = (filters.SearchFilter,)
    
    def  get_queryset(self):
       queryset=super().get_queryset()
       search_query = self.request.query_params.get('search', None)  
       if search_query:
            # Check if the search query matches any category
            category = Category.objects.filter(name__icontains=search_query).first()
            if category:
                # If category found, filter products by both name and category
                queryset = queryset.filter(name__icontains=search_query) | \
                           queryset.filter(category=category)
            else:
                # If no category found, only filter products by name
                queryset = queryset.filter(name__icontains=search_query)
       return queryset
   
class ProductsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Products.objects.all()
    serializer_class= ProductsSerializer
    
class ProductsDeleteAll(generics.DestroyAPIView):
    queryset = Products.objects.all()

    def delete(self, request, *args, **kwargs):
        self.queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)   
    
    
class OrdersList(generics.ListCreateAPIView):
    queryset=Order.objects.all()
    serializer_class= OrderSerializer 
    
class OrdersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Order.objects.all()
    serializer_class= OrderSerializer     
    
def apiDoc(request):
     return render(request,'index.html')   