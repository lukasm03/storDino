import { Head } from "$fresh/runtime.ts";
import BildOchTitel from "../components/NfBild.tsx";
import VisaKvitton from "../islands/AdminKvitton.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";


const data = [
  {
    id: 4,
    Vara: "Lukas Hösttermin",
    Pris: 80,
    Kategori: "Medlemsavgifter",
    Datum: "2022-10-13",
    Bild: "https://fwikjqgmaisqizeqbaji.supabase.co/storage/v1/object/public/bildavkvitton/public/CA8C8B25-9FDC-42C4-9CB4-4BCAC85199EF.jpeg",
    Swish: 727043013,
    "Typavköp": "Intäkt",
    Fixad: false
  },
  {
    id: 5,
    Vara: "Trasig Poster",
    Pris: 69,
    Kategori: "Övrigt",
    Datum: "2022-10-03",
    Bild: "https://fwikjqgmaisqizeqbaji.supabase.co/storage/v1/object/public/bildavkvitton/public/A48F576D-E2AC-4053-A80B-B1395B293F4D_1_102_o.jpeg",
    Swish: 727043013,
    "Typavköp": "Avgift",
    Fixad: false
  }
]

export default function Home({ data }: PageProps<User | null>) {
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
