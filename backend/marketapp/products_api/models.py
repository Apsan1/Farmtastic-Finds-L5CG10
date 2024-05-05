from django.db import models

# Create your models here.
# class Items(models.Model):
#     name=models.CharField(max_length=100,blank=False)
#     price=models.CharField(max_length=100,blank=False)
#     quantity=models.CharField(max_length=100,blank=False)
    

#     def __str__(self):
#         return self.name

class Order(models.Model):
    customer=models.CharField(max_length=100,blank=False)
    email=models.CharField(max_length=100,blank=False)
    phone=models.CharField(max_length=100,blank=False)
    products=models.JSONField(default=list)
    

    def __str__(self):
        return self.name
