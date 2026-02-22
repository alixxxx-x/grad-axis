from django.contrib.auth.models import User 
from rest_framework import serializers

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = user.objects.create_user(**validated_data)
        return user