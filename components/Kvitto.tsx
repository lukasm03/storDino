export default function ettKvittoiListan(id: Int8Array, Vara: string, Pris: Int8Array, Kategori: string, Datum: Date, Swish: Int8Array, Bild: string, Typavköp: string, Fixad: boolean) {
    return (<div style={{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gridTemplateRows:"repeat(4, 1fr)",gridColumnGap:"0px",gridRowGap:"0px",paddingBottom:"1rem",paddingTop:"0.5rem"}} key={Vara}>
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
    </div>
    )
}