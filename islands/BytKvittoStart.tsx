import { useState  } from "preact/hooks";

export default function BytKvittoStart({data}) {
  const [qrKod, setqrKod] = useState("")
  const [visaQrKod, bytVisaQrKod] = useState("hidden")
  function hämtaQrKod(){
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: `{"payee":${JSON.stringify(0+data.swish.toString())},"amount":{"value":${((data.Pris))}},"message":{"value":${JSON.stringify(data.Vara)}}}`
    };
    fetch('https://api.swish.nu/qr/v2/prefilled', options)
      .then((response) => response.blob())
      .then((blob) => URL.createObjectURL(blob))
      .then((url) => setqrKod(url))
      .then(()=>bytVisaQrKod(""))
      .catch(err => console.error(err));
  }
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
      <button>Ändra kvitto</button>
      <button onClick={()=> hämtaQrKod()}>Hämta QR-kod</button>
      <h3>Vara: {data.Vara}</h3>
      <h3>Pris: {data.Pris}kr</h3>
      <h3>Kategori: {data.Kategori}</h3>
      <h3>Datum: {data.Datum}</h3>
      <h3>Swishnummer: {0+data.swish.toString()}</h3>
      <h3>Fixad: {data.Fixad.toString()}</h3>
      <img
        src={`${qrKod}`}
        alt="hämta qrkod för att visa qrkod  här"
        width={150}
        height={150}
        style={{visibility: visaQrKod}}
      />
    </div>
  );
}
