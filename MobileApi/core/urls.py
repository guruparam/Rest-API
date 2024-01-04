
from django.urls import path, include
from rest_framework import routers
from core import views


router = routers.DefaultRouter()
router.register(r'brands', views.BrandViewSet, basename='brand')
router.register(r'phonemodels', views.PhoneModelViewSet, basename='phonemodel')

urlpatterns = [
    path('api/', include(router.urls)),
]
