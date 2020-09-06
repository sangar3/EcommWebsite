from django.contrib import admin
from . models import *
# Register your models here to see in admin page.

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)