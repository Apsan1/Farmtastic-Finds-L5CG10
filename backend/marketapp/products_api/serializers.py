from rest_framework import serializers
from products.models import Products, Category
from . models import Order

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)
        
class CategorySerializerAll(serializers.ModelSerializer):
     class Meta:
        model = Category
        fields='__all__'
class ProductsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        fields = ('category', 'id', 'name', 'price', 'stock', 'image', 'description')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        category_data = instance.category
        if category_data:
            category_representation = CategorySerializer(category_data).data
            representation['category'] = category_representation.get('name')
        return representation
    
   
        
class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ('id','customer','email','phone','products','payment','status')
               