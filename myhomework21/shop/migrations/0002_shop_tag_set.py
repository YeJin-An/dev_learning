# Generated by Django 4.0 on 2021-12-13 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shop',
            name='tag_set',
            field=models.ManyToManyField(blank=True, to='shop.Tag'),
        ),
    ]
