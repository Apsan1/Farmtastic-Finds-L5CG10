# Generated by Django 5.0.3 on 2024-05-05 15:00

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("products_api", "0001_initial"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Items",
        ),
        migrations.AddField(
            model_name="order",
            name="products",
            field=models.JSONField(default=list),
        ),
    ]
