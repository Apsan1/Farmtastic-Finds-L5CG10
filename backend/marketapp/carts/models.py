from django.db import models

# first n,
# last n
# email, phone,

# (local str)
# {
# 	product_id,
# 	quantity,
#  }



class Cart(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    product_id = models.IntegerField()
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.email} {self.phone} {self.products}"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product_id = models.IntegerField()
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.cart} {self.product_id} {self.quantity}"
    
    def save(self, *args, **kwargs):
        self.cart.total += self.quantity
        self.cart.save()
        super().save(*args, **kwargs)
        
    def delete(self, *args, **kwargs):
        
        self.cart.total -= self.quantity
        self.cart.save()
        super().delete(*args, **kwargs)
        
    def update(self, *args, **kwargs):
        self.cart.total += self.quantity
        self.cart.save()
        super().update(*args, **kwargs)
        
