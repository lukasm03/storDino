import BildOchTitel from "../components/NFBild.tsx";
import FormOchSkicka from "../components/FormSkicka.tsx";

export default function StartSida() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <BildOchTitel/>
        <FormOchSkicka/>
      </div>
  );
}
