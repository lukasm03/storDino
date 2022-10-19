import { Head } from "$fresh/runtime.ts";
import FormOchSkicka from "../islands/FormSkicka.tsx";
import BildOchTitel from "../islands/NFBild.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>NF Kvitton</title>
      </Head>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <BildOchTitel />
        <FormOchSkicka />
      </div>
    </>
  );
}
