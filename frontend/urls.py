from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('about/', views.index),
    path('contact/', views.index),
    path('portfolio/', views.index),
    path('project/<int:project_id>/', views.project),
    path('skills/', views.index)
]