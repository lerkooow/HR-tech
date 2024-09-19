"use client";
import React, { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const Provider = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: "https://api.escuelajs.co/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
