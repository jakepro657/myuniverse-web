"use client";
import { useGetUser } from "@/util/login";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";

type Props = {};

const CreatePostPage = (props: Props) => {
  const { data: user } = useQuery(["user"], useGetUser);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState(2);
  const [isRedirect, setRedirect] = useState(true);

  useEffect(() => {
    if (!isRedirect) redirect("/redirect");
  }, [isRedirect]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
      title: title,
      content: content,
      authorId: user.authorId,
    });
    setRedirect(false);
  };

  return (
    <div className="bg-gray-50">
      <header className="p-4">
        <div className="flex items-center w-full h-16 drop-shadow-sm">
          <Link href={"/"} className="text-2xl ml-8 font-bold">Deverse</Link>
        </div>
      </header>
      <main className="items-center w-full flex min-h-screen flex-col flex-nowrap">
        <form onSubmit={onSubmit} className="w-[72%] flex flex-col">
          <textarea
            
            className="bg-gray-50 h-12 text-3xl resize-none outline-none m-4 border-b-2"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
          />
          <textarea
            className="bg-gray-50 h-96 text-lg text-left align-top resize-none outline-none m-4"
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용"
          />
          <button type="submit"className="bg-white text-black border-2 border-black hover:bg-black hover:text-white p-2 rounded-3xl text-xl ml-auto mr-4 font-bold">&nbsp;작성 완료&nbsp;</button>
        </form>
      </main>
    </div>
  );
};

export default CreatePostPage;
