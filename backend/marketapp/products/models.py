from django.db import models

class Category(models.Model):
    name=models.CharField(max_length=100,blank=False)
    
    def __str__(self):
        return self.name
    
    
class Products(models.Model):

    name=models.CharField(max_length=100,blank=False)
    description=models.TextField(blank=True,null=True);
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    stock=models.BooleanField(default=False)
    

    def __str__(self):
        return self.name

   
