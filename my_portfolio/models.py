from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField(max_length=1500)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Contacts"


class Project(models.Model):
    project_name = models.CharField(max_length=100)
    project_summary = models.CharField(max_length=255)
    project_description = models.TextField(max_length=1500)
    github_repo = models.URLField(blank=True)
    live_demo = models.URLField(blank=True)
    owner = models.ForeignKey(to="Person", related_name="projects",
                              on_delete=models.CASCADE)

    def __str__(self):
        return self.project_name


def content_file_name(instance, filename):
    name, ext = filename.split('.')
    file_path = "images/{0}/{1}.{2}".format(instance.project.project_name.lower(), name, ext)
    return file_path


class Images(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to=content_file_name, blank=True)

    class Meta:
        verbose_name_plural = "Images"

    def __str__(self):
        return self.project.project_name + " image"


class Technologies(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="technologies")
    technology_name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Technologies"

    def __str__(self):
        return self.technology_name


class SocialMediaIcon(models.Model):
    link = models.URLField(max_length=2087)
    icon = models.ImageField(upload_to="images/social")
    owner = models.ForeignKey(to="Person", related_name="social", 
                              on_delete=models.CASCADE)

    def __str__(self):
        return self.link


class Person(models.Model):
    """
    person model
    """
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    developer_position = models.CharField(max_length=100)
    introduction_main = models.CharField(max_length=255)
    introduction_typed = models.CharField(max_length=255)
    profile_photo = models.ImageField(upload_to="images/profile", blank=True)
    about = models.TextField(max_length=1000)
    messages = models.ManyToManyField(to=Contact, blank=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)
    
    class Meta:
        verbose_name_plural = "people"