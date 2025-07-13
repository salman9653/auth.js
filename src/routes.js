/**
 * an array of routes that are accessible to the public 
 * These routes do not require authentication
 */

export const publicRoutes = [
    "/",
    "/new-verification"
]


/**
 * an array of routes that are used for authentication
 * These routes will redirect logged in users to the dashboard
 */

export const authRoutes = [
    "/login",
    "/register",
    "/authError"
]


/**
 * the prefix for API authentication routes
 * Routes that starts with this prfix are used for API authentication purposes
 */

export const apiAuthPrefix = "/api/auth"


/**
 * the default redirect path after loggin in 
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings"