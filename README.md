# AI Blog Generator

A fully responsive, feature-rich AI-powered blog generator built using **Next.js**, **React**, and **Google Generative AI**. This application provides highly optimized SEO-friendly blogs with titles, meta descriptions, tags, keywords, and categories.

## 🌟 Features

- **AI-Generated Content**: Leverages Google Generative AI and Gemini Flash 1.5 API to create high-quality blog content.
- **SEO Optimization**: Generates SEO-friendly titles, meta descriptions, tags, keywords, and categories for blogs.
- **User Authentication**: Secure user login and signup using **Google OAuth** via Auth.js and Next.js middleware.
- **Payment Integration**: Uses **Stripe** for subscription-based payment processing.
- **State Management**: Efficiently manages the application's state using **Zustand**.
- **Responsive Design**: Fully optimized for all devices with light and dark themes.
- **Database Integration**: Stores user and blog data in **MongoDB Atlas** using **Mongoose** as the ORM.
- **Deployment**: Deployed on **Vercel** for seamless performance and scalability.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js APIs, Node.js
- **Database**: MongoDB Atlas (via Mongoose)
- **Authentication**: Google OAuth (Auth.js)
- **Payments**: Stripe
- **AI Tools**: Google Generative AI, Gemini Flash 1.5 API
- **State Management**: Zustand
- **Deployment**: Vercel

---

## 🚀 Getting Started

### Prerequisites

1. Node.js (v16 or higher)
2. MongoDB Atlas account
3. Stripe account
4. Google Cloud Project with OAuth credentials

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shubhamsrmn/blog-post-generator
   cd ai-blog-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env.local file in the root directory and configure the following:
   ```bash
   MONGODB_URI=
   AUTH_CLIENT_ID=
   AUTH_CLIENT_SECRET=
   AUTH_TRUST_HOST=true
   NEXTAUTH_SECRET=
   GOOGLE_AI_API_KEY=
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
   STRIPE_SECRET_KEY=
   NEXTAUTH_URL=
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 to view the application in the browser.

🌐 Live Demo: [AI Blog Generator](https://ai-blog.shubhamsrmn.me)
