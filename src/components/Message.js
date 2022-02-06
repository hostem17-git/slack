import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';


function Message({ message, user, timestamp, userImage }) {

    return <MessageContainer>
        <Avatar />

        <MessageInfo>
            <h4>{user}
                <span>{Date(timestamp?.toDate().toUTCString())}</span>
            </h4>

            <p> {message} </p>

        </MessageInfo>


    </MessageContainer>;

}

export default Message;


const MessageContainer = styled.div`

    display:flex;
    padding:10px;
    align-items:center;
    border-bottom:1px solid lightgray;
    `;

const MessageInfo = styled.div`
    width:100%;
    margin-left:5px;
    >h4{
    display:flex;
    justify-content:space-between;}

    >h4 >span{
        color:gray;
        font-weight:400;
        margin-left:4px;
        font-size:12px;
    }
`;


