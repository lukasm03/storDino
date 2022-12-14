export default function EttKvittoIlistan({Vara, Pris, Kategori, Datum, Swish, Bild, Typavköp}) {
    return (<div style={{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gridTemplateRows:"repeat(4, 1fr)",gridColumnGap:"0px",gridRowGap:"0px",paddingBottom:"1rem",paddingTop:"0.5rem"}} key={Vara}>
    <div style={{    gridArea: "1 / 1 / 6 / 2", 
alignSelf: "center", 
marginRight: "1rem", 
justifyContent: "center", height: "80px", width: "80px"}}>
        <a href={'/admin/' + encodeURIComponent(Vara)}><img src={Bild} alt={`bild på kvittot från köp av ${Vara}`} height={80} width={80} loading={"lazy"}/></a>
    </div>
    <div style={{gridArea: "1 / 2 / 2 / 3", 
alignSelf: "center", 
justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>Namn
        på {Typavköp.toLocaleLowerCase()}en: {Vara} </p>
    </div>
    <div style={{gridArea: "2 / 2 / 3 / 3", 
alignSelf: "center", 
justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>Pris
        på {Typavköp.toLocaleLowerCase()}en: {Pris}kr</p>
    </div>
    <div style={{gridArea: "3 / 2 / 4 / 3", 
alignSelf: "center", 
justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>Kategori
        på {Typavköp.toLocaleLowerCase()}en: {Kategori}</p>
    </div>
    <div style={{gridArea: "4 / 2 / 5 / 3", 
alignSelf: "center", 
justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>Datum {Typavköp.toLocaleLowerCase()}en
        skedde: {Datum}</p>
    </div>
    <div style={{ gridArea: "5 / 2 / 6 / 3", 
alignSelf: "center", 
justifyContent: "center"}}><p style={{height: "fit-content", margin: 0}}>Swishnummer: {0+Swish.toString()}</p>
    </div>
</div>
    )
}