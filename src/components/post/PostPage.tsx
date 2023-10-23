"use client";

import { useGetPost, useGetPosts } from "@/util/Post";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

type Props = {
  id: number;
};

const PostPage = ({ id }: Props) => {
  const { data } = useQuery(["post"], () => {
    return useGetPost(id);
  });

  return (
    <div className="flex flex-col bg-gray-50">
      <header className="p-4">
        <div className="flex items-center w-full h-16 drop-shadow-sm">
          <Link href={"/"} className="text-2xl ml-8 font-bold">Deverse</Link>
        </div>
      </header>
      <main className="p-16 min-h-screen flex justify-center">
        <div className="w-[48vw] items-start flex flex-col flex-nowrap">
          <h1 className="p-2 text-4xl font-bold">{data?.title}</h1>
          <div className="p-2 text-gray-600 flex w-full">
            <div>by {data?.authorId}</div>
            <div className="ms-auto">{data?.createdAt.slice(0, 10)}</div>
          </div>
          <div className="p-2 flex text-lg flex-wrap justify-center">{data?.content}</div>
        </div>
      </main>
    </div>
  );
};

export default PostPage;
