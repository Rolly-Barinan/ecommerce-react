# Generated by Django 4.2.1 on 2023-05-08 08:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_vehicle_transaction'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vehicle',
            name='user',
        ),
        migrations.DeleteModel(
            name='Transaction',
        ),
        migrations.DeleteModel(
            name='Vehicle',
        ),
    ]