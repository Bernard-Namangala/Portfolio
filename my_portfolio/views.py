from django.shortcuts import render
from .models import Contact, Project, SocialMediaIcon, Person
from .serializers import ContactSerializer, ProjectSerializer, \
     SocialMediaIconSerializer, PersonSerializer
from rest_framework import generics, permissions


class ContactView(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class PortfolioView(generics.RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
