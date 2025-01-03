import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!resp.ok) {
//     throw error("Something Went Wrong!! ");
//   }
//   return resp.json();
// };

const Blog = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts &&
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
    </div>
  );
};

export default Blog;
