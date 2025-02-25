# Real-Time Chat App

A real-time chat application built with **Angular** (frontend) and **Firebase** (backend). Users can join the chat with their name, send messages, and view the chat history. The app features a clean and responsive UI.

---

## Features

- **Realtime Messaging**: Messages are delivered instantly using Firebase Realtime Database.
- **User Persistence**: Users can join with their name, and it persists across sessions.
- **Message History**: All messages are stored and displayed in the chat.
- **Responsive Design**: The app works seamlessly on desktop, tablet, and mobile devices.
- **Log Out**: Users can log out and rejoin with a different name.

---

## Technologies Used

- **Frontend**: Angular (v19)
- **Backend**: Firebase Realtime Database
- **Styling**: SCSS

---

## Prerequisites

Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Angular CLI](https://angular.io/cli) (v16 or higher)
- A Firebase project (for backend setup)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/muhammadhamx/chat-app.git
cd chat-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project (e.g., ChatApp).
3. Register a web app and copy the Firebase configuration.
4. Open `src/environments/environment.ts` and replace the placeholder values with your Firebase config:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  },
};
```

5. Enable Firebase Realtime Database in test mode (for development purposes).

### 4. Run the App

```bash
ng serve
```

Open your browser and navigate to [http://localhost:4200](http://localhost:4200).

---

## Live Demo

Check out the live demo of the app: **[Chat App Live Demo](#)** (https://chatapp-gray-five.vercel.app/)

---

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## Acknowledgments

- **Angular** for the frontend framework.
- **Firebase** for realtime database and hosting.

