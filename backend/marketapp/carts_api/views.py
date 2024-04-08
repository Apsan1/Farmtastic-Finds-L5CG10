from rest_framework.response import Response
from rest_framework import status
from .serializers import CartSerializer
from rest_framework import generics
from carts.models import Cart, CartItem

#similarly we can create a class for cart and cartitem

class CartList(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    
class CartDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    
class CartDeleteAll(generics.DestroyAPIView):
    queryset = Cart.objects.all()
    
    def delete(self, request, *args, **kwargs):
        self.queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CartItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartSerializer
    
class CartItemDeleteAll(generics.DestroyAPIView):
    queryset = CartItem.objects.all()
    
    def delete(self, request, *args, **kwargs):
        self.queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CartItemCreate(generics.CreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartSerializer
    
    def create(self, request, *args, **kwargs):
        cart = Cart.objects.get(pk=request.data['cart'])
        product_id = request.data['product_id']
        quantity = request.data['quantity']
        cart_item = CartItem.objects.create(cart=cart, product_id=product_id, quantity=quantity)
        return Response(status=status.HTTP_201_CREATED)
    
class CartItemUpdate(generics.UpdateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartSerializer
    
    def update(self, request, *args, **kwargs):
        cart_item = CartItem.objects.get(pk=kwargs['pk'])
        cart_item.quantity = request.data['quantity']
        cart_item.save()
        return Response(status=status.HTTP_200_OK)
    
class CartItemDelete(generics.DestroyAPIView):
    queryset = CartItem.objects.all()
    
    def delete(self, request, *args, **kwargs):
        self.queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CartItemCreate(generics.CreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartSerializer
    
    def create(self, request, *args, **kwargs):
        cart = Cart.objects.get(pk=request.data['cart'])
        product_id = request.data['product_id']
        quantity = request.data['quantity']
        cart_item = CartItem.objects.create(cart=cart, product_id=product_id, quantity=quantity)
        return Response(status=status.HTTP_201_CREATED)