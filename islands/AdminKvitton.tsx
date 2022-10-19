import { useState } from "preact/hooks";
import ettKvittoiListan from "../components/Kvitto.tsx";



export default function VisaKvitton() {
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
  
  const [visa, setVisa] = useState("intefixade")

  function comp(a: { Datum: string | number | Date; }, b: { Datum: string | number | Date; }) {
    return new Date(a.Datum).getTime() - new Date(b.Datum).getTime();
  }

  data.sort(comp)
  if (visa === "intefixade") {
    return (
      <>
        <span style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <button style={{
            display: "flex",
            justifyContent: "center"
          }}>
            exportera till excel
          </button>
        </span>
        <div style={{
          marginTop: "0.5vh",
          display: "flex",
          justifyContent: "center"
        }}>
          <button name="visaalla" value="alla" onClick={() => setVisa("alla")}>visa alla
          </button>
          <button name="visaintefixade" value="intefixade" onClick={() => setVisa("intefixade")}>visa inte
            fixade
          </button>
          <button name="visaintäkter" value="visaintäkter" onClick={() => setVisa("intäkt")}>visa intäkter
          </button>
          <button name="visautgifter" value="visautgifter" onClick={() => setVisa("avgift")}>visa avgifter
          </button>
        </div>                <div style={{
          display: "grid",
          alignSelf: "center",
          justifySelf: "center"
        }}>
          <h3 style={{ marginBottom: "0" }}>senaste kvitton:</h3>
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }: {id: number, Vara: string, Pris: number, Kategori: string, Datum: string, Swish: number, Bild: string, Typavköp: string, Fixad: boolean}) => {
            if (Fixad === false) {
              return ettKvittoiListan(id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad)
            }
          })}
        </div>
      </>
    )
  } else if (visa === "intäkt") {
    return (
      <>
        <span style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <button style={{
            display: "flex",
            justifyContent: "center"
          }}>
            exportera till excel
          </button>
        </span>
        <div style={{
          marginTop: "0.5vh",
          display: "flex",
          justifyContent: "center"
        }}>
          <button name="visaalla" value="alla" onClick={() => setVisa("alla")}>visa alla
          </button>
          <button name="visaintefixade" value="intefixade" onClick={() => setVisa("intefixade")}>visa inte
            fixade
          </button>
          <button name="visaintäkter" value="visaintäkter" onClick={() => setVisa("intäkt")}>visa intäkter
          </button>
          <button name="visautgifter" value="visautgifter" onClick={() => setVisa("avgift")}>visa avgifter
          </button>
        </div>                <div style={{
          display: "grid",
          alignSelf: "center",
          justifySelf: "center"
        }}>                    <h3 style={{ marginBottom: "0" }}>senaste kvitton:</h3>
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }: {id: number, Vara: string, Pris: number, Kategori: string, Datum: string, Swish: number, Bild: string, Typavköp: string, Fixad: boolean}) => {
            if (Typavköp === "Intäkt") {
              return (
                ettKvittoiListan(id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad)
              )
            }
          })}
        </div>
      </>
    )
  } else if (visa === "avgift") {
    return (
      <>
        <span style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <button style={{
            display: "flex",
            justifyContent: "center"
          }}>
            exportera till excel
          </button>
        </span>
        <div style={{
          marginTop: "0.5vh",
          display: "flex",
          justifyContent: "center"
        }}>
          <button name="visaalla" value="alla" onClick={() => setVisa("alla")}>visa alla
          </button>
          <button name="visaintefixade" value="intefixade" onClick={() => setVisa("intefixade")}>visa inte
            fixade
          </button>
          <button name="visaintäkter" value="visaintäkter" onClick={() => setVisa("intäkt")}>visa intäkter
          </button>
          <button name="visautgifter" value="visautgifter" onClick={() => setVisa("avgift")}>visa avgifter
          </button>
        </div>                <div style={{
          display: "grid",
          alignSelf: "center",
          justifySelf: "center"
        }}>                    <h3 style={{ marginBottom: "0" }}>senaste kvitton:</h3>
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }: {id: number, Vara: string, Pris: number, Kategori: string, Datum: string, Swish: number, Bild: string, Typavköp: string, Fixad: boolean}) => {
            if (Typavköp === "Avgift") {
              return (
                ettKvittoiListan(id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad)
              )
            }
          })}
        </div>
      </>
    )
  } else {
    return (
      <>
        <span style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <button style={{
            display: "flex",
            justifyContent: "center"
          }}>
            exportera till excel
          </button>
        </span>
        <div style={{
          marginTop: "0.5vh",
          display: "flex",
          justifyContent: "center"
        }}>
          <button name="visaalla" value="alla" onClick={() => setVisa("alla")}>visa alla
          </button>
          <button name="visaintefixade" value="intefixade" onClick={() => setVisa("intefixade")}>visa inte
            fixade
          </button>
          <button name="visaintäkter" value="visaintäkter" onClick={() => setVisa("intäkt")}>visa intäkter
          </button>
          <button name="visautgifter" value="visautgifter" onClick={() => setVisa("avgift")}>visa avgifter
          </button>
        </div>                <div style={{
          display: "grid",
          alignSelf: "center",
          justifySelf: "center"
        }}>                    <h3 style={{ marginBottom: "0" }}>senaste kvitton:</h3>
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }: {id: number, Vara: string, Pris: number, Kategori: string, Datum: string, Swish: number, Bild: string, Typavköp: string, Fixad: boolean}) => {
            return (
              ettKvittoiListan(id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad)
            )
          })
          }
        </div>
      </>
    )
  }
}