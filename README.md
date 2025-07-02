# MemeBox 3000 📦

A retro Y2K-themed meme viewer that fetches fresh, random memes from Reddit using the [Meme API](https://github.com/D3vd/Meme_Api). Built with Node.js, Express, and a nostalgic Windows 98-style UI powered by 98.css.

![MemeBox 3000](https://img.shields.io/badge/Status-Live-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-18.17.1-green)
![License](https://img.shields.io/badge/License-MIT-blue)

**[Live Demo](https://meme-box-3000.vercel.app/)**

---

## 📋 Table of Contents

* [🎮 Demo](#-demo)
* [✨ Features](#-features)
* [🚀 Quick Start](#-quick-start)
* [📖 Usage](#-usage)
* [🏗️ Architecture](#️-architecture)
* [🤝 Contributing](#-contributing)
* [📄 License](#-license)
* [🙏 Acknowledgments](#-acknowledgments)

---
## 🎮 Demo
https://github.com/user-attachments/assets/1a3fe169-8964-4f39-86a0-18e73c386a41



*Enjoy the nostalgia of Windows 98 while browsing random memes from Reddit.*

---

## ✨ Features

* 🎲 **Random Meme Fetching** – Displays memes from popular Reddit subreddits
* 🖼️ **Retro Y2K UI** – Windows 98-style interface with pixel fonts and classic styling
* 🔒 **Secure** – Basic security best practices (Helmet, CORS handling)
* 🌈 **Extensible** – Add more subreddits or features with ease

---


## 🚀 Quick Start

### Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local server:**
   ```bash
   node server.js
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---


## 📖 Usage

### Basic Usage

1. **View a Meme:**

   * Click the "Show New Meme" button
   * A new meme will load from a random subreddit

2. **What You Get:**

   * Memes pulled from real Reddit communities
   * Styled in a nostalgic Windows 98 look

### Subreddits

The app randomly selects from popular meme subreddits

---

## 🏗️ Architecture

### Project Structure

```
meme/
├── api/
│   └── gimme.js           # Vercel serverless function for memes
│
├── favicon
│
├── public/
│   ├── index.html        
│   ├── code.js            
│   └── fry.png            # Fallback image
│
├── server.js              # Local Express server (for dev only)
├── vercel.json            # Vercel config (rewrites, headers)
├── package.json           # Project dependencies & scripts
└── README.md

```

### Technology Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express (for local development)
* **API:** Serverless functions (Vercel)
* **Styling:** [98.css](https://jdan.github.io/98.css/)
* **Fonts:** VT323 (Google Fonts)
* **Routing (Vercel config):** `/gimme` and `/gimme/:subreddit` are routed to the serverless function in `(api/gimme.js)`. Handles meme fetching and CORS headers in Vercel.

## Scripts

- `npm start` – Prints a message to use `vercel dev` for local development.
- `npm run build` – No build step required.

---


## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### How to Contribute

1. **Fork the repository**

2. **Create a feature branch:**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**

4. **Commit:**

   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to your fork:**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

### Ideas for Contributions

* Add dark/light theme toggle
* Add share-to-social feature
* Add subreddit search or filter

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](#-license) 

```
MIT License

Copyright (c) 2025 Sanjay Potdar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
In the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

```

---

## 🙏 Acknowledgments

* **[Meme API](https://github.com/D3vd/Meme_Api)** – Provides meme data from Reddit
* **[98.css](https://jdan.github.io/98.css/)** – For the retro UI styling

---

### 💡 Inspiration

MemeBox 3000 was inspired by the charm of early 2000s desktop interfaces. It's a love letter to nostalgia and internet culture with a modern twist.

---

<div align="center">

**Made with ❤️ and a touch of '90s flair**

[![GitHub stars](https://img.shields.io/github/stars/SanjayPotdar/MemeBox-3000?style=social)](https://github.com/SanjayPotdar/MemeBox-3000)
[![GitHub forks](https://img.shields.io/github/forks/SanjayPotdar/MemeBox-3000?style=social)](https://github.com/SanjayPotdar/MemeBox-3000)

</div>
