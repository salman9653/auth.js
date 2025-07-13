# Next.js Authentication App

A modern authentication service built with Next.js 15 and Auth.js (NextAuth). This application provides a complete authentication system with credential-based login and registration functionality.

## Features

- Credential Authentication : Email and password-based authentication
- Protected Routes : Middleware-based route protection
- Form Validation : Client and server-side validation using Zod
- Database Integration : PostgreSQL database with Prisma ORM
- Modern UI : Responsive design with Tailwind CSS and Radix UI components
- Server Actions : Next.js server actions for form handling

## Key Features

🔐 Next-auth v5 (Auth.js)
🚀 Next.js 14 with server actions
🔑 Credentials Provider
🌐 OAuth Provider (Social login with Google & GitHub)
🔒 Forgot password functionality
✉️ Email verification
📱 Two factor verification (2FA)
👥 User roles (Admin & User)
🔓 Login component (Opens in redirect or modal)
📝 Register component
🤔 Forgot password component
✅ Verification component
⚠️ Error component
🔘 Login button
🚪 Logout button
🚧 Role Gate
🔍 Exploring next.js middleware
📈 Extending & Exploring next-auth session
🔄 Exploring next-auth callbacks
👤 useCurrentUser hook
🛂 useRole hook
🧑 currentUser utility
👮 currentRole utility
🖥️ Example with server component
💻 Example with client component
👑 Render content for admins using RoleGate component
🛡️ Protect API Routes for admins only
🔐 Protect Server Actions for admins only
📧 Change email with new verification in Settings page
🔑 Change password with old password confirmation in Settings page
🔔 Enable/disable two-factor auth in Settings page
🔄 Change user role in Settings page (for development purposes only)

## Tech Stack

- Framework : Next.js 15 with App Router
- Authentication : Auth.js (NextAuth v5)
- Database : PostgreSQL
- ORM : Prisma
- Form Handling : React Hook Form with Zod validation
- Styling : Tailwind CSS with Radix UI components
- Password Hashing : bcryptjs

## Project Structure

```
├── prisma/                # Prisma schema and 
migrations
├── public/                # Static assets
├── src/
│   ├── actions/           # Server actions for 
authentication
│   │   ├── login.js       # Login functionality
│   │   └── register.js    # Registration 
functionality
│   ├── app/               # Next.js app router
│   │   ├── (auth)/        # Authentication 
routes
│   │   ├── (protected)/   # Protected routes
│   │   └── (root)/        # Public routes
│   ├── components/        # React components
│   │   ├── auth/          # Authentication 
components
│   │   └── ui/            # UI components
│   ├── data/              # Data access layer
│   ├── lib/               # Utility functions
│   │   ├── auth.js        # Auth.js 
configuration
│   │   ├── auth.config.js # Auth providers 
configuration
│   │   └── db.js          # Database client
│   ├── schemas/           # Zod validation 
schemas
│   └── middleware.js      # Authentication 
middleware
└── package.json           # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database

### Installation

1. Clone the repository

```
git clone <repository-url>
cd auth.js
```

2. Install dependencies

```
npm install
# or
yarn install
```

3. Set up environment variables
   Create a .env file in the root directory with the following variables:

```
DATABASE_URL="postgresql://
username:password@localhost:5432/auth_db"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
AUTH_SECRET="your-secret-key"
```

4. Set up the database

```
npx prisma generate
npx prisma db push
```

5. Start the development server

```
npm run dev
# or
yarn dev
```

6. Open http://localhost:3000 in your browser

## Authentication Flow

1. Users can register with name, email, and password
2. Passwords are securely hashed using bcryptjs
3. Login with email and password
4. Protected routes redirect unauthenticated users to the login page
5. Authenticated users are redirected to the dashboard when accessing auth routes

## Future Enhancements

- Email verification
- Social login providers (Google, GitHub, etc.)
- Password reset functionality
- User profile management
- Role-based access control
