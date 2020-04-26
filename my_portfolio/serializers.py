from rest_framework import serializers
from .models import Contact, Project, Images, Technologies, SocialMediaIcon, Person


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


class PersonSerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True, read_only=True)
    social = SocialMediaIconSerializer(many=True, read_only=True)

    class Meta:
        """
        meta data
        """
        model = Person
        exclude = ['id', 'messages']
