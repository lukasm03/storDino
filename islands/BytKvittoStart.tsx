import { useState } from "preact/hooks";
import { createClient } from "https://esm.sh/@supabase/supabase-js@1.35.6";
const urls = "https://fwikjqgmaisqizeqbaji.supabase.co";
const keys =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3aWtqcWdtYWlzcWl6ZXFiYWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMjkxMjIsImV4cCI6MTk4MTYwNTEyMn0.v0LCLpTObviIdT8vEMfxfTOjQeZOaaaC7MMXdR7ib_o";

export default function BytKvittoStart({ data }) {
  const [qrKod, setqrKod] = useState("");
  const [visaQrKod, bytVisaQrKod] = useState("hidden");
  const [bytKvitto, setBytKvitto] = useState(false);
  const [bytData, setbytData] = useState({ ...data });

  function hämtaQrKod() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"payee":${
        JSON.stringify(0 + data.Swish.toString())
      },"amount":{"value":${(data.Pris)}},"message":{"value":${
        JSON.stringify(data.Vara)
      }}}`,
    };
    fetch("https://api.swish.nu/qr/v2/prefilled", options)
      .then((response) => response.blob())
      .then((blob) => URL.createObjectURL(blob))
      .then((url) => setqrKod(url))
      .then(() => bytVisaQrKod(""))
      .catch((err) => console.error(err));
  }

  const hanteraNytt = (event) => {
    setbytData({
      ...bytData,
      [event.target.id]: event.target.value,
    });
  };

  const hanteraSubmit = async (event) => {
    event.preventDefault();
    const supabase = createClient(urls, keys);
    const { error } = await supabase
      .from("nfkvitton")
      .update({
        Vara: bytData.Vara,
        Pris: bytData.Pris,
        Kategori: bytData.Kategori,
        Datum: bytData.Datum,
        Swish: bytData.Swish,
        Typavköp: bytData.Typavköp,
        Fixad: bytData.Fixad,
      })
      .eq("id", data.id);
  };

  async function taBortKvitto() {
    const supabase = createClient(urls, keys);
    const { error } = await supabase
      .from("nfkvitton")
      .delete()
      .eq("id", data.id);
  }

  if (bytKvitto == false) {
    return (
      <div
        style={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <a href="/admin/">
          <button>Tillbaka</button>
        </a>
        <button onClick={() => setBytKvitto(true)}>Ändra kvitto</button>
        <button onClick={() => hämtaQrKod()}>Hämta QR-kod</button>
        <h3>Vara: {data.Vara}</h3>
        <h3>Pris: {data.Pris}kr</h3>
        <h3>Kategori: {data.Kategori}</h3>
        <h3>Datum: {data.Datum}</h3>
        <h3>Swishnummer: {0 + data.Swish.toString()}</h3>
        <h3>Fixad: {data.Fixad.toString()}</h3>
        <img
          src={`${qrKod}`}
          alt="hämta qrkod för att visa qrkod här"
          width={150}
          height={150}
          style={{ visibility: visaQrKod }}
        />
      </div>
    );
  } else if (bytKvitto == true) {
    return (
      <div
        style={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <a href="/admin">
          <button>tillbaka test</button>
        </a>
        <button onClick={() => setBytKvitto(false)}>sluta ändra kvitto</button>
        <button onClick={() => taBortKvitto()}>ta bort kvitto</button>
        <form onSubmit={hanteraSubmit} onChange={hanteraNytt}>
          <h3>
            vara: <input type="text" id="Vara" defaultValue={bytData.Vara} />
          </h3>
          <h3>
            pris:{" "}
            <input type="number" id="Pris" defaultValue={bytData.Pris} />kr
          </h3>
          <h3>
            kategori:{" "}
            <select
              name="Kategori"
              id="Kategori"
              defaultValue={bytData.Kategori}
            >
              <option value="Laborationer" name="Laborationer">
                Laborationer
              </option>
              <option value="Medlemsavgifter" name="Medlemsavgifter">
                Medlemsavgifter
              </option>
              <option value="Kök&fester">Kök & fester</option>
              <option value="Försäljning">Försäljning</option>
              <option value="NF-artiklar">NF-artiklar</option>
              <option value="Övrigt">Övrigt</option>
            </select>
          </h3>
          <h3>
            datum: <input type="date" id="Datum" defaultValue={bytData.Datum} />
          </h3>
          <h3>
            fixad:{" "}
            <input
              onChange={(e) => e.target!.value = e.target!.checked}
              type="checkbox"
              id="Fixad"
              checked={JSON.parse(bytData.Fixad)}
            />
          </h3>
          <h3>
            swishnummer:{" "}
            <input
              type="tel"
              id="Swish"
              defaultValue={0 + bytData.Swish.toString()}
            />
          </h3>
          <button type="submit">genomför ändring</button>
        </form>
      </div>
    );
  }
}
