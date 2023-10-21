"use client"
import PostPage from "@/components/post/PostPage";
import { queryClient } from "@/util/query";
import { QueryClientProvider } from "react-query";

export default function Page({ params }: { params: { id: number } }) {

  return (
    <QueryClientProvider client={queryClient}>
      <PostPage id={params.id}/>
    </QueryClientProvider>
  );
}
