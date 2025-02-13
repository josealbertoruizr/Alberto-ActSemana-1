import Link from "next/link";
import GreenRectangle from "./components/GreenRectangle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <GreenRectangle color="red"/>
        <Link href="/page2">Ir a pagina 2</Link>
        <br/>
        <Link href="/page3">PAGINA 3</Link>
    </div>
  );
}
