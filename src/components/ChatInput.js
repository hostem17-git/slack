import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { db } from "../firebase"
import firebase from 'firebase';
import { ChatRounded } from '@mui/icons-material';

function ChatInput({ chatRef, channelName, channelId }) {

    const [input, setInput] = useState("");
    const sendMessage = (e) => {

        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Vinayak",
            userImage: "",
        });


        chatRef.current.scrollIntoView({
            behavior: "smooth"
        });

        setInput("");

    }

    return <ChatInputContainer>
        <form>
            <input onChange={(e) => setInput(e.target.value)} value={input} placeholder={`Message #${channelName}`} />
            <Button type="submit" onClick={sendMessage}>
                <SendOutlinedIcon />
            </Button>
        </form>

    </ChatInputContainer>;
}

export default ChatInput;

const ChatInputContainer = styled.div`
    position:absolute;
    width:81%;
    bottom:2px;

    border:1px solid gray;
    border-radius:50px;
    display:flex;
    justify-content:center;
    padding-left:10px;
    >form{
        width:100%;
        display:flex;
        justify-content:space-between;
        border-radius:50px;
    }

    >form>input{

        outline:none;
        border-radius:50px;
        border:none;
        width:100%
    }

    >form>Button{
        background-color:var(--slack-color);
        color:white;
        border-top-right-radius:50px;
        border-bottom-right-radius:50px;
        
    }

    /* border-radius:20px;

    >form{
        position:relative;
        display:flex;
        justify-content:center;
    }

    >form>input{
        position:fixed;
        bottom:0;
        width:60%;
        border:1px solid gray;
        border-radius:50px;
        padding:20px;
        outline:none;

    } */

`