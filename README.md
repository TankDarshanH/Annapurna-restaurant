# 🍽️ Annapurna Restaurant Web App

[🌐 Live Demo](https://annapurna-restaurant.netlify.app/) <!-- Replace with your actual live URL -->

Annapurna is a modern, responsive restaurant web application built using **React.js** and **Tailwind CSS**. It features a dynamic menu, user authentication, a shopping cart, and a review system to enhance the digital dining experience.

---

## ✨ Features

- 🧾 **Dynamic Menu** – Browse a wide range of food items categorized for easy access.
- 🛒 **Shopping Cart** – Add items from any page and view them in a shared cart.
- 🔐 **User Authentication** – Sign up, sign in, and manage your profile securely.
- ⭐ **Review System** – Leave ratings and reviews for dishes.
- 🔍 **Search & Filter** – Quickly find your favorite meals with real-time search.
- 📱 **Responsive Design** – Works beautifully on mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend & Auth**: Appwrite
- **Deployment**: Netlify

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Cart.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Reviews.jsx
├── context/
│   └── CartContext.jsx
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/annapurna-restaurant.git
cd annapurna-restaurant
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Appwrite

- Create a new project in [Appwrite](https://appwrite.io).
- Set up authentication and database collections.
- Enable CORS for `http://localhost:5173` and your deployed Netlify domain.
- Then create a `.env` file in the root with:

```env
VITE_APPWRITE_ENDPOINT=your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
```

### 4. Start the Development Server

```bash
npm run dev
```

Your app will be live on [http://localhost:5173](http://localhost:5173)

---

## 🌐 Live Demo

👉 [Visit the Live App](https://annapurna-restaurant.netlify.app/) <!-- Replace this if needed -->

---

## 🖼️ Screenshots

> You can add UI screenshots here to showcase the interface.

---

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by Darshan Tank

