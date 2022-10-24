import { Head } from "$fresh/runtime.ts";
import BildOchTitel from "../components/NfBild.tsx";
import VisaKvitton from "../islands/AdminKvitton.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
const urls = "https://fwikjqgmaisqizeqbaji.supabase.co";
const keys =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3aWtqcWdtYWlzcWl6ZXFiYWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMjkxMjIsImV4cCI6MTk4MTYwNTEyMn0.v0LCLpTObviIdT8vEMfxfTOjQeZOaaaC7MMXdR7ib_o";
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"
import { useReducer } from "https://esm.sh/v95/preact@10.11.0/hooks/src/index.d.ts";
interface User {
    id: number,
    Vara: string;
    Pris: number;
    Kategori: string;
    Datum: string;
    Bild: string;
    Swish: number;
    Typavköp: string; 
    Fixad: boolean;
  }

export const handler: Handlers<User[] | null> = {
   async GET(_, ctx) {
      const supabase = createClient(urls, keys,{});
        const { data, error } = await supabase
        .from('kvitton')
        .select()
      return ctx.render(data);
    },
  };

export default function Home({ data }: PageProps<User[] | null>) {
  return (
    <>
      <Head>
        <title>Admin sida för NF Kvitton</title>
      </Head>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <BildOchTitel />
        <VisaKvitton data={data}></VisaKvitton>
      </div>
    </>
  );
}
