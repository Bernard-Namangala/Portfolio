# Generated by Django 2.2.10 on 2020-04-24 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_portfolio', '0010_auto_20200310_1124'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('developer_position', models.CharField(max_length=100)),
                ('introduction_main', models.CharField(max_length=255)),
                ('introduction_typed', models.CharField(max_length=255)),
                ('profile_photo', models.ImageField(blank=True, upload_to='images/profile')),
            ],
        ),
    ]
