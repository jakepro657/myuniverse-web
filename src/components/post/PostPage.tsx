"use client";

import { useGetPost, useGetPosts } from "@/util/Post";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

type Props = {
  id: number;
};

const PostPage = ({ id }: Props) => {
  const [isRedirect, setRedirect] = useState(true);

  const { data, refetch } = useQuery(["post"], () => {
    return useGetPost(id);
  });

  useEffect(() => {
    if (!isRedirect) redirect("/redirect");
  }, [isRedirect]);

  const handleDelete = (e: any) => {
    e.preventDefault()
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/post/${data.id}`)
    setRedirect(false);
  }

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
            <div>by {data?.author?.email}</div>
            <div className="ms-auto">{data?.createdAt.slice(0, 10)}</div>
            <button onClick={handleDelete} className="ms-4">삭제</button>
          </div>
          <div className="p-2 flex text-lg flex-wrap justify-center">{data?.content}</div>
        </div>
      </main>
    </div>
  );
};

export default PostPage;
