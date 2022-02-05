import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from "../firebase"



function SidebarOptions({ Icon, Title, addChannelOption, id }) {
    const dispatch = useDispatch();


    const addChannel = () => {
        const channelName = prompt("Please Enter Channel Name")

        if (channelName) {
            db.collection("rooms").add(
                { name: channelName, }
            )
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
    };

    return (<SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
    >

        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? <h3> {Title}</h3> :
            <SidebarOptionChannel>
                <span>#</span> {Title}
            </SidebarOptionChannel>
        }

    </SidebarOptionContainer>);
}


export default SidebarOptions;

const SidebarOptionContainer = styled.div`
    display:flex;
    align-items:center;
    font-size:12px;
    padding-left:2px;
    cursor:pointer;
    margin: 0 3px ;

    :hover{
        opacity:.9;
        background-color:#340e36;
    }

    >h3{
        font-weight:500;
    }

   
`;

const SidebarOptionChannel = styled.h3`
    padding:10px 0;
    font-weight:300;
    >span{
        padding:15px;
    }


`;