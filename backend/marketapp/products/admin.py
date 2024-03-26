from django.contrib import admin
from .models import Category, Products


admin.site.register(Products)
admin.site.register(Category)