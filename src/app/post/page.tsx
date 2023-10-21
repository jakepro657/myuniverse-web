"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

type Props = {};

const CreatePostPage = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState(1);
  const [isRedirect, setRedirect] = useState(true);

  useEffect(() => {
    if (!isRedirect) redirect("/redirect");
  }, [isRedirect]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
      title: title,
      content: content,
      authorId: authorId,
    });
    setRedirect(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="제목"
      />
      <input
        onChange={(e) => setContent(e.target.value)}
        type="text"
        placeholder="내용"
      />
      <button type="submit">글쓰기</button>
    </form>
  );
};

export default CreatePostPage;
