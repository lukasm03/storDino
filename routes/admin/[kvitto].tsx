import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { kvitto } = props.params;
  return (
    <main>
      <p>Greetings to you, {kvitto}!</p>
    </main>
  );
}