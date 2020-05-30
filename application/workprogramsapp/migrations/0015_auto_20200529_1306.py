# Generated by Django 2.2.6 on 2020-05-29 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workprogramsapp', '0014_auto_20200507_1623'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='topic',
            options={'ordering': ['number']},
        ),
        migrations.AlterField(
            model_name='onlinecourse',
            name='course_url',
            field=models.URLField(verbose_name='Ссылка на курс'),
        ),
        migrations.AlterField(
            model_name='onlinecourse',
            name='platform',
            field=models.CharField(blank=True, max_length=512, null=True, verbose_name='Платформа'),
        ),
        migrations.AlterField(
            model_name='onlinecourse',
            name='title',
            field=models.CharField(max_length=512, verbose_name='Название курсу'),
        ),
    ]
