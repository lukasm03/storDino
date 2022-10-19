export default function KnapparOchExcelKnapp(setVisa) {
    return (
        <>
            <span style={{display: "flex",
    justifyContent: "center"}}>
                <button style={{display: "flex",
    justifyContent: "center"}}>
                    exportera till excel
                </button>
            </span>
            <div style={{marginTop: "0.5vh",
    display: "flex",
    justifyContent: "center"}}>
                <button name="visaalla" value="alla" onClick={() => setVisa("alla")}>visa alla
                </button>
                <button name="visaintefixade" value="intefixade" onClick={() => setVisa("intefixade")}>visa inte
                    fixade
                </button>
                <button name="visaintäkter" value="visaintäkter" onClick={() => setVisa("intäkt")}>visa intäkter
                </button>
                <button name="visautgifter" value="visautgifter" onClick={() => setVisa("avgift")}>visa avgifter
                </button>
            </div>
        </>
    )
}