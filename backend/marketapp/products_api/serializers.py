from rest_framework import serializers
from products.models import Products,Category

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields=('name',)

class ProductsSerializers(serializers.ModelSerializer):
    category = CategorySerializers()
    class Meta:
        model=Products
        fields=('category','id','name','price','stock','image','description')