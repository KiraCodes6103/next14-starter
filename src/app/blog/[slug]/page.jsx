import Image from "next/image";
import styles from "./singleBlog.module.css";
import { getPost } from "@/lib/data";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

// Fetching using API

// const getPost = async (post_id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
//   if(!res.ok){
//     throw error("Something is wrong! ")
//   }
//   return res.json();
// }

const SingleBlog = async ({ params }) => {
  const post_id = params.slug;
  const post = await getPost(post_id);
  // console.log(post);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div> Loading.. </div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2001</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
