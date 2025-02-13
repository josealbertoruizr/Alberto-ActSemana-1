interface RectangleProps{
    color: string;
}

export default function GreenRectangle({color} : RectangleProps) {
    return (
        <div style={{backgroundColor: color}} className="w-64 h-20 bg-green-600"></div>
    );
}