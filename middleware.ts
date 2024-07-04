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

// export const checkMembership = async (accessToken: string) => {
//   const org = 'goodrx';
//   const octokit = new Octokit({ auth: accessToken });

//   try {
//     const resp = await octokit.request('GET /user/memberships/orgs/{org}', {
//       org,
//     });

//     return resp?.data?.state === 'active';
//   } catch (error: Error | any) {
//     if (error?.status === 404) return false;
//     console.error('Error checking organization membership:', error);
//     return false;
//   }
// }
