"use client";
import Card from "@/components/Card";
import { useGetPosts } from "@/util/Post";
import Link from "next/link";
import { useQuery } from "react-query";

type Props = {};

const Main = (props: Props) => {
  const { data } = useQuery(["posts"], useGetPosts);

  return (
    <div className="bg-gray-50">
      <header className="p-4">
        <div className="flex items-center w-full h-16 drop-shadow-sm">
          <div className="text-2xl ml-8 font-bold">Deverse</div>

          <Link
            href={"/post"}
            className="bg-black text-white p-2 rounded-3xl text-xl ml-auto mr-4 font-bold"
          >
            &nbsp;글쓰기 +&nbsp;
          </Link>
        </div>
      </header>
      <main className="p-16 items-center w-full flex min-h-screen flex-col flex-nowrap">
        <div className="mt-16"></div>
        <div className="flex flex-wrap justify-center">
          {data?.map((item: any, i: number) => {
            return (
              <Card
                id={i + 1}
                key={i}
                title={item.title}
                username={item.author.email}
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
