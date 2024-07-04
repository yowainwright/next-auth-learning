import { getToken } from 'next-auth/jwt';
import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  console.log({ token, request });

  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  }

  if (!token.isOrgMember) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
