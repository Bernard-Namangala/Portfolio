from django.urls import path
from . import views
app_name = "my_portfolio"

urlpatterns = [
    path('contact/', views.ContactView.as_view(), name="contact"),
    path('person/<int:pk>/', views.PortfolioView.as_view(), name="porfolio")
]
