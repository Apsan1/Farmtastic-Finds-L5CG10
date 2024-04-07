# MarketApp

This is a guide to set up and run the MarketApp on your local server.

## Getting Started

Follow these steps to set up and run the MarketApp on your local machine:

### Prerequisites

- [XAMPP] installed on your machine.
- Python and pip installed on your machine.

### Installation

1. Clone the repository:

   git clone <repository_url>
   Navigate to the backend folder:
   cd backend

2. Install the required dependencies:

   pip install -r requirements.txt

## Database Setup

Open XAMPP and start the MySQL server.

Create a MySQL database named MarketApp.

Back in the terminal (inside the backend folder), navigate to the marketapp folder.

Run the following commands to create and apply migrations:

python manage.py makemigrations
python manage.py migrate

Access phpMyAdmin and select the MarketApp database. You should see the tables created inside it.

### Insert initial data into the products_category table:

INSERT INTO products_category (name) VALUES
('Fruits'),
('Dairy & eggs'),
('Vegetables'),
('Meat & Poultry');

### Insert sample data into the products_products table:

INSERT INTO products_products (category_id, name, description, price, stock) VALUES
((SELECT id FROM products_category WHERE name = 'Fruits'), 'Grapes', 'Plump and tasty grapes', 2.29, true),
((SELECT id FROM products_category WHERE name = 'Meat & Poultry'), 'Chicken', 'Free-range chicken', 5.99, true);

## Running the Application

Navigate to the backend folder in your terminal.

Run the Django development server:

python manage.py runserver

Access the MarketApp at http://127.0.0.1:8000/products/ in your web browser.
