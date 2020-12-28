import { Credentials, App } from 'realm-web';

const APP_ID = process.env.REALM_APP_ID
export const REALM_GRAPHQL_ENDPOINT = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

const app = new App({
  id: APP_ID,
  baseUrl: 'https://realm.mongodb.com',
})

export const generateAuthHeader = async () => {

  if (!app.currentUser) {
    await app.logIn(Credentials.anonymous());
  }

  const { accessToken } = app.currentUser;

  return {
    Authorization: `Bearer ${accessToken}`,
  }

}