import Picker from 'emoji-picker-react';
import {useState} from "react";
import Tippy from '@tippyjs/react';
import emoji from "../utility/img/emoji.png";


const EmojiPicker = (props) => {

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const onEmojiClick = (event, emojiObject) => {
        props.selectedEmoji(emojiObject);
    };

    return (
        <div style={{display:"inline"}}>

                <Tippy visible={visible}  content={<Picker onEmojiClick={onEmojiClick} /> } interactive={true} >
                    <img onClick={visible ? hide : show} src={emoji} width={20} height={20} />
                </Tippy>



        </div>
    );
};

export default EmojiPicker;