import React from "react";
import { useState } from "react";
function Ui() {
    const [color, setColor] = useState("white");
    return (
        <>
            <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white p-1 rounded-xl">
                        <button
                            className="outline-none p-4 rounded-xl text-white shadow-lg"
                            onClick={() => { setColor("red") }}
                            style={{ backgroundColor: "red" }}
                        >red</button>
                        <button
                            className="outline-none p-4 rounded-xl text-white shadow-lg"
                            onClick={() => { setColor("green") }}
                            style={{ backgroundColor: "green" }}
                        >green</button>
                        <button
                            className="outline-none p-4 rounded-xl text-white shadow-lg"
                            onClick={() => { setColor("white") }}
                            style={{ backgroundColor: "black" }}
                        >Default</button>
                        <button
                            className="outline-none p-4 rounded-xl text-white shadow-lg"
                            onClick={() => { setColor("yellow") }}
                            style={{ backgroundColor: "yellow" }}
                        >yellow</button>
                        <button
                            className="outline-none p-4 rounded-xl text-white shadow-lg"
                            onClick={() => { setColor("blue") }}
                            style={{ backgroundColor: "blue" }}
                        >blue</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Ui;