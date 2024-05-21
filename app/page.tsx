import Image from "next/image";
import {Header} from "@/components/Header";
import {Salutation} from "@/components/Salutation";
import {Specing} from "@/components/Specing";
import {Outils} from "@/components/Outils";
import {Quoideneuf} from "@/components/Quoideneuf";

export default function Home() {
  return (
    <main className="flex flex-col ">
        <Header></Header>
        <Salutation></Salutation>
        <Specing></Specing>

    </main>
  );
}
