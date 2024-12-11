from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, TestimonialViewSet, InstagramPostViewSet

router = DefaultRouter()
router.register('products', ProductViewSet)
router.register('testimonials', TestimonialViewSet)
router.register('instagram', InstagramPostViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
