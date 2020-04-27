from django.test import TestCase
from .models import Contact, Project, Technologies, Person
from django.urls import reverse
from django.core.files import File

def create_project_object(project_name, project_summary, project_description, github_repo, live_demo):
    project = Project.objects.create()
    project.project_name = project_name
    project.project_summary = project_summary
    project.project_description = project_description
    project.github_repo = github_repo
    project.live_demo = live_demo
    return project


def create_person_object():
    person = Person.objects.create()
    person.first_name = "Bernard"
    person.last_name = "Namangala"
    person.developer_position = "Software Developer"
    person.introduction_main = "Main introduction"
    person.introduction_typed = "I am the typed introduction"
    person.about = "i am about the person"

    return person


def create_contact_object(name, email, message):
    contact = Contact.objects.create()
    contact.name = name
    contact.email = email
    contact.message = message
    return contact


class TestPersonModel(TestCase):
    def setUp(self):
        person = create_person_object()
        person.save()

    def test_person_instance(self):
        person = Person.objects.get(id=1)
        self.assertEqual(person.first_name, "Bernard")


class TestContactModel(TestCase):
    def setUp(self):
        contact1 = create_contact_object("Bernard", "bernard@gmail.com", 'I am a message')
        contact1.save()
        contact2 = create_contact_object("Visitor", "visitor@gmail.com", "I am a message")
        contact2.save()

    def test_contact_instance(self):
        contacts = Contact.objects.all().order_by('id')
        self.assertGreater(len(contacts), 0)
        self.assertEqual(contacts[0].name, "Bernard")
        self.assertEqual(contacts[0].email, "bernard@gmail.com")
        self.assertEqual(contacts[0].message, "I am a message")
        self.assertEqual(contacts[1].name, "Visitor")
        self.assertEqual(contacts[1].email, "visitor@gmail.com")
        self.assertEqual(contacts[1].message, "I am a message")


class TestContactView(TestCase):

    def test_post_function_of_contact(self):
        response = self.client.post(reverse("my_portfolio:contact"), data={"name": "Bernard",
                                                                           "email": "bernard@gmail.com",
                                                                           "message": "I am a message"},
                                    content_type="application/json")
        self.assertEqual(response.status_code, 201)
        contacts = Contact.objects.all()
        self.assertQuerysetEqual(contacts, ["<Contact: Bernard>"])
        self.assertEqual(contacts[0].name, "Bernard")
        self.assertEqual(contacts[0].email, "bernard@gmail.com")
        self.assertEqual(contacts[0].message, "I am a message")


class TestProjectModel(TestCase):
    def setUp(self):
        project1 = create_project_object("Demo project 1", "This is a demo project", "This is a demo project",
                                         "https://www.github.com", "https://www.project1.com")

        project1.save()
        project2 = create_project_object("Demo project 2", "This is a demo project", "This is a demo project",
                                         "https://www.github.com", "https://www.project2.com")
        project2.save()

    def test_project_instances(self):
        projects = Project.objects.all().order_by('id')
        self.assertEqual(len(projects), 2)
        self.assertEqual(projects[0].project_name, "Demo project 1")
        self.assertEqual(projects[0].project_summary, "This is a demo project")
        self.assertEqual(projects[0].project_description, "This is a demo project")
        self.assertEqual(projects[0].github_repo, "https://www.github.com")
        self.assertEqual(projects[0].live_demo, "https://www.project1.com")
        self.assertEqual(projects[1].project_summary, "This is a demo project")
        self.assertEqual(projects[1].project_description, "This is a demo project")
        self.assertEqual(projects[1].github_repo, "https://www.github.com")
        self.assertEqual(projects[1].live_demo, "https://www.project2.com")
