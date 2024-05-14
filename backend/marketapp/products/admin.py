# from django.contrib import admin
# from .models import Category, Products


# admin.site.register(Products)
# admin.site.register(Category)

from django.contrib.admin import ModelAdmin, register


from products.models import Products,Category

@register(Products)
class ProductAdmin(ModelAdmin):
    list_display = ('name','description','category','stock','price','image')
    icon_name='donut_small'

@register(Category)
class CategoryAdmin(ModelAdmin):
    list_display = ('name','cat_image')
    icon_name='add_shopping_cart'
