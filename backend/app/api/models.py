from django.db import models

class Message(models.Model):
    id = models.BigAutoField(primary_key=True)
    text = models.TextField()


    def __str__(self):
        return self.text
