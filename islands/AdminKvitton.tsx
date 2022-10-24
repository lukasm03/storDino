import { useEffect, useState } from "preact/hooks";
import EttKvittoIListan from "../components/Kvitto.tsx";


export default function VisaKvitton({ data }) {
  const [visa, setVisa] = useState("")
  const [info, setInfo] = useState(data)

  useEffect(() => {
    if (visa == "alla"){
      setInfo(data)
    }else if(visa == "intefixade"){
      const newArray = data.filter(function (el: { Fixad: boolean; }) {
        return el.Fixad == false;
      });
      setInfo(newArray)
    }else if(visa == "intäkt"){
      const newArray = data.filter(function (el: { Typavköp: string; }) {
        return el.Typavköp == "Intäkt";
      });
      setInfo(newArray)
    }else if(visa == "avgift"){
      const newArray = data.filter(function (el: { Typavköp: string; }) {
        return el.Typavköp == "Avgift";
      });
      setInfo(newArray)
    }
  }, [visa]);

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
          {info.slice(0).reverse().map(({Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp }: {Vara: string, Pris: Int8Array, Kategori: string, Datum: Date, Swish: Int8Array, Bild: string, Typavköp: string}) => {
            return (
              <EttKvittoIListan Vara={Vara} Pris={Pris}  Kategori={Kategori}  Datum={Datum}  Swish={Swish}  Bild={Bild}  Typavköp={Typavköp}   />
              )
          })
          }
        </div>
      </>
    )
  }