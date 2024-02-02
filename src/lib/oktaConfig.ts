export const oktaConfig = {
    clientId: '0oaevhh3rwSdnD3H45d7',
    issuer: 'https://dev-70466374.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}