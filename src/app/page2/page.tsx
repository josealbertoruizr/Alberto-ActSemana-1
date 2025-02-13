import Link from "next/link";
import GreenRectangle from "../components/GreenRectangle";


export default function Page2() {

    return (
       
        <div className="flex flex-col items-center justify-center min-h-screen">
            
            <GreenRectangle color="blue" />
            <Link href="/" className="text-blue-300 hover:underline">
                Go to Home
            </Link>

        </div>
    );
}

