import type { Route } from "./+types/home";

export function loader() {
  return { name: "React Router" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1>Hello, {loaderData.name}</h1>
      <a href="https://reactrouter.com/docs">React Router Docs</a>
    </div>
  );
}
