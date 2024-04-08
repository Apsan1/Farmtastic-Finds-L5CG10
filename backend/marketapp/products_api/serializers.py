from rest_framework import serializers
from products.models import Products,Category

class ProductsSerializers(serializers.ModelSerializer):
    # category = serializers.SlugRelatedField(slug_field='name', queryset=Category.objects.all())
    class Meta:
        model=Products
        fields=('category','id','name','price','stock','image')