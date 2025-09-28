import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /tournaments, /players)
  const { pathname } = request.nextUrl

  // Check if the user is trying to access protected routes
  const protectedRoutes = ["/tournaments"]
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  // If it's a protected route, check for authentication
  if (isProtectedRoute) {
    // In a real app, you would check for a valid JWT token or session
    // For this demo, we'll let the client-side ProtectedRoute component handle it
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (login page)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
  ],
}
