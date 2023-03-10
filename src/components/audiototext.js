import React from 'react'
import {startRecording,stopRecording} from "./main"

export default function audiototext() {
    let mystye = {
        position : "relative"
    }
    let bodystyle = {
        backgroundColor:"rgb(127, 195, 255)"
    }
    let s1={
        fontSize: "20px"
    }
  return (
  <>
 
 <div style={bodystyle}>
    <div id="loader">
        <p className="glow">Videobot</p>
    </div>

    <div id="loader">
        <div className="row " style={mystye}>
            <div className="column1">       
                <h2>Record Audio</h2>
                    <p>
                        <button id="start" className="btn btn-success" disabled>Start</button>
                        <button id="stop" className="btn btn-danger"  disabled>Stop</button>
                    </p>
                    <h4>Select STT:</h4>
                    <select>
                        <option value="SR pythonlib" selected="selected">SpeechRecognition Library</option>
                        <option value="Deepgram">Deepgram API</option>
                    </select>
                    <h4>Select TTS:</h4>
                    <select>
                        <option selected="selected">Select:</option>
                        <option value="pythonlib">pyttsx3 Library</option>
                        <option value="GCAPI">Google Cloud API</option>
                    </select>
                    <h4>Select Conversational Model:</h4>
                    <select>
                        <option selected="selected">Select:</option>
                        <option value="bloom">Bloom</option>
                        <option value="gpt-3">GPT-3</option>
                    </select>
            </div>
            <div className="column2" >
                <h2>Audio Prediction</h2>
                <p className="glow" id="output" style={s1}></p> 
            </div>
        </div>
    </div>
    
</div>
  </>
  )
}






