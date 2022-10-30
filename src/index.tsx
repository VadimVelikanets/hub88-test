import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {ApolloProvider, ApolloClient,  InMemoryCache} from "@apollo/client";
import reportWebVitals from './reportWebVitals';

const apolloClient = new ApolloClient({
    uri: process.env.REACT_APP_API_GRAPHQL_URL,
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<ApolloProvider client={apolloClient}><App /></ApolloProvider>);

reportWebVitals();
