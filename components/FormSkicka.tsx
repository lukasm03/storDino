import { useState } from "preact/hooks";
import { createClient } from "https://deno.land/x/supabase@1.3.1/mod.ts";

export default function FormOchSkicka() {
  const [ValdKategori, setValdKategori] = useState("");
  const [Vara, setVara] = useState("");
  const [Pris, setPris] = useState("");
  const [Datum, setDatum] = useState("");
  const [Swish, setSwish] = useState("");
  const [Bild, setBild] = useState<File>();
  const [Skickat, setSkickat] = useState("");
  const [Typavköp, setTypavköp] = useState("Avgift");

  function onFileSelected(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const avatarFile = e.target.files![0];
      setBild(avatarFile);
      console.log(Bild);
    }
    //e.defaultvalue är base64 iamge
  }

  return (
    <div
      style={{
        width: "fit-content",
        justifySelf: "center",
        alignSelf: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          name="typavkop"
          value="avgift"
          onClick={() => setTypavköp("Avgift")}
        >
          Avgifter
        </button>
        <button
          name="typavkop"
          value="intäkt"
          onClick={() => setTypavköp("Intäkt")}
        >
          Intäkter
        </button>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "62vw",
          alignSelf: "center",
        }}
      >
        <label
          style={{ marginTop: "1vh", marginBottom: "0.5vh" }}
          htmlFor="kategori"
        >
          Kategori på {Typavköp}:
        </label>
        <select
          style={{ minWidth: "120px", maxWidth: "6vw" }}
          name="kategori"
          id="kategori"
          required
          value={ValdKategori}
          onChange={kategori => setValdKategori((kategori.target as HTMLInputElement).value)}
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
        <label
          style={{ marginTop: "1vh", marginBottom: "0.5vh" }}
          htmlFor="vara"
        >
          Vara:
        </label>
        <input
          type="text"
          name="vara"
          placeholder="namn på vara (max 16 tecken)"
          value={Vara}
          maxLength={16}
          required
          onChange={vara => setVara((vara.target as HTMLInputElement).value)}
        />
        <label
          style={{ marginTop: "1vh", marginBottom: "0.5vh" }}
          htmlFor="pris"
        >
          Pris:
        </label>
        <input
          type="number"
          name="pris"
          placeholder="pris (skriv inte kr)"
          value={Pris}
          required
          onChange={pris => setPris((pris.target as HTMLInputElement).value)}
        />
        <label
          style={{ marginTop: "1vh", marginBottom: "0.5vh" }}
          htmlFor="datum"
        >
          Datum:
        </label>
        <input
          type="date"
          name="datum"
          value={Datum}
          placeholder={Date.now().toString()}
          required
          onChange={datum => setDatum((datum.target as HTMLInputElement).value)}
        />
        <label
          style={{ marginTop: "1vh", marginBottom: "0.5vh" }}
          htmlFor="bild"
        >
          Kvitto:
        </label>
        <input
          type="file"
          accept="image/*"
          name="bild"
          style={{ alignSelf: "center" }}
          placeholder="bild på kvitto"
          required
          onInput={onFileSelected}
        />
        <label
          style={{ marginTop: "1vh", marginBottom: "0.5vh" }}
          htmlFor="vara"
        >
          Swish-nummer:
        </label>
        <input
          type="tel"
          name="swish"
          value={Swish}
          placeholder={"swishnummer"}
          required
          pattern="[0-9]{3}-[0-9]{7}|[0-9]{10}"
          onChange={swish => setSwish((swish.target as HTMLInputElement).value)}
        />
        <button style={{marginTop: "2vh", width: "fit-content"}} onClick={()=>console.log(Swish,Pris,Datum,Vara, ValdKategori)}>
          Skicka in kvitto
        </button>
        <p
          style={{
            display: "inline-block",
            marginLeft: "0.5vw",
            fontWeight: "bold",
            fontSize: "0.7rem",
          }}
        >
          {Skickat}
        </p>
      </form>
    </div>
  );
}
