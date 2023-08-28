import React from "react";
import MessageItem from "./LeftMessage/LeftMessage";
import RightMessageItem from "./RightMessage/RightMessage";
import './Message.css'
import { IMAGES } from "../../../constants/images";
import { messages } from "./messageFunction";

const Messages = () => {

    return (
        <div className="conversationCenter">
            <div className="messagesContainer">
                {messages?.map((message, index) => (
                    index % 4 < 2 ? (
                        <MessageItem key={index} text={message?.text} time={message?.time} icon={message?.icon} />
                    ) : (
                        <RightMessageItem key={index} text={message?.text} time={message?.time} icon={message?.icon} />
                    )
                ))}
            </div>
            <div className="fixedInput">
                <img src={IMAGES?.EmojiIcon} alt="no_images" className="SmileyIcon" />
                <input type='text' className="InputBar" placeholder="Type here..." />
                <img src={IMAGES?.SendIcon} alt="no_images" className="SendIcon" />
            </div>
        </div>
    );
}

export default Messages;
