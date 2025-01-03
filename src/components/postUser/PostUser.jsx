import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user);
  
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.author}>{user.name}</span>
    </div>
  );
};
export default PostUser;
