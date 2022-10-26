import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import BytaKvittoStart from "../../islands/BytKvittoStart.tsx"
import BildOchTitel from "../../components/NfBild.tsx";
import { createClient } from "https://esm.sh/@supabase/supabase-js@1.35.6"
const urls = "https://fwikjqgmaisqizeqbaji.supabase.co";
const keys =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3aWtqcWdtYWlzcWl6ZXFiYWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMjkxMjIsImV4cCI6MTk4MTYwNTEyMn0.v0LCLpTObviIdT8vEMfxfTOjQeZOaaaC7MMXdR7ib_o";



export const handler: Handlers = {
  async GET(_, ctx) {
    console.log(ctx.params)
     const supabase = createClient(urls,keys)
     const { data, error } = await supabase
     .from('nfkvitton')
     .select('*')
     .eq("Vara", decodeURIComponent(ctx.params.kvitto))
     return ctx.render(await data![0]);
   },
   POST(_,){
    return new Response("", {
      status: 303,
      headers: { Location: "/admin" },
    });   }
 };

export default function GreetPage( {data}: PageProps ) {
  return (
    <main>
      <Head>
        <title>Ändra på kvitto: {data.Vara}</title>
      </Head>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <BildOchTitel />
        <BytaKvittoStart data={data}/>
      </div>
    </main>
  );
}