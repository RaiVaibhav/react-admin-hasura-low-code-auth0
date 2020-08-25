
import React, { useState, useEffect } from 'react';
import buildHasuraProvider from 'ra-data-hasura-graphql';
import { useAuth0 } from "@auth0/auth0-react";
import { ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';
import Error from './Error';
import Login from './Login';
import Loading from './Loading';

const uri = "https://cuddly-grackle-24.hasura.app/v1/graphql";

function AppWithAuth(props) {
  const [dataProvider, setDataProvider] = useState(null);
  const { isLoading, error, getIdTokenClaims, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated && !isLoading && !error) {
      void(async () => {
        const token = await getIdTokenClaims();
        const client = new ApolloClient({
          uri,
          headers: {
            Authorization: `Bearer ${token.__raw}`
          },
          cache: new InMemoryCache(),
        });
        const dp = await buildHasuraProvider({ client } as any);
        setDataProvider(() => dp as any);
      })();
    }
  // eslint-disable-next-line
  }, [isAuthenticated]); // ts-ignore

  if (isLoading) {
    return (
      <Loading />
    );
  }
  if (!isAuthenticated) {
    return (
      <Login />
    )
  }
  if (error) {
    return (
      <Error
        errorMessage={'Something went wrong'}
      />
    );
  }

  return (
    dataProvider ?
      <App
        dataProvider={dataProvider}
      />
    :
      <Loading />
  );
};

export default AppWithAuth;
