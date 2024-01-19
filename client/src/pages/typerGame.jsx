import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_WORKOUT } from '../utils/mutations';
import { Card } from 'antd';

function TyperGame(props){

    const typeMaster = "What the fuck did you just say about me you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words."
    var typeWord = "";
    var typeThis = "";

    function getTypeWord(){
      console.log("Start");
      for (let i = 0; i < typeMaster.length; i++){
        if(typeMaster[i] !=" "){
          typeWord += typeMaster[i];
        }else{
          i = typeMaster.length;
        }
      }
      typeThis = typeWord;
    }
     

    function clearTypeWord(){
      var typeWord = '';
    }

    function handleChange(event){

      if(event.target.value == typeThis){
        alert("You done did it!")
      }

      console.log(event.target.value);
    }

    return (
    
        <div className="container my-1">
          <Link to="/">← Go to Home</Link>
          <Card title="Type This!"
        bordered
        style={{
          background: "linear-gradient(#735d4d, #45322e)",
          border: "solid #45322e",
          margin: "25px",
        }}
      >
          <h2>{typeThis}</h2>

          <input  name="type field" onChange={handleChange}/>
          <p> </p>
          <button onClick={getTypeWord}>Start!</button>

          </Card>
        </div>
        
      );

};
export default TyperGame;