from django.shortcuts import render
from rest_framework import viewsets, generics
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from core.models import Brand, Phonemodel
from core.serializer import BrandSerializer, PhoneSerializer


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class Brandupdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    lookup_field = 'id'


"""class BrandDetail(viewsets.ViewSet):

    def get(request):
        queryset = Brand.objects.all()
        serializer_class = BrandSerializer(queryset)
        return Response(serializer_class.data)
    
    def post(request):
        queryset = Brand.objects.all()
        serializer_class = BrandSerializer(queryset)
        if serializer_class.is_valid:
            return Response(serializer_class.data)
        return Response(serializer_class.data)
    
    def retrieve(request, pk):
        queryset = Brand.objects.filter(id=pk)
        serializer_class = BrandSerializer(queryset)
        return Response(serializer_class.data)
"""

class PhoneModelViewSet(viewsets.ModelViewSet):
    queryset = Phonemodel.objects.all()
    serializer_class = PhoneSerializer