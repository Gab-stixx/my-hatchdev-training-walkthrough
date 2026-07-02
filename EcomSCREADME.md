# E-Commerce Shopping Cart System (TypeScript)

## Overview

This project is a console-based E-Commerce Shopping Cart System built with TypeScript. It demonstrates the application of Object-Oriented Programming (OOP) principles, searching algorithms, sorting techniques, and basic data management.

The system simulates how an online shopping platform manages products and a customer's shopping cart.

---

# Features

## Product Catalog

The product catalog represents the online store inventory.

It allows you to:

* Add new products
* Remove products
* Search for products by ID (Linear Search)
* Sort products by price (ascending)
* Sort products by price (descending)
* Sort products alphabetically by name
* Display all available products
* Count the total number of products

---

## Shopping Cart

The shopping cart represents a customer's selected products.

It allows you to:

* Add products to the cart
* Automatically increase quantity if the product already exists in the cart
* Remove products from the cart
* Decrease quantity or remove the product completely
* View all cart items
* Calculate the total number of items
* Calculate the grand total
* Clear the cart
* Checkout while updating product stock

---

# Technologies Used

* TypeScript
* Object-Oriented Programming (OOP)
* Arrays
* Loops
* JavaScript Built-in Sorting
* Linear Search

---

# Project Structure

```
Product (Interface)
│
├── CartItem
│
├── ProductCatalog
│
└── ShoppingCart
```

---

# Classes

## 1. Product (Interface)

The `Product` interface defines the structure of every product.

Properties:

* id
* name
* price
* category
* stock

---

## 2. CartItem

Represents a single product inside the shopping cart.

Properties:

* product
* quantity

Methods:

* increaseQuantity()
* decreaseQuantity()
* getTotalPrice()

---

## 3. ProductCatalog

Stores and manages all available products.

Methods:

* addProduct()
* removeProduct()
* findProduct()
* sortByPriceAscending()
* sortByPriceDescending()
* sortByName()
* viewProducts()
* getProductCount()

---

## 4. ShoppingCart

Stores products selected by the customer.

Methods:

* addProduct()
* removeProduct()
* viewCart()
* clearCart()
* getGrandTotal()
* getTotalItems()
* checkout()

---

# Searching Algorithm

This project uses **Linear Search** to locate products inside the catalog.

Algorithm:

1. Start from the first product.
2. Compare its ID with the target ID.
3. Continue until the product is found.
4. Return the product.
5. Return `undefined` if no match exists.

Time Complexity:

* Best Case: **O(1)**
* Worst Case: **O(n)**

---

# Sorting

The project uses JavaScript's built-in `.sort()` method.

Sorting options include:

* Price (Lowest → Highest)
* Price (Highest → Lowest)
* Name (Alphabetical)

Time Complexity (average):

* **O(n log n)**

---

# Checkout Process

The checkout process follows these steps:

1. Check if the cart is empty.
2. Verify that every product has enough stock.
3. Reduce stock for every purchased product.
4. Display the customer's receipt.
5. Clear the shopping cart.
6. Confirm successful checkout.

---

# Object-Oriented Programming Concepts Used

This project demonstrates:

* Interfaces
* Classes
* Constructors
* Encapsulation
* Composition
* Methods
* Arrays of Objects
* Object Interaction
* Separation of Responsibilities

---

# Sample Workflow

1. Create a product catalog.
2. Add products to the catalog.
3. Display all available products.
4. Sort products by price.
5. Search for a product by ID.
6. Add products to the shopping cart.
7. View the shopping cart.
8. Calculate totals.
9. Checkout.
10. Verify updated product stock.

---

# Learning Objectives

This project was created to practice and understand:

* TypeScript fundamentals
* Object-Oriented Programming
* Searching algorithms
* Sorting techniques
* Working with arrays of objects
* Designing software using multiple classes
* Building a simple real-world application

---

# Future Improvements

Possible enhancements include:

* Binary Search for faster product lookup
* User accounts
* Order history
* Discount coupons
* Tax calculations
* Shopping cart persistence
* Product ratings and reviews
* Inventory management dashboard
* File or database storage
* Graphical user interface (GUI)



# Conclusion

This project demonstrates how Object-Oriented Programming can be used to model a real-world e-commerce application. By separating responsibilities between `Product`, `CartItem`, `ProductCatalog`, and `ShoppingCart`, the code remains organized, reusable, and easy to maintain.

It also provides practical experience with searching, sorting, arrays, loops, and software design principles while simulating the core functionality of an online shopping system.

---