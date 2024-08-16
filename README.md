# Chat App

## Overview

This is a simple chat application built with Node.js, Express, and Socket.IO. It provides real-time messaging capabilities, allowing users to join a chat room, send messages, and see updates when other users join or leave the chat. The front-end is managed with plain JavaScript and the app serves static files from the `public` directory.

## Features

- Real-time chat functionality
- User join/leave notifications
- Message handling and display
- Simple front-end with basic UI elements

## Installation

1. Clone the Repository

```bash
git clone <repository-url>
cd chat-app
```
2. Install Dependencies

Ensure you have Node.js installed. Run the following command to install the required npm packages:

```bash
npm install
```

3. Running the Application

Start the Server

Run the following command to start the server:

```bash
node server.js
```

This will start the server on port 4000. You should see the message Server is running in your terminal.

3. Access the Chat App

Open your web browser and navigate to http://localhost:4000. You should see the chat interface.

## How It Works

### Server (Node.js + Express + Socket.IO)
- Handles incoming connections from clients using Socket.IO.
- Emits updates when users join or leave the chat.
- Broadcasts messages to all connected users.

### Client (JavaScript)
- Allows users to join the chat by entering a username.
- Sends messages to the server and receives updates.
- Renders messages and notifications in the chat interface.

## File Structure
- `server.js` - The main server file that sets up the Express server and Socket.IO.
- `public/` - Directory containing the static files served by the Express server.
  - `index.html` - The main HTML file for the chat interface.
  - `styles.css` - CSS file for styling the chat interface.
  - `app.js` - JavaScript file that manages the client-side logic.

## Usage

### Join the Chat
- Enter a username and click "Join" to enter the chat room.

### Send Messages
- Type a message in the input field and click "Send" to broadcast it to all users.

### Exit the Chat
- Click "Exit Chat" to leave the chat room and refresh the page.

## Contributing
Feel free to fork the repository, make changes, and submit a pull request. If you encounter any issues or have suggestions for improvements, please open an issue on the repository.
