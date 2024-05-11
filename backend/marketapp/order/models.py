from django.db import models
import uuid

class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    customer=models.CharField(max_length=100,blank=False)
    email=models.CharField(max_length=100,blank=False)
    phone=models.CharField(max_length=100,blank=False)
    products=models.JSONField(default=list)
    payment=models.CharField(max_length=250,default="COD")
    status=models.CharField(max_length=100,default="Unpaid")
    address=models.CharField(max_length=250,default='None')
    amount=models.CharField(max_length=100,blank=False,default='100')
    

    def __str__(self):
        return self.phone
