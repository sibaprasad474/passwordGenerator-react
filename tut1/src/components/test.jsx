import { useState } from "react"
function Bgchanger(){
    const [color,setColor]=useState("black");
    return(
        <>
        <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}
        >
            <div className="mt-20 fixed flex flex-wrap justify-center items-center duration-200 inset-0 bottom-20 p-1 bg-white rounded-xl">
                <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white duration-200"
                style={{backgroundColor:color}}
                >
                    <button className="outline-none p-4 rounded-xl"
                    style={{backgroundColor:"green", color:"white"}}
                    onClick={()=>{setColor("green")}}
                    >
                        green
                    </button>

                    <button className="outline-none p-4 rounded-xl"
                    style={{backgroundColor:"black", color:"white"}}
                    onClick={()=>{setColor("black")}}
                    >
                        Default
                    </button>
                    <button className="outline-none p-4 rounded-xl"
                    style={{backgroundColor:"pink", color:"white"}}
                    onClick={()=>{setColor("pink")}}
                    >
                        pink
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Bgchanger;