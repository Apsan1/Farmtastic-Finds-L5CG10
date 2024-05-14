from django.contrib.admin import ModelAdmin, register
from django.contrib import admin
from django.contrib.auth.models import Group
from order.models import Order
@register(Order)
class OrderAdmin(ModelAdmin):
    list_display = ('customer', 'email', 'phone', 'display_product_names', 'display_product_prices', 'display_product_quantities', 'payment', 'status', 'address', 'amount')
    readonly_fields = ('customer', 'email', 'phone', 'payment', 'address', 'amount')  # Make these fields read-only
    icon_name='assignment'
    def get_fields(self, request, obj=None):
        if obj:  # If editing an existing object
            return ['status']  # Only the status field is editable
        else:  # If adding a new object
            return []

    def display_product_names(self, obj):
        return ', '.join(product['name'] for product in obj.products)
    display_product_names.short_description = 'Products'

    def display_product_prices(self, obj):
        return ', '.join(product['price'] for product in obj.products)
    display_product_prices.short_description = 'Prices'

    def display_product_quantities(self, obj):
        return ', '.join(str(product['totalQuantity']) for product in obj.products)
    display_product_quantities.short_description = 'Quantities'

admin.site.unregister(Group)