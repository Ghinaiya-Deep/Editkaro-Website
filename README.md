# 🎬 EditKaro.in — Official Website

This repository contains the source code for **EditKaro.in**, a Social Media Marketing and Video Editing Agency website.  
The project was developed as part of a web development internship task and demonstrates fundamental concepts like responsive UI, form handling, and portfolio showcase.

---

## 🚀 Live Demo

🔗 Website Link: *(Add Netlify/Vercel link here)*  
🔗 GitHub Repository: *(Current Repo)*

---

## 📌 Project Summary

The purpose of this project is to create a fully functional and responsive business website for EditKaro.in to showcase their services, portfolio, and provide a way for potential clients to contact them.

The website includes:

- Fully Responsive UI
- Functional Email Subscription System
- Dynamic Contact Form integrated with Google Sheets
- Categorized Video Portfolio Showcase

---

## 🛠️ Tech Stack

| Technology | Used For |
|-----------|-----------|
| HTML5 | Structure |
| CSS3 | Styling & Responsiveness |
| JavaScript | Form Logic, Interactivity |
| Google Sheets + Apps Script | Storage for form submissions |
| Netlify/Vercel | Deployment |

---

## 📂 Pages Included

| Page | Description |
|------|------------|
| `index.html` | Homepage with email form and service overview |
| `portfolio.html` | Video portfolio categorized by editing style |
| `about.html` | About company & placeholder team section |
| `contact.html` | Contact form storing data into Google Sheets |

---

## ✨ Features

- 📱 **Fully responsive UI**
- 🎞️ **Video showcase with filtering**
- 📨 **Email Collector (Google Sheets Integration)**
- 📬 **Contact Form (Stores name, email, phone & message)**  
- 🔍 **SEO optimized**
- ⚡ **Fast and clean code**

---

## 📁 Folder Structure

```

|-- assets/
|   |-- css/
|   |-- js/
|-- index.html
|-- about.html
|-- contact.html
|-- portfolio.html
|-- README.md

```

---

## 📧 Google Sheets Integration Steps

### Step 1: Create a Google Sheet

Create a spreadsheet with these headers:

```

Name | Email | Phone | Message | Timestamp

````

### Step 2: Add Google Apps Script

Go to `Extensions > Apps Script` and paste:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.message,
    new Date(),
  ]);

  return ContentService.createTextOutput("Success");
}
````

### Step 3: Deploy

* Click **Deploy > New Deployment**
* Select **Web App**
* Set access to: **Anyone**

Copy the generated URL and paste it into:

* `emailCollector.js`
* `contactFormSubmit.js`

---

## 🧪 Testing

✔ Responsive design tested on Desktop, Tablet & Mobile
✔ Works on Chrome, Safari, Firefox, Edge
✔ All forms tested and data received in spreadsheet

---

## 🚀 Deployment

This project is deployed using:

```
Platform: Netlify 
Status: Live
Link: https://editkroin.netlify.app/
```

---

## 📈 Future Improvements

* Admin dashboard to manage portfolio
* Blog section
* Dark / Light mode toggle
* Authentication for premium clients

---

## 👨‍💻 Developer(s)

* **Name:** *Deep Ghinaiya*
* **Role:** *Web Developer*



