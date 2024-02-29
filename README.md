# Dil Foods - E-Commerce Dashboard

## Overview

This project aims to create a responsive and interactive dashboard that visualises data from a fictional e-commerce platform.

## Implemented Features in Table using useContext and useReducer

- Packaging orders displayed in a list view, sorted by OrderLineID.
- Filter orderlines by quantity.
- Grouping by OrderID and UserID.
- Rich and responsive UI design.
- Color-coded package types for easy identification.
- Unit test cases for quality assurance.

## Setting Up Locally

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd folder_name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to `http://localhost:3000` to view the application.

## About the API

The application fetches orderlines data from the real-world API using the following endpoint:

**Request URL:** `https://minizuba-fn.azurewebsites.net/api/orderlines`

**Request Method:** `GET`

**Parameters:**
- `typeID` (required): ID of the packaging type (values range from 1 to 14).
- `quantity` (optional): Number of items ordered under one orderline.

**Response Format:**
Results are ordered in ascending order of OrderLineID.

Sample Response:
```json
[{
  "OrderLineID": 307,
  "OrderID": 151,
  "StockItemID": 200,
  "Description": "Black and yellow heavy despatch tape 48mmx100m",
  "PackageTypeID": 1,
  "Quantity": 96,
  "UnitPrice": 4.1
}]
```

## Features

- Used Real World API to simulate data fetching
- Used Recharts for Charts
- Mobile responsive UI design with Interactive Effects
- Modular Component Structure
- Subtle Animations for enhancing User Experience
- Used Jest for testing critical component (Sidebar) and Reducer Function
- Added Documentation
- Git Version Control
- Graceful Error Handling