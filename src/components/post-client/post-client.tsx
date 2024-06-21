'use client'
import {ChangeEvent, useState} from 'react';
import Link from 'next/link';
import {PageNumbers} from "@/components/page-numbers/page-numbers";
import s from './post-client.module.scss'
import {PostData} from "@/app/posts/page";

type Props = {
  postData: PostData[]
}

export function PostClient({postData}: Props) {
  const [posts] = useState<PostData[]>(postData);

  const [page, setPage] = useState<number>(1);
  const postsPerPage = 10;
  const paginatedPosts = posts.slice((page - 1) * postsPerPage, page * postsPerPage);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <h3 className={s.title}>posts</h3>
      <ul>
        {paginatedPosts.map((post) => (
          <li className={s.linkWrapper} key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <div className={s.pageNumbers}><PageNumbers count={posts.length} pagesCount={postsPerPage} page={page} onChange={handlePageChange}/></div>
    </div>
  );
}