from rest_framework import serializers
from .models import Home, AboutMe, Contact, Project, Images, Technologies, SocialMediaIcon


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        exclude = ['id']


class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        exclude = ['id']


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        exclude = ['id']


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ('image',)


class TechnologiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technologies
        fields = ('technology_name',)


class ProjectSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    technologies = TechnologiesSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('id', 'project_name', 'project_summary', 'project_description', 'github_repo', 'live_demo', 'images',
                  'technologies')


class SocialMediaIconSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaIcon
        exclude = ['id']
