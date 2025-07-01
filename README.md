# MemeBox 3000 📦

A retro Y2K-themed meme viewer that fetches fresh, random memes from Reddit using the [Meme API](https://github.com/D3vd/Meme_Api). Built with Node.js, Express, and a nostalgic Windows 98-style UI powered by 98.css.

![MemeBox 3000](https://img.shields.io/badge/Status-Live-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-18.17.1-green)
![License](https://img.shields.io/badge/License-MIT-blue)

**[Live Demo](https://vercel.com)**

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
https://github.com/user-attachments/assets/36d90566-f88c-48e3-a0bf-ad55bcf50416



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
├── public/
│   ├── index.html         # Main UI
│   ├── code.js            
│   └── fry.png           
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
* **Vercel Serverless Config:** `/gimme` and `/gimme/:subreddit` are routed to the serverless function. `(api/gimme.js)` Handles meme fetching and CORS for Vercel deployments.

---

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
* Add meme download feature
* Add share-to-social feature
* Add subreddit search or filter

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for full details.

```
MIT License

Copyright (c) 2025 MemeBox 3000

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...

[Full text as before]
```

---

## 🙏 Acknowledgments

* **[Meme API](https://github.com/D3vd/Meme_Api)** – For providing meme data
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