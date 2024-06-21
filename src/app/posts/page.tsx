import {Metadata} from "next";
import s from './post-server-side.module.scss'
import {PostClient} from "@/components/post-client/post-client";

export const metadata: Metadata = {
  title: 'Post | Next App'
}

export type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getDataPosts(): Promise<PostData[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  return res.json()
}

export default async function Posts() {
  const post = await getDataPosts()

  return (
    <div className={s.wrapper}>
      <PostClient postData={post}/>
    </div>
  )
}

