import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';


function Chat() {
    const roomId = useSelector(selectRoomId)
    const chatRef = useRef(null);

    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    );


    const [roomMessages, loading] = useCollection(
        roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc")
    );


    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [roomId, loading]);

    // console.log(roomDetails?.data())
    // console.log(roomMessages)


    return <ChatContainer>

        {roomId ?
            (
                <Header>
                    <HeaderLeft>
                        <h4><strong>#{roomDetails?.data()?.name}</strong></h4>
                        <StarBorderIcon />
                    </HeaderLeft>

                    <HeaderRight>
                        <InfoOutlinedIcon /> <p>Details</p>
                    </HeaderRight>
                </Header>
            ) :
            (<p></p>)
        }



        <ChatMessages>
            {roomMessages?.docs.map((doc) => {
                const { message, timestamp, user, userImage } = doc.data();

                return (
                    <Message
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                )
            })}

            {/* //TODO: Remove Message overlap with Input */}
            <ChatBottom ref={chatRef} />

        </ChatMessages>

        {roomId ? (<ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data()?.name}
            channelId={roomId}
        />) : (
            <SelectChannelMessage>
                <p>Select a Channel to Continue</p>
            </SelectChannelMessage>
        )}


    </ChatContainer>;
}

export default Chat;

const ChatContainer = styled.div`
    flex:0.8;
    flex-grow:1;
    overflow-y:scroll;
    margin-top:60px;
    `;

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
    border-bottom:1px solid lightgray;
    align-items:center;
`;

const HeaderLeft = styled.div`
    display:flex; 
    align-items:center;
    >h4{
        display:flex;
        /* text-transform:lowercase; */
        
    }

    > .MuiSvgIcon-root{
        margin-left:10px;
        font-size:18px;
    }
    
`;

const HeaderRight = styled.div`
    display:flex;
    align-items:center; 
    >p{
        font-size:14px;

    }

    > .MuiSvgIcon-root{
        margin-right:5px !important;
        font-size:16px;
    }
`;

const SelectChannelMessage = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    margin-top:10px;
`;



const ChatMessages = styled.div``;

const ChatBottom = styled.div`
    padding-bottom:90px;
    `;
