# Generated by Django 2.1.7 on 2019-03-20 19:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [("experiments", "0036_auto_20190320_1754")]

    operations = [
        migrations.RemoveField(model_name="experiment", name="dashboard_image_url"),
        migrations.RemoveField(model_name="experiment", name="dashboard_url"),
        migrations.RemoveField(model_name="experiment", name="enrollment_dashboard_url"),
        migrations.RemoveField(model_name="experiment", name="total_users"),
    ]
