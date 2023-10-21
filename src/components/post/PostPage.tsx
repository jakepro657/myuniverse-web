"use client"

import { useGetPost, useGetPosts } from '@/util/Post';
import React from 'react'
import { useQuery } from 'react-query';

type Props = {
  id: number
}

const PostPage = ({id}: Props) => {

  const { data } = useQuery(["post"], () => {
    return useGetPost(id)
  });


  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default PostPage