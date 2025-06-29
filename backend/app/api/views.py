from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Message

class MessageView(APIView):
    def get(self, request):
        messages = Message.objects.values_list("text", flat=True)
        return Response({"messages": list(messages)})
