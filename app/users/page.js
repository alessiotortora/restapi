import getUsers from "../libs/getUsers";
import Link from "next/link";

export default async function UsersPage() {
  const users = await getUsers();
  console.log(users);

  return (
    <div className="flex flex-col space-y-5">
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <>
            <Link href={`/users/${user.id}`} className="text-4xl hover:underline" key={user.id}>
              {user.name}
            </Link>
          </>
        );
      })}
    </div>
  );
}
