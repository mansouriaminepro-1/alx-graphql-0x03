import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import '../sentry.client.config'; // ← ADD THIS LINE

// Create Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ApolloProvider>
  );
}

export default MyApp;