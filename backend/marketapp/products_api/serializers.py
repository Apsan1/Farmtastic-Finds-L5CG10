from rest_framework import serializers
from products.models import Products, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)

class ProductsSerializer(serializers.ModelSerializer):
    category = CategorySerializer()  # Define CategorySerializer here

    class Meta:
        model = Products
        fields = ('category', 'id', 'name', 'price', 'stock', 'image', 'description')

    def create(self, validated_data):
        category_data = validated_data.pop('category')  # Pop category data from validated_data
        category_instance, _ = Category.objects.get_or_create(**category_data)  # Get or create category instance
        product_instance = Products.objects.create(category=category_instance, **validated_data)  # Create product instance
        return product_instance
