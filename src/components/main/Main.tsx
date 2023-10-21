"use client";
import Card from "@/components/Card";
import { useGetPosts } from "@/util/Post";
import Link from "next/link";
import { useQuery } from "react-query";

type Props = {};


const Main = (props: Props) => {

  const { data } = useQuery(["posts"], useGetPosts);

  return (
    <div className="p-4 bg-gray-50">
      <main className="p-16 items-center w-full flex min-h-screen flex-col flex-nowrap">
        <header>
          <div className="text-4xl font-bold">Jake Yubin Kim's Devlog</div>
          <Link href={"/post"}>글쓰기</Link>
        </header>
        <div className="mt-16"></div>
        <div className="flex flex-wrap justify-center">
          {data?.map((item: any, i: number) => {
            return (
              <Card
                id={i + 1}
                key={i}
                title={item.title}
                username={item.authorId}
                profile="/next.svg"
                comments={0}
                content={item.content}
                date={item.createdAt.slice(0, 10)}
                image="/next.svg"
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
