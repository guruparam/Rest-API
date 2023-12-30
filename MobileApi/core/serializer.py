from rest_framework import serializers
from core.models import Brand, Phonemodel

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand 
        fields = 'name', 'image'


class PhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phonemodel
        fields = '__all__'