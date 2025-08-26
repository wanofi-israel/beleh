
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.mail import send_mail
from .serializers import ContactSerializer

@api_view(['POST'])
def contact_view(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        name = serializer.validated_data['name']
        email = serializer.validated_data['email']
        phone = serializer.validated_data['phone']
        message = serializer.validated_data['message']

        subject = f"New Contact Message from {name}"
        body = f"""
        Name: {name}
        Email: {email}
        Phone: {phone}
        Message: {message}
        """
        try:
            send_mail(
                subject,
                body,
                'no-reply@example.com',  
                ['yourtargetemail@example.com'],  
                fail_silently=False,
            )
            return Response({"success": "Message sent successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
