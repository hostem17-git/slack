import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { auth, db } from "../firebase"
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ chatRef, channelName, channelId }) {
    const [user] = useAuthState(auth)

    const [input, setInput] = useState("");
    const sendMessage = (e) => {

        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            userImage: user?.photoURL,
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

`