from rest_framework import serializers
from products.models import Products, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)

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
    
   
