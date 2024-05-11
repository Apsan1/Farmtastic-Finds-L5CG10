from django.db import models

def upload_to(instance,filename):
    return 'items/{filename}'.format(filename=filename)

# Define the Category model
class Category(models.Model):
    # Define a field for the category name
    name = models.CharField(max_length=100, blank=False)
    cat_image = models.ImageField(upload_to=upload_to, default='items/default.jpeg')
    # Define a string representation for the category
    def __str__(self):
        return self.name