from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from .carData import carData
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from .serializer import UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .serializer import ProductSerializer,UserSerializer,UserSerializerWithToken, VehicleSerializer
from app.models import Product, Vehicle
# Create your views here.



@api_view(['GET'])
def getProducts(request):
    products=Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')
# ----------------getting the vehicle data-----

@api_view(['GET'])
def getVehicle(request):
    vehicle=Vehicle.objects.all()
    serializer=VehicleSerializer(vehicle,many=True)
    return Response(serializer.data)



@api_view(['GET'])
def getCarData(request):
    return Response(carData)



@api_view(['GET'])
def getSingleCar(request, pk):
    singleCar = None
    for i in carData:
        if i['_id'] == pk:
            singleCar = i
            break
    return Response(singleCar)
# ------- get single vehicle


@api_view(['GET'])
def getSingleVehicle(request,pk):
    vehicle=Vehicle.objects.get(_id=pk)
    serializer=VehicleSerializer(vehicle,many=False)
    return Response(serializer.data)

    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['message'] = 'hello'
        # ...

        return token


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k,  v in serializer. items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfiles(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    user = User.objects.all()
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data)

#register the new user here

@api_view(['POST'])
def registerUser(request):
    data=request.data
    print(data)
    try:
        user=User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])

        )
        serializer = UserSerializerWithToken(user,many = False)
        return Response(serializer.data)
    except:
        message={'details:':'USER WITH THIS  EMAIL ALREADY EXIST'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    


