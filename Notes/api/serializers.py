from rest_framework.serializers import ModelSerializer
from .models import Note

# serializers here 


class NoteSerializer(ModelSerializer):

    class Meta:
        model = Note
        fields = "__all__"

        
