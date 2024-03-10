import { useState } from "react";
import Form from "./form";
import "./App.css";
import Card from "./components/cards";
// import Ui from "./components/colorchanger";
import Bgchanger from "./components/test";
import Generator from "./components/passwgen";
function App() {
  // let myObj={
  //   uname:"shiv",
  //   age:22,
  // }
  // let arr=["shiv","ram","shyam"];
  return (
    <>
     {/* <Form/> */}
     {/* <Card greet="hello dear" btntxt="explore1" img={"https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?cs=srgb&dl=pexels-nubia-navarro-%28nubikini%29-386009.jpg&fm=jpg"} /> */}
     {/* <Card greet="hello sam"img="https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=" btntxt="explore2" /> */}
    {/* <Ui/> */}
    {/* <Bgchanger/> */}
    <div>
      <Generator/>
    </div>
    </>
    
  );
}

export default App;
