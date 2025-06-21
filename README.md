# Car Dealership API

This project provides a RESTful API for managing car brands and cars. It is built using Spring Boot and use SQL database.

## Features

*   **Brand Management:**
    *   Retrieve all car brands.
*   **Car Management:**
    *   Retrieve cars by brand name with pagination.
    *   Search cars by brand and description with pagination.
*   **Global Exception Handling:**
    *   Provides a centralized exception handler for consistent error responses.

## Technologies Used

*   Java 17+
*   Spring Boot
*   Spring Data JPA
*   H2 Database (in-memory)
*   Maven

## Setup Instructions

To set up and run this project locally, follow these steps:

1.  **Prerequisites:**
    *   Ensure you have Java Development Kit (JDK) 17 or higher installed.
    *   Maven build tool installed.

2.  **Clone the Repository (if applicable):**
    ```bash
    git clone <repository_url>
    cd car-dealership-api
    ```
    *(Note: Replace `<repository_url>` with the actual URL if this project is hosted on a Git repository.)*

3.  **Build the Project:**
    Navigate to the project's root directory (where `pom.xml` is located) and run the following Maven command:
    ```bash
    mvn clean install
    ```

4.  **Run the Application:**
    You can run the Spring Boot application using Maven:
    ```bash
    mvn spring-boot:run
    ```
    Alternatively, you can run the generated JAR file:
    ```bash
    java -jar target/demo-0.0.1-SNAPSHOT.jar
    ```
    The application will start on `http://localhost:8080` by default.

## API Endpoints

### Brands

*   **GET /api/brands**
    *   **Description:** Retrieves a list of all available car brands.
    *   **Response:**
        ```json
        [
            {
                "id": 1,
                "name": "Toyota"
            },
            {
                "id": 2,
                "name": "Honda"
            }
        ]
        ```

### Cars

*   **GET /cars/brand/{brandName}**
    *   **Description:** Retrieves a paginated list of cars by brand name. If `brandName` is "all", it retrieves all cars.
    *   **Parameters:**
        *   `brandName` (Path Variable): The name of the brand (e.g., "Toyota", "all").
        *   `page` (Query Parameter, optional): Page number (default: 0).
        *   `size` (Query Parameter, optional): Number of items per page (default: 9).
    *   **Example:** `GET /cars/brand/Toyota?page=0&size=5`
    *   **Response:**
        ```json
        {
            "content": [
                {
                    "id": 101,
                    "title": "Camry",
                    "description": "Mid-size sedan",
                    "imagePath": "/images/camry.jpg"
                }
            ],
            "pageable": { ... },
            "last": true,
            "totalPages": 1,
            "totalElements": 1,
            "size": 5,
            "number": 0,
            "first": true,
            "numberOfElements": 1,
            "empty": false
        }
        ```

*   **GET /cars/search**
    *   **Description:** Searches for cars by brand and description with pagination.
    *   **Parameters:**
        *   `brand` (Query Parameter): The brand name to search for.
        *   `description` (Query Parameter): A keyword to search within the car descriptions.
        *   `page` (Query Parameter, optional): Page number (default: 0).
        *   `size` (Query Parameter, optional): Number of items per page (default: 9).
    *   **Example:** `GET /cars/search?brand=Toyota&description=sedan&page=0&size=5`
    *   **Response:** (Same as `/cars/brand/{brandName}`)

## Error Handling

Global exception handling is implemented to provide consistent error responses. For example, internal server errors will return a JSON object with a timestamp and a message.

```json
{
    "timestamp": "2025-06-21T10:30:00.123456",
    "message": "Internal Server Error: Something went wrong."
}
```

## Database

This project uses   MySQL database in `src/main/resources/application.properties`






## Frontend Application (React)

This project includes a React frontend application that interacts with the Spring Boot API to display car brands and cars, and allows for searching and filtering.

### Features

*   Display a list of car brands in a sidebar.
*   Display cars, with pagination.
*   Filter cars by brand.
*   Search cars by brand and description.

### Technologies Used

*   React.js
*   JavaScript
*   HTML/CSS

### Setup Instructions

To set up and run the React frontend locally, follow these steps:

1.  **Prerequisites:**
    *   Ensure you have Node.js and npm (Node Package Manager) installed.

2.  **Navigate to the Frontend Directory:**
    Assuming your React project is in a subdirectory (e.g., `frontend` or `client`) relative to the API project, navigate into it:
    ```bash
    cd carstore
    ```

3.  **Install Dependencies:**
    Install the necessary Node.js packages:
    ```bash
    npm install
    ```

4.  **Run the Application:**
    Start the React development server:
    ```bash
    npm start
    ```
    The application will typically open in your browser at `http://localhost:3000`.

### API Integration

The React application is configured to communicate with the Spring Boot API running on `http://localhost:8080`. Ensure the backend API is running before starting the frontend application.


