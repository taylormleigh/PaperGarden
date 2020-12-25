import '../styles.css';
// Apollo
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({ uri: '/graphql', fetch: fetch });

//Realm
import * as RealmWeb from 'realm-web';
//initialize
export const APP_ID = "papergarden-wsdfd";

const app = new RealmWeb.App({
  id: APP_ID,
  baseUrl: "https://realm.mongodb.com"
});

// Add an Authorization header with a valid user access token to all GraphQL requests
const authorizationHeaderLink = setContext(async (_, { headers }) => {
  if (app.currentUser) {
    // Refreshing custom data also refreshes the access token
    await app.currentUser.refreshCustomData();
  } else {
    // If no user is logged in, log in an anonymous user
    await app.logIn(RealmWeb.Credentials.anonymous());
  }
  // Get a valid access token for the current user
  const { accessToken } = app.currentUser;
  console.log("currentUser", accessToken, app.currentUser);

  // Set the Authorization header, preserving any other headers
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`
    }
  };
});

// Construct a new Apollo client with the links we just defined
const client = new ApolloClient({
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