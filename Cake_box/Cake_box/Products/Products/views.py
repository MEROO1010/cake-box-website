from rest_framework.viewsets import ModelViewSet
from .models import Product, Testimonial, InstagramPost
from .serializers import ProductSerializer, TestimonialSerializer, InstagramPostSerializer

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class TestimonialViewSet(ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class InstagramPostViewSet(ModelViewSet):
    queryset = InstagramPost.objects.all()
    serializer_class = InstagramPostSerializer
