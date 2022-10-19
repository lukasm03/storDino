import { useState } from "preact/hooks";
import ettKvittoiListan from "../components/Kvitto.tsx";

export default function VisaKvitton({ data }) {
  const [visa, setVisa] = useState("intefixade")

  function comp(a: { datum: string | number | Date; }, b: { datum: string | number | Date; }) {
    return new Date(a.datum).getTime() - new Date(b.datum).getTime();
  }

  data.sort(comp)
  console.log(data)
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
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }: {id: Int8Array, Vara: string, Pris: Int8Array, Kategori: string, Datum: Date, Swish: Int8Array, Bild: string, Typavköp: string, Fixad: boolean}) => {
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
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }: {id: Int8Array, Vara: string, Pris: Int8Array, Kategori: string, Datum: Date, Swish: Int8Array, Bild: string, Typavköp: string, Fixad: boolean}) => {
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
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }: {id: Int8Array, Vara: string, Pris: Int8Array, Kategori: string, Datum: Date, Swish: Int8Array, Bild: string, Typavköp: string, Fixad: boolean}) => {
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
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }: {id: Int8Array, Vara: string, Pris: Int8Array, Kategori: string, Datum: Date, Swish: Int8Array, Bild: string, Typavköp: string, Fixad: boolean}) => {
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