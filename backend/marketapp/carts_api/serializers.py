from rest_framework import serializers
from carts.models import Cart, CartItem

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['product_id', 'quantity']
        

class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True)
    
    class Meta:
        model = Cart
        fields = ['first_name', 'last_name', 'email', 'phone', 'cart_items']
        
    def create(self, validated_data):
        cart_items = validated_data.pop('cart_items')
        cart = Cart.objects.create(**validated_data)
        for cart_item in cart_items:
            CartItem.objects.create(cart=cart, **cart_item)
        return cart
    
    def update(self, instance, validated_data):
        cart_items = validated_data.pop('cart_items')
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()
        
        for cart_item in cart_items:
            product_id = cart_item.get('product_id')
            quantity = cart_item.get('quantity')
            cart_item_instance = instance.cart_items.get(product_id=product_id)
            cart_item_instance.quantity = quantity
            cart_item_instance.save()
        return instance
    
