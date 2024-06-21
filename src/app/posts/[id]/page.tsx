import CommentsMui from "@/components/comments/comments";
import Link from "next/link";
import s from './post.module.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {PostData} from "@/app/posts/page";

type Props = {
  params: {
    id: number
  },
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post: PostData) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}


async function getDataPost(id: number): Promise<PostData> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

async function getDataComments(id: number): Promise<CommentsData[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  return res.json()
}


export default async function Post({params: {id}}: Props) {

  const postData = await getDataPost(id)
  const commentsData = await getDataComments(id)

  return (
    <div className={s.wrapper}>
      <Link className={s.backLink} href={'/posts'}>
        <KeyboardBackspaceIcon/>
        Back
      </Link>
      <CommentsMui comments={commentsData} post={postData}/>
    </div>
  )
}

export type CommentsData = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}