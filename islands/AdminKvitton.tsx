import { useState } from "preact/hooks";
import ettKvittoiListan from "../components/Kvitto.tsx";



export default function VisaKvitton({ data }) {
  const [visa, setVisa] = useState("intefixade")

  function comp(a: { datum: string | number | Date; }, b: { datum: string | number | Date; }) {
    return new Date(a.datum).getTime() - new Date(b.datum).getTime();
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
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }) => {
            if (Fixad === false) {
              return <div style={{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gridTemplateRows:"repeat(4, 1fr)",gridColumnGap:"0px",gridRowGap:"0px",paddingBottom:"1rem",paddingTop:"0.5rem"}} key={Vara}>
        <div style={{    gridArea: "1 / 1 / 6 / 2", 
    alignSelf: "center", 
    marginRight: "1rem", 
    justifyContent: "center", height: "80px", width: "80px"}}>
            <img src={Bild} alt={"bild på kvittot"} height={"80px"} width={"80px"}/>
        </div>
        <div style={{gridArea: "1 / 2 / 2 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>namn
            på {Typavköp}: {Vara} </p>
        </div>
        <div style={{gridArea: "2 / 2 / 3 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>pris
            på {Typavköp}: {Pris}kr</p>
        </div>
        <div style={{gridArea: "3 / 2 / 4 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>kategori
            på {Typavköp}: {Kategori}</p>
        </div>
        <div style={{gridArea: "4 / 2 / 5 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>datum {Typavköp}en
            skedde: {Datum}</p>
        </div>
        <div style={{ gridArea: "5 / 2 / 6 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>swishnummer: {Swish}</p>
        </div>
    </div>            }
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
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }) => {
            if (Typavköp === "Intäkt") {
              return (
                <div style={{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gridTemplateRows:"repeat(4, 1fr)",gridColumnGap:"0px",gridRowGap:"0px",paddingBottom:"1rem",paddingTop:"0.5rem"}} key={Vara}>
        <div style={{    gridArea: "1 / 1 / 6 / 2", 
    alignSelf: "center", 
    marginRight: "1rem", 
    justifyContent: "center", height: "80px", width: "80px"}}>
            <img src={Bild} alt={"bild på kvittot"} height={"80px"} width={"80px"}/>
        </div>
        <div style={{gridArea: "1 / 2 / 2 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>namn
            på {Typavköp}: {Vara} </p>
        </div>
        <div style={{gridArea: "2 / 2 / 3 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>pris
            på {Typavköp}: {Pris}kr</p>
        </div>
        <div style={{gridArea: "3 / 2 / 4 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>kategori
            på {Typavköp}: {Kategori}</p>
        </div>
        <div style={{gridArea: "4 / 2 / 5 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>datum {Typavköp}en
            skedde: {Datum}</p>
        </div>
        <div style={{ gridArea: "5 / 2 / 6 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>swishnummer: {Swish}</p>
        </div>
    </div>              )
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
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }) => {
            if (Typavköp === "Avgift") {
              return (
                <div style={{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gridTemplateRows:"repeat(4, 1fr)",gridColumnGap:"0px",gridRowGap:"0px",paddingBottom:"1rem",paddingTop:"0.5rem"}} key={Vara}>
        <div style={{    gridArea: "1 / 1 / 6 / 2", 
    alignSelf: "center", 
    marginRight: "1rem", 
    justifyContent: "center", height: "80px", width: "80px"}}>
            <img src={Bild} alt={"bild på kvittot"} height={"80px"} width={"80px"}/>
        </div>
        <div style={{gridArea: "1 / 2 / 2 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>namn
            på {Typavköp}: {Vara} </p>
        </div>
        <div style={{gridArea: "2 / 2 / 3 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>pris
            på {Typavköp}: {Pris}kr</p>
        </div>
        <div style={{gridArea: "3 / 2 / 4 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>kategori
            på {Typavköp}: {Kategori}</p>
        </div>
        <div style={{gridArea: "4 / 2 / 5 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>datum {Typavköp}en
            skedde: {Datum}</p>
        </div>
        <div style={{ gridArea: "5 / 2 / 6 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>swishnummer: {Swish}</p>
        </div>
    </div>              )
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
          {data.slice(0).reverse().map(({ id, Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp, Fixad }) => {
            return (
              <div style={{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gridTemplateRows:"repeat(4, 1fr)",gridColumnGap:"0px",gridRowGap:"0px",paddingBottom:"1rem",paddingTop:"0.5rem"}} key={Vara}>
        <div style={{    gridArea: "1 / 1 / 6 / 2", 
    alignSelf: "center", 
    marginRight: "1rem", 
    justifyContent: "center", height: "80px", width: "80px"}}>
            <img src={Bild} alt={"bild på kvittot"} height={"80px"} width={"80px"}/>
        </div>
        <div style={{gridArea: "1 / 2 / 2 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>namn
            på {Typavköp}: {Vara} </p>
        </div>
        <div style={{gridArea: "2 / 2 / 3 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>pris
            på {Typavköp}: {Pris}kr</p>
        </div>
        <div style={{gridArea: "3 / 2 / 4 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>kategori
            på {Typavköp}: {Kategori}</p>
        </div>
        <div style={{gridArea: "4 / 2 / 5 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>datum {Typavköp}en
            skedde: {Datum}</p>
        </div>
        <div style={{ gridArea: "5 / 2 / 6 / 3", 
    alignSelf: "center", 
    justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>swishnummer: {Swish}</p>
        </div>
    </div>            )
          })
          }
        </div>
      </>
    )
  }
}