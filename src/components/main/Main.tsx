"use client";
import Card from "@/components/Card";
import { useGetPosts } from "@/util/Post";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { redirect } from "next/navigation";
import { useGetUser } from "@/util/login";
import Image from "next/image";

type Props = {};

const Main = (props: Props) => {
  const { data: posts } = useQuery(["posts"], useGetPosts);
  const { data: user } = useQuery(["user"], useGetUser);

  const googleAuth = () => {
    window.open(`/auth/google/callback`, "_self");
  };

  const googleOut = () => {
    window.open(`/auth/logout`, "_self");
  };

  return (
    <div className="bg-gray-50">
      <header className="p-4">
        <div className="flex items-center w-full h-16 drop-shadow-sm">
          <div className="text-2xl ml-8 font-bold">Deverse</div>
          {user ? (
            <>
              <Link
                href={"/post"}
                className="ml-auto bg-white text-black border-2 border-black hover:bg-black hover:text-white p-2 rounded-3xl text-xl mr-4 font-bold"
              >
                &nbsp;글쓰기 +&nbsp;
              </Link>
              <button
                onClick={googleOut}
                className="bg-white text-black border-2 border-black hover:bg-black hover:text-white p-2 rounded-3xl text-xl mr-4 font-bold"
              >
                &nbsp;로그아웃&nbsp;
              </button>
              <div className=" mr-4">
                <Image
                  className="rounded-full"
                  src={user.picture}
                  width={48}
                  height={48}
                  alt="profile"
                />
              </div>
            </>
          ) : (
            <button
              onClick={googleAuth}
              className="bg-white text-black border-2 border-black hover:bg-black hover:text-white p-2 rounded-3xl text-xl ms-auto font-bold"
            >
              &nbsp;로그인&nbsp;
            </button>
          )}
        </div>
      </header>
      <main className="p-16 items-center w-full flex min-h-screen flex-col flex-nowrap">
        <div className="mt-16"></div>
        <div className="flex flex-wrap justify-center">
          {posts?.map((item: any, i: number) => {
            return (
              <Card
                id={item.id}
                key={i}
                title={item.title}
                username={item.author.email}
                profile="/next.svg"
                comments={0}
                content={item.content}
                date={item.createdAt.slice(0, 10)}
                image="AK7aPaB1vgEonZqgSEOb9CgB0ppypB1FEFA5MkquwqPktYdV1yrgv6hpCu7QdaDXzLYCz_Sbaojkxx2ogedBbkj_oKRwf_G1Jw=s1600"
                like={item?.like}
                link="/post"
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};
export default Main;
