from django.contrib import admin

# Register your models here.
from django.contrib import admin
from app.models import *
# Register your models here.

admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(Review)
admin.site.register(Vehicle)
admin.site.register(Transaction)