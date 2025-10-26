# Starbucks Clone Flask

This project is a full-stack web application that replicates the functionality and design of the Starbucks website using Flask. It includes features for browsing products, user authentication, and an admin dashboard for managing the store.

## Features

- User registration and login
- Product browsing and detailed views
- Shopping cart functionality
- Admin dashboard for managing products and orders
- Responsive design

## Technologies Used

- Flask: A lightweight WSGI web application framework for Python.
- SQLAlchemy: An ORM for database management.
- Flask-WTF: For form handling and validation.
- HTML/CSS/JavaScript: For front-end development.
- Docker: For containerization of the application.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd starbucks-clone-flask
   ```

2. Create a virtual environment:
   ```
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```
   flask db init
   flask db migrate
   flask db upgrade
   ```

5. Run the application:
   ```
   python run.py
   ```

## Usage

- Visit `http://localhost:5000` to access the homepage.
- Navigate through the menu to view products.
- Add products to your cart and proceed to checkout.
- Admin users can access the dashboard to manage products and orders.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.