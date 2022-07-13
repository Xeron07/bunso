import React from "react";
import "./utility/css/App.css";
import TextArea from "./components/textarea";
import {useState} from "react";
import EmojiPicker from "./components/emojiPicker";
import BracketSelector from "./components/bracketSelector";
const CustomTextField=(props)=> {
    const [textValue,updateValue] = useState();
    const [renderValue,updateRender] =useState();


    const handleChange=(val)=>{
        //const diff=textValue?val.substring(textValue.length-1,val.length):val;
        updateValue(val);
        props.onChange(val);
    }

    const handleEmojiSelection=(obj)=>{
        const val=textValue?(textValue+" "+obj.emoji):obj.emoji;
        updateValue(val);
        props.onChange(val);
    }

    const handleBracketSelection=(obj)=>{
        const val=textValue?(textValue+" "+obj.value):obj.value;
        updateValue(val);
        props.onChange(val);
    }

    const handleRender=()=>{

    }


    return (
        <div className="App" style={{color:"black"}}>
            <TextArea value={textValue} handleChange={handleChange} />
            <br/>
            <div style={{bottom:"1px",padding:"10px"}}>
                <div style={{display:"inline"}}>
                    <BracketSelector updateText={handleBracketSelection} />
                </div>
                &nbsp;&nbsp;
                <div style={{display:"inline"}}>
                    <EmojiPicker selectedEmoji={handleEmojiSelection} />
                </div>

            </div>

        </div>
    );
}

export default CustomTextField;
