from django.contrib import admin
from .models import Category, Products
from products_api.models import Order


admin.site.register(Products)
admin.site.register(Category)
admin.site.register(Order)
