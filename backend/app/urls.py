
from django.urls import path
from app import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
 
)


urlpatterns = [
    path('', views.getRoutes,name="getRoutes"),
    path('users/register/',views.registerUser,name = 'register'),
    path('car/', views.getCarData, name = "getCarData"),
    path('products/',views.getProducts,name="getProducts"),
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('car/<int:pk>', views.getSingleCar, name = "getSingleCar"),
    path('user/profile/',views.getUserProfiles,name ="getUserProfiles"),
    path ('users/', views.getUsers,name = "getUser"),
    path('vehicle/', views.getVehicle, name = "getVehicle"),
    path('vehicle/<int:pk>', views.getSingleVehicle, name = "getSingleVehicle"),

]
