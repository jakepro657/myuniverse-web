"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "../../components/main/Main";
import { queryClient } from "@/util/query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientId } from "@/util/login";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={clientId}>
        <Main />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
