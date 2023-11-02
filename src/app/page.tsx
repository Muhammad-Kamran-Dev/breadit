import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  return <div>Home {JSON.stringify(session, null, 2)}</div>;
}
