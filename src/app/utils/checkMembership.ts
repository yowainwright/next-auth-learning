import { Octokit } from '@octokit/core';

export const checkMembership = async (
  accessToken?: string,
): Promise<boolean> => {
  if (!accessToken) {
    console.error('No access token available');
    return false;
  }

  const octokit = new Octokit({ auth: accessToken });

  try {
    const resp = await octokit.request('GET /user/orgs', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    const githubOrg = process.env.NEXT_PUBLIC_GITHUB_ORG;
    if (!githubOrg) throw new Error('No GitHub organization specified');
    const orgs = resp?.data;
    return orgs.some(org => org?.login?.toLowerCase() === githubOrg);
  } catch (error) {
    console.error('Error checking organization membership:', error);
    return false;
  }
};
