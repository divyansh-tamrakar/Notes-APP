from app import models
from rest_framework.serializers import ModelSerializer


class RoomSerializer(ModelSerializer):

    class Meta:
        model = models.Room
        fields = "__all__"