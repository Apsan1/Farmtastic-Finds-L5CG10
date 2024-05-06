from django.db import models
import uuid

# Create your models here.
# class Items(models.Model):
#     name=models.CharField(max_length=100,blank=False)
#     price=models.CharField(max_length=100,blank=False)
#     quantity=models.CharField(max_length=100,blank=False)
    

#     def __str__(self):
#         return self.name

class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    customer=models.CharField(max_length=100,blank=False)
    email=models.CharField(max_length=100,blank=False)
    phone=models.CharField(max_length=100,blank=False)
    products=models.JSONField(default=list)
    payment=models.CharField(max_length=250,default="COD")
    status=models.CharField(max_length=100,default="Unpaid")
    

    def __str__(self):
        return self.name
