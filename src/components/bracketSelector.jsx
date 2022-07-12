import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {useState} from "react";
import bracket from "../utility/img/bracket.png";

import SearchItem from "./SearchItem";
const BracketSelector=(props)=>{
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const handleSuggestion = (value) => {
        props.updateText(value);
        hide();
    };
    return (
        <div style={{display:"inline-block"}} >
            <Tippy visible={visible}  content={<SearchItem addSuggestion={handleSuggestion} /> } interactive={true} >
                <img onClick={visible ? hide : show} src={bracket} width={20} height={20} />
            </Tippy>
        </div>
    )
}

export  default BracketSelector;