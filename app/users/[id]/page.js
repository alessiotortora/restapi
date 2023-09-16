import getUser from "@/app/libs/getUser";
import getUserPosts from "@/app/libs/getUserPosts";
import Link from "next/link";

export default async function UserPage({ params }) {
  const userData = getUser(params.id);
  const userPosts = getUserPosts(params.id);

  const [user, posts] = await Promise.all([userData, userPosts]);

  let number = 0
  return (
    
    <div>
      <p  className="text-8xl text-center">{user.name}</p>
      {posts.map((post) => {
        number++
        return (
          <>
            <p className="font-bold text-center">{number}</p>
            <p className="text-center" >{post.title}</p>
          </>
        );
      })}
      <Link href="/users">go back to users</Link>
    </div>
  );
}
