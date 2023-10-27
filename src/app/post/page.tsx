"use client"
import CreatePostPage from "@/components/post/CreatePostPage";
import { queryClient } from "@/util/query";
import { QueryClientProvider } from "react-query";

type Props = {};

const Page = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CreatePostPage />
    </QueryClientProvider>
  );
};

export default Page;
