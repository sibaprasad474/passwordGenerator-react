import React from "react";
import { useState,useCallback,useEffect,useRef } from "react";

function Generator(){
    const [length,setLength]=useState(10);
    const[numAllowed,setNumAllowed]=useState(false);
    const[charAllowed,setcharAllowed]=useState(false);
    const[password,setPassword]=useState("");
    //useRef hook
    const passwordRef=useRef(null);


    const passwordgenerator=useCallback(()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numAllowed){
            str+="0123456789";
        }
        if(charAllowed){
            str+="!@#$%^&*[]{}+_`~";
        }
        for(let i=1;i<=length;i++){
            let char=Math.floor(Math.random()*str.length+1);
            pass+=str.charAt(char);
        }
        setPassword(pass);

    },[length,numAllowed,charAllowed,setPassword])

    const copyPassToClipboard=useCallback(()=>{
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0,12);
        window.navigator.clipboard.writeText(password);

    },[password]);
    
    useEffect(()=>{passwordgenerator()},[length,numAllowed,charAllowed,passwordgenerator])

    return(
        <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 bg-gray-900 text-center text-orange-300 mt-12">
            <h1 className="text-xl mb-4">Password Generator</h1>
            <div className="flex shadow-rounded-lg overflow-hidden mb-4">

                <input type="text" 
                value={password}
                className="outline-none w-full py-1 px-3 rounded-lg text-red-600 text-xl"
                placeholder="password"
                readOnly
                ref={passwordRef}
                />
                <button style={{backgroundColor:"blue",width:"8rem",color:"white"}}className="rounded-lg" onClick={copyPassToClipboard}>Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                     type="range"
                     min={6}
                     max={20}
                     value={length}
                     className="cursor-pointer"
                     onChange={(e)=>{setLength(e.target.value)}}
                     />
                     <label>length:{length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                     type="checkbox"
                     defaultChecked={numAllowed}
                     id="numberInput"
                     onChange={()=>{setNumAllowed((prev)=>!prev);}}
                    
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                     type="checkbox"
                     defaultChecked={charAllowed}
                     id="charInput"
                     onChange={()=>{setcharAllowed((prev)=>!prev);}}
                    
                    />
                    <label htmlFor="charInput">Characters</label>
                </div>

            </div>
        </div>
        </>
    )
}
export default Generator;