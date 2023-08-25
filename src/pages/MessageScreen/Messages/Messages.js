import React from "react";
import MessageItem from "./LeftMessage/LeftMessage";
import RightMessageItem from "./RightMessage/RightMessage";
import './Message.css'
import { IMAGES } from "../../../constants/images";

const Messages = () => {
    const messages = [
        { text: "Thank you Rajesh! Super agenda and format", time: "12:47 PM", icon: IMAGES.MessageIcon1 },
        { text: "Thanks Rajesh. Love the new format.", time: "12:47 PM", icon: IMAGES.MessageIcon2 },
        { text: 'Friends I hope ur hotel room at Bombay is sorted', time: '12:47 PM', icon: IMAGES.MessageIcon3 },
        { text: 'Hope everyone would come its gonna be amazing', time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: 'Great agenda Rajesh babu! Super excited.', time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: 'Saurabh and Sanjay. Looks like we are going to have some really good wine on your behalf 😉', time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: `Oh, you bet, buddy! Just you wait until you try this vintage I picked up from Bordeaux. It's a game-changer`, time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: `We don't mean to brag, but we do have a knack for finding the best wines. You're in for a treat tonight. 😉`, time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: 'Great agenda Rajesh babu! Super excited.', time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: 'Great agenda Rajesh babu! Super excited.', time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: 'Great agenda Rajesh babu.', time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: 'Great agenda Rajesh babu! Super excited.', time: '12:47 PM', icon: IMAGES.MessageIcon2 },
        { text: 'Great agenda Rajesh babu! Super excited.', time: '12:47 PM', icon: IMAGES.MessageIcon2 },
    ];

    return (
        <div className="conversationCenter">
            <div className="messagesContainer">
                {messages.map((message, index) => (
                    index % 4 < 2 ? (
                        <MessageItem key={index} text={message.text} time={message.time} icon={message.icon} />
                    ) : (
                        <RightMessageItem key={index} text={message.text} time={message.time} icon={message.icon} />
                    )
                ))}
            </div>
            <div className="fixedInput">
                <img src={IMAGES.EmojiIcon} alt="no_images" className="SmileyIcon" />
                <input type='text' className="InputBar" placeholder="Type here..." />
                <img src={IMAGES.SendIcon} alt="no_images" className="SendIcon" />
            </div>
        </div>
    );
}

export default Messages;
