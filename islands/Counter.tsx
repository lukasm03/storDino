import BildOchTitel from "../components/NFBild.tsx";
import FormOchSkicka from "../components/FormSkicka.tsx";

export default function StartSida() {
  return (
    <div
     class="flex flex-col justify-center">
        <BildOchTitel/>
        <FormOchSkicka/>
      </div>
  );
}
