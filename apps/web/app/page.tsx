import { client } from "@repo/db/client"
export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <>
      First name:
      {user?.username}
      password:
      {user?.password}
    </>
  );
}