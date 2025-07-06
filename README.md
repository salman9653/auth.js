# Auth Services

This is a Next.js project bootstrapped with `create-next-app`, designed to demonstrate authentication services using NextAuth.js with GitHub and Google providers, as well as credential-based login.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Authentication Providers](#authentication-providers)

## Features

- **Credential-based Authentication**: User login with email and password.
- **OAuth Authentication**: Seamless login using GitHub and Google accounts.
- **Next.js App Router**: Utilizes the latest Next.js features for routing and server components.
- **Tailwind CSS**: For rapid UI development and styling.
- **Custom Fonts**: Integration of Geist and Geist Mono fonts for a modern look.

## Technologies Used

- [Next.js](https://nextjs.org/) (v15.3.5)
- [NextAuth.js](https://next-auth.js.org/) (v5.0.0-beta.29)
- [React](https://react.dev/) (v19.0.0)
- [React Icons](https://react-icons.github.io/react-icons/) (v5.5.0)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd auth.js
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
