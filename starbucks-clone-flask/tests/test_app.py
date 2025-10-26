import unittest
from app import create_app, db
from app.models import User, Product, Order

class AppTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.app = create_app('testing')
        cls.client = cls.app.test_client()
        with cls.app.app_context():
            db.create_all()

    @classmethod
    def tearDownClass(cls):
        with cls.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_homepage(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Welcome to Starbucks Clone', response.data)

    def test_menu_page(self):
        response = self.client.get('/menu')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Menu', response.data)

    def test_product_page(self):
        product = Product(name='Test Product', price=5.00)
        with self.app.app_context():
            db.session.add(product)
            db.session.commit()
        response = self.client.get(f'/product/{product.id}')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Test Product', response.data)

    def test_login(self):
        response = self.client.post('/auth/login', data={
            'username': 'testuser',
            'password': 'testpassword'
        })
        self.assertEqual(response.status_code, 302)  # Redirect after login

    def test_registration(self):
        response = self.client.post('/auth/register', data={
            'username': 'newuser',
            'password': 'newpassword'
        })
        self.assertEqual(response.status_code, 302)  # Redirect after registration

if __name__ == '__main__':
    unittest.main()