from django.urls import path
from . import views
app_name = "my_portfolio"

urlpatterns = [
    path('home/', views.HomeView.as_view(), name="home"),
    path('about/', views.AboutMeView.as_view(), name="about"),
    path('contact/', views.ContactView.as_view(), name="contact"),
    path('projects/', views.ProjectView.as_view(), name="projects"),
    path('projects/<int:pk>', views.ProjectDetail.as_view(), name='project'),
    path('social/', views.SocialMediaIconView.as_view(), name="social")
]
