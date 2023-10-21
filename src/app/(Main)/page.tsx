"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "../../components/main/Main";
import { queryClient } from "@/util/query";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}
