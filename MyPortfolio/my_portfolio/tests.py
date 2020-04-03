from django.test import TestCase
from .models import Home, AboutMe, Contact, Project, Technologies
from django.urls import reverse
from django.core.files import File


def create_home_object():
    home = Home.objects.create()
    home.first_name = "Bernard"
    home.last_name = "Namangala"
    home.developer_position = "Software Developer"
    home.introduction_main = "Main introduction"
    home.introduction_typed = "I am the typed introduction"
    return home


def create_about_object():
    about = AboutMe.objects.create()
    about.about = "I am a software engineer"
    return about


def create_contact_object(name, email, message):
    contact = Contact.objects.create()
    contact.name = name
    contact.email = email
    contact.message = message
    return contact


def create_project_object(project_name, project_summary, project_description, github_repo, live_demo):
    project = Project.objects.create()
    project.project_name = project_name
    project.project_summary = project_summary
    project.project_description = project_description
    project.github_repo = github_repo
    project.live_demo = live_demo
    return project


class TestHomeModel(TestCase):
    def setUp(self):
        home = create_home_object()
        home.save()

    def test_home_instance(self):
        home_instance = Home.objects.get(first_name="Bernard")
        self.assertEqual(home_instance.first_name, "Bernard")
        self.assertEqual(home_instance.last_name, "Namangala")
        self.assertEqual(home_instance.developer_position, "Software Developer")
        self.assertEqual(home_instance.introduction_main, "Main introduction")
        self.assertEqual(home_instance.introduction_typed, "I am the typed introduction")


class TestHomeView(TestCase):
    def test_home_view_without_home_instance(self):
        response = self.client.get(reverse("my_portfolio:home"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'[]')

    def test_home_view_with_home_instance(self):
        home = create_home_object()
        home.save()
        response = self.client.get(reverse("my_portfolio:home"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'[{"first_name":"Bernard","last_name":"Namangala",'
                                           b'"developer_position":"Software Developer",'
                                           b'"introduction_main":"Main introduction",'
                                           b'"introduction_typed":"I am the typed introduction",'
                                           b'"profile_photo":null}]')


class TestAboutMeModel(TestCase):
    def setUp(self):
        about = create_about_object()
        about.save()

    def test_about_instance(self):
        about = AboutMe.objects.all()[0]
        self.assertEqual(about.about, "I am a software engineer")


class TestABoutView(TestCase):
    def test_empty_about_page(self):
        response = self.client.get(reverse("my_portfolio:about"))
        self.assertEqual(response.content, b'[]')

    def test_filled_about_me(self):
        about = create_about_object()
        about.save()
        response = self.client.get(reverse("my_portfolio:about"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'[{"about":"I am a software engineer"}]')


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
    def test_contact_view_without_any_contacts(self):
        response = self.client.get(reverse("my_portfolio:contact"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'[]')

    def test_contact_view_with_two_contacts(self):
        contact1 = create_contact_object("Bernard", "bernard@gmail.com", 'I am a message')
        contact1.save()
        contact2 = create_contact_object("Visitor", "visitor@gmail.com", "I am a message")
        contact2.save()
        response = self.client.get(reverse("my_portfolio:contact"))
        self.assertEqual(response.content, b'[{"name":"Bernard","email":"bernard@gmail.com","message":"I am a '
                                           b'message"},{"name":"Visitor","email":"visitor@gmail.com","message":"I am '
                                           b'a message"}]')

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


class TestAllProjectsView(TestCase):
    def test_projects_view_without_any_projects(self):
        response = self.client.get(reverse("my_portfolio:projects"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'[]')

    def test_projects_view_with_two_projects(self):
        project1 = create_project_object("Demo project 1", "This is a demo project", "This is a demo project",
                                         "https://www.github.com", "https://www.project1.com")

        project1.save()
        # adding technologies to project one
        [Technologies.objects.create(project=project1,
                                     technology_name=f"tech{i}").save() for i in range(2)]
        project2 = create_project_object("Demo project 2", "This is a demo project", "This is a demo project",
                                         "https://www.github.com", "https://www.project2.com")
        project2.save()
        # adding technologies to project two
        [Technologies.objects.create(project=project2,
                                     technology_name=f"tech{i}").save() for i in range(2)]
        response = self.client.get(reverse("my_portfolio:projects"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'[{"id":1,"project_name":"Demo project 1","project_summary":"This is a '
                                           b'demo project","project_description":"This is a demo project",'
                                           b'"github_repo":"https://www.github.com",'
                                           b'"live_demo":"https://www.project1.com",'
                                           b'"images":[],'
                                           b'"technologies":[{'
                                           b'"technology_name":"tech0"},{"technology_name":"tech1"}]},{"id":2,'
                                           b'"project_name":"Demo project 2","project_summary":"This is a demo '
                                           b'project","project_description":"This is a demo project",'
                                           b'"github_repo":"https://www.github.com",'
                                           b'"live_demo":"https://www.project2.com",'
                                           b'"images":[],'
                                           b'"technologies":[{'
                                           b'"technology_name":"tech0"},{"technology_name":"tech1"}]}]'
                         )
