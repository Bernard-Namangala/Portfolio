from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')


def project(request, project_id):
    return render(request, 'frontend/index.html')


def handler404(request, exception):
    return render(request, 'frontend/index.html')