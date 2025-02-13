import Link from "next/link";
import Square from "../components/Square";


export default function Page3() {

    const colors = ["green", "red", "blue", "white", "yellow"];

    return (
       
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/*
                <div className="p-2 grid grid-cols-5 gap-4">
                    <Square color="green"/>
                    <Square color="red"/>
                    <Square color="blue"/>
                    <Square color="white"/>
                    <Square color="yellow"/>
                </div>

                <div className="p-2 grid grid-cols-5 gap-4">
                    <Square color="green"/>
                    <Square color="red"/>
                    <Square color="blue"/>
                    <Square color="white"/>
                    <Square color="yellow" />
                </div>

                <div className="p-2 grid grid-cols-5 gap-4">
                    <Square color="green"/>
                    <Square color="red"/>
                    <Square color="blue"/>
                    <Square color="white"/>
                    <Square color="yellow" />
                </div>

                <div className="p-2 grid grid-cols-5 gap-4">
                    <Square color="green"/>
                    <Square color="red"/>
                    <Square color="blue"/>
                    <Square color="white"/>
                    <Square color="yellow" />
                </div>

                <div className="p-2 grid grid-cols-5 gap-4">
                    <Square color="green"/>
                    <Square color="red"/>
                    <Square color="blue"/>
                    <Square color="white"/>
                    <Square color="yellow" />
                </div>
            */}

            {/* Generar 5 filas, map se usa para obtener el index */}
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div key={rowIndex} className="p-2 grid grid-cols-5 gap-4">
                    {colors.map((color, index) => (
                        <Square key={`${rowIndex}-${index}`} color={color} />
                    ))}
                </div>
            ))}

            <Link href="/" className="text-blue-300 hover:underline">
                Go to Home
            </Link>

        </div>
    );
}
