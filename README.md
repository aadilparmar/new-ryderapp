# Ryder

Ryder is a ride-sharing application that connects users with captains for transportation services. This project consists of a backend server and a frontend client.

## Project Structure

## Backend

The backend is built with Node.js and Express. It handles user and captain authentication, ride management, and integration with Google Maps API for location services.

### Setup

1. Install dependencies:
    ```sh
    npm install
    ```

2. Create a [.env](http://_vscodecontentref_/23) file in the [Backend](http://_vscodecontentref_/24) directory with the following content:
    ```
    PORT=4000
    DB_CONNECT=mongodb://0.0.0.0/ryder
    JWT_SECRET=ryder-secret
    GOOGLE_MAPS_API=your-google-maps-api-key
    ```

3. Start the server:
    ```sh
    npm start
    ```

## Frontend

The frontend is built with React and Vite. It provides a user interface for users and captains to interact with the Ryder service.

### Setup

1. Install dependencies:
    ```sh
    npm install
    ```

2. Create a [.env](http://_vscodecontentref_/25) file in the [frontend](http://_vscodecontentref_/26) directory with the following content:
    ```
    VITE_BASE_URL=http://localhost:4000
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Features

- User and captain authentication
- Ride creation and management
- Real-time location updates
- Integration with Google Maps API for location services

## License

This project is licensed under the MIT License.