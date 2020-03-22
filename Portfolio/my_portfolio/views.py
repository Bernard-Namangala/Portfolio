from django.shortcuts import render
from .models import Home, AboutMe, Contact, Project, SocialMediaIcon
from .serializers import HomeSerializer, AboutMeSerializer, ContactSerializer, ProjectSerializer, \
     SocialMediaIconSerializer
from rest_framework import generics


class HomeView(generics.ListAPIView):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer


class AboutMeView(generics.ListAPIView):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer


class ContactView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ProjectView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectDetail(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SocialMediaIconView(generics.ListAPIView):
    queryset = SocialMediaIcon.objects.all()
    serializer_class = SocialMediaIconSerializer

