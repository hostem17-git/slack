import React from 'react';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';
import SidebarOptions from './SidebarOptions';
import ChatIcon from '@mui/icons-material/Chat';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>VJ Space</h2>
                    <h3>
                        <CircleIcon />
                        Vinayak Jaiswal
                    </h3>
                </SidebarInfo>
                <EditIcon />
            </SidebarHeader>

            <SidebarOptions Icon={ChatIcon} Title="Threads" />
            <SidebarOptions Icon={InboxIcon} Title="Mentions & reactions" />
            <SidebarOptions Icon={DraftsIcon} Title="Saved items" />
            <SidebarOptions Icon={DraftsIcon} Title="Channel Browser" />
            <SidebarOptions Icon={PeopleIcon} Title="People & user groups" />
            <SidebarOptions Icon={AppsIcon} Title="Apps" />
            <SidebarOptions Icon={FileCopyIcon} Title="File browser" />
            <SidebarOptions Icon={ExpandLessIcon} Title="Show less" />


        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    flex:0.2;
    color:white;
    background-color:var(--slack-color);
    margin-top:60px;
    border-top:1px solid #49274b;
    max-width:260px;
    
`;

const SidebarHeader = styled.div`
    display:flex;
    border-bottom:1px solid #49274b;
    padding:13px;
    > .MuiSvgIcon-root{
        padding:8px;
        color:#49274b;
        font-size:18px;
        background-color:white;
        border-radius:100%;
    }
`;

const SidebarInfo = styled.div`
    flex:1;
    >h2{
        font-size:15px;
        font-weight:700;
        margin-bottom:5px;
    }
    >h3{
        display:flex;
        align-items:center;
        font-size:13px;
        font-weight:400;
    }

    >h3 > .MuiSvgIcon-root{
        font-size:14px;
        margin-top:1px;
        margin-right:5px;
        color:green;
    }
`;
