# CRUD-in-Angular
Production-ready Angular CRUD example wired to a real REST API (ReqRes). Covers listing, detail, create/update/delete, API-key, and typed services with RxJS.
# CRUD Application in Angular with a Real API

This repository demonstrates a full CRUD (Create, Read, Update, Delete) application built using **Angular** and connected to a real REST API (ReqRes). The app allows users to perform basic operations on user data, including fetching a list of users, adding a new user, updating user details, and deleting a user.

## Features
- **Create**: Add a new user to the system.
- **Read**: Fetch and display a list of users, as well as user details.
- **Update**: Modify an existing user's information.
- **Delete**: Remove a user from the list.
- **API Integration**: Communicates with a real API (`https://reqres.in`).
- **RxJS**: Utilizes RxJS for asynchronous data handling.


### Prerequisites
- Node.js (>=22.13.1)
- Angular CLI (>=18.0.2)

### Steps to Get Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/CRUD-in-Angular.git
   cd CRUD-in-Angular

   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   ng serve
   ```

   The application will be running at `http://localhost:4200/`.

## Screenshots

Here are some screenshots of the application:

- **User List Page**:
   ![User List](link-to-image.jpg)

- **User Detail Page**:
   ![User Detail](link-to-image.jpg)

- **Add User Form**:
   ![Add User](link-to-image.jpg)

You can replace the `link-to-image.jpg` with the actual URLs of your images.

## Video Demo

Here’s a video demonstration of how the application works:

[Watch Video](link-to-video.mp4)

Make sure to replace `link-to-video.mp4` with the actual URL where the video is hosted (e.g., YouTube, Vimeo, or your own server).

## Technologies Used

- **Angular**: Frontend framework
- **HttpClient**: For making HTTP requests
- **RxJS**: For managing asynchronous data streams
- **Bootstrap**: For responsive UI styling (Optional: If you are using Bootstrap)
- **ReqRes API**: Fake API for user management (https://reqres.in)

## API Documentation

The API is provided by [ReqRes](https://reqres.in/). It offers endpoints for:

- **GET** `/api/users`: Fetches the list of users.
- **GET** `/api/users/{id}`: Fetches details of a specific user.
- **POST** `/api/users`: Creates a new user.
- **PUT** `/api/users/{id}`: Updates an existing user.
- **DELETE** `/api/users/{id}`: Deletes a user.

### Example API Call:
```ts
this.httpClient.get('https://reqres.in/api/users')
```


## Acknowledgements

- [ReqRes](https://reqres.in/) for providing a simple API for testing.
- [Angular](https://angular.io/) for the powerful framework.
- [Bootstrap](https://getbootstrap.com/) for the responsive design.

---

Feel free to open issues for bugs or improvements. Happy coding! 🚀
