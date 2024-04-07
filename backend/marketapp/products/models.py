from django.db import models

# Define the Category model
class Category(models.Model):
    # Define a field for the category name
    name = models.CharField(max_length=100, blank=False)

    # Define a string representation for the category
    def __str__(self):
        return self.name

# Define the Products model
class Products(models.Model):
    # Define fields for the product name, description, category, price, and stock
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)  
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    stock = models.BooleanField(default=False)
    image = models.ImageField(upload_to='products/', null=True, blank=True)

    # Define a string representation for the product
    def __str__(self):
        return self.name
