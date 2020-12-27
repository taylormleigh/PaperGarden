import '../styles.css';
// Apollo
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { Stitch, AnonymousCredential} from "mongodb-stitch-browser-sdk";

const httpLink = createHttpLink({ uri: '/graphql', fetch: fetch });

//Realm
import * as RealmWeb from 'realm-web';
export const APP_ID = "papergarden-wsdfd";

//initialize
export const app = new RealmWeb.App({
  id: APP_ID,
  baseUrl: `https://realm.mongodb.com/`
  // baseUrl: `https://realm.mongodb.com/api/admin/v3.0`
});

// Add an Authorization header with a valid user access token to all GraphQL requests
export const authorizationHeaderLink = setContext(async (_, { headers }) => {
  if (app.currentUser) {
    // Refreshing custom data also refreshes the access token
    await app.currentUser.refreshCustomData();
  } else {
    // If no user is logged in, log in an anonymous user
    await app.logIn(RealmWeb.Credentials.anonymous());
  }
  // Get a valid access token for the current user
  const accessToken = app.currentUser;
  //CONSOLE LOG OF ACCESS TOKEN!!!
  // console.log("currentUser", accessToken, app.currentUser);

  // Set the Authorization header, preserving any other headers
  return {
    headers: {
      ...headers,
      'Authorization': `Bearer ${accessToken}`
    }
  };
});


// Construct a new Apollo client with the links we just defined
export const client = new ApolloClient({
  link: authorizationHeaderLink.concat(httpLink),
  cache: new InMemoryCache()
});



export default function MyApp({ Component, pageProps }) {
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = React.useState(app.currentUser);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}