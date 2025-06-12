
# 🔗 KuttyLink - Full Stack URL Shortener ✨

A complete, self-hosted URL shortener built with a sleek, glowing frontend and a custom Node.js backend. KuttyLink features a beautiful glassmorphism interface, custom star-trail cursor, and a fully functional API to handle shortening and redirection—all without relying on third-party services.


## 📋 Features

- ✨ **Glassmorphism UI** – Frosted glass look on the main card.
- 💡 **Glowing Elements** – Buttons, inputs, and title with futuristic glow.
- 🌠 **Star-Trail Cursor** – Follows your mouse with animated stardust.
- ⚙️ **Custom Backend API** – Built with Node.js + Express, no third-party service.
- 💾 **Persistent Storage** – URL mappings saved to a local JSON file.
- 🔁 **Dynamic Redirection** – Short codes redirect to the correct URL.
- 📋 **One-Click Copy** – Easily copy shortened URLs.
- 📱 **Responsive Design** – Fully usable on desktop and mobile devices.

---

## 🛠️ Technology Stack

### 🖥️ Frontend
- **HTML5** – Semantic markup.
- **CSS3** – Styling with glassmorphism and glowing animations.
- **Vanilla JavaScript (ES6+)** – Interactivity and API communication.

### 🧠 Backend
- **Node.js** – JavaScript runtime for server-side logic.
- **Express.js** – Lightweight web server.
- **File System** – JSON file (`urls.json`) acts as a simple database.

---

## 🏗️ Architecture: How It Works

### 1. User Enters URL (Frontend)
- User inputs a long URL and clicks "Get Short Link".

### 2. API Call (Frontend → Backend)
- A `POST /api/shorten` request is made with the long URL.

### 3. Backend Processing
- Express generates a random 6-character code.
- Adds the mapping to `urls.json`.
- Responds with a full short URL (e.g., `http://localhost:3000/aB1cDe`).

### 4. Response (Backend → Frontend)
- The frontend displays the shortened link.
- Clicking "Copy" copies it to the clipboard.

### 5. Redirection
- When a user visits `/aB1cDe`, the server redirects to the long URL.
- If the code doesn't exist, it returns a 404.

---

## ⚙️ API Endpoints

### 📌 1. Shorten URL
- **Endpoint:** `POST /api/shorten`
- **Request Body:**
```json
{
  "longUrl": "https://www.example.com"
}
````

* **Success Response:**

```json
{
  "shortUrl": "http://localhost:3000/aB1cDe"
}
```

* **Error Response (400):**

```json
{
  "error": "URL is required"
}
```

### 🔁 2. Redirect URL

* **Endpoint:** `GET /:shortCode`
* **Example:** `GET /aB1cDe`
* **Success:** Redirects to original URL (`301 Moved Permanently`)
* **Error:** Returns `404 URL not found`

---

## 💻 Getting Started (Local Setup)

### ✅ Prerequisites

* Install [Node.js](https://nodejs.org/) (includes npm)

### 📦 Installation Steps

```bash
# Clone the repository
git clone https://github.com/ARUNULAGAPPAN/KUTTYLINK.git

# Navigate into the project directory
cd KUTTYLINK

# Install backend dependencies
npm install

# Start the server
npm start
```

Visit `http://localhost:3000` in your browser.
You're now ready to shorten URLs locally! All links are saved in `urls.json`.

---

## 📄 License

Distributed under the **MIT License**.
See [`LICENSE`](./LICENSE) for more information.

---

## 🌟 Acknowledgements

Created with 💖 by [ARUNULAGAPPAN](https://github.com/ARUNULAGAPPAN)
This is a self-hosted, beginner-friendly full-stack project—perfect to learn and extend.

```

---

✅ **Next Step:** Save this content as your `README.md` file in your repo `KUTTYLINK`.

Let me know if you'd like:
- A deployable version for platforms like Vercel or Render.
- QR code integration.
- MongoDB version for scalable storage.
```
