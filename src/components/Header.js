import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


function Header() {

    const [user] = useAuthState(auth)


    return <HeaderContainer>
        {/* Header Left */}
        <HeaderLeft>
            <HeaderAvatar
                src={user?.photoURL}
                alt={user?.displayName}
            />
            <AccessTimeIcon />
        </HeaderLeft>
        {/* Header Search */}
        <HeaderSearch>
            <SearchIcon />
            <input placeholder='Search' />

        </HeaderSearch>
        {/* Header Right */}
        <HeaderRight>
            <Logout onClick={() => auth.signOut()} />

        </HeaderRight>

    </HeaderContainer>
}

export default Header;

const HeaderContainer = styled.div`
    display:flex;
    position:fixed;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding:10px 0;
    background-color:var(--slack-color);
    color:white;
`

const HeaderLeft = styled.div`
    flex:0.2;
    display:flex;
    align-items:center;
    margin-left:20px;
    justify-content:space-between;

> .MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;
}

`;  //for default components

const HeaderSearch = styled.div`
    flex:.5;
    opacity:1;
    border-radius:6px;
    /* background-color:#421f44; */
    background-color:white;

    text-align:center;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:gray;
    border:1px solid gray;

    > input{
        background-color:transparent;
        outline:none;
        border:none;
        text-align:left;
        min-width:90%;
    }
    
`;

const HeaderRight = styled.div`
    flex:0.2;
    display:flex;
    align-items:flex-end;
    margin-left:auto;
    margin-right:20px;

> .MuiSvgIcon-root{
    margin-left:auto;
    margin-right:20px;
}


`;


const HeaderAvatar = styled(Avatar)`    {/*use paranthesis for Custom component*/ } 
`

const Logout = styled(PowerSettingsNewIcon)`
    cursor:pointer;

    :hover{
        opacity:0.8;
    }
`