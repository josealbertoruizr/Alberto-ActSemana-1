interface SquareProps {
     color: string;
}


export default function Square({color} : SquareProps) {

    return (

        <div style={{backgroundColor: color}} className="w-20 h-20 bg-green-600"></div>
    );
}