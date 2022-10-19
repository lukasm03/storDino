import { Head } from "$fresh/runtime.ts";
import Startsida from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Start Sida</title>
      </Head>
        <Startsida/>
    </>
  );
}
