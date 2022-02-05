import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


function Header() {
    return <HeaderContainer>
        {/* Header Left */}
        <HeaderLeft>
            <HeaderAvatar />
        </HeaderLeft>
        {/* Header Search */}
        <HeaderSearch>

        </HeaderSearch>
        {/* Header Right */}
        <HeaderRight>
            <Logout />
        </HeaderRight>

    </HeaderContainer>
}

export default Header;

const HeaderContainer = styled.div`
    color: red;
    `

const HeaderLeft = styled.div``;  //for default components

const HeaderSearch = styled.div``;

const HeaderRight = styled.div``;


const HeaderAvatar = styled(Avatar)`    {/*use paranthesis for Custom component*/ } 
`

const Logout = styled(PowerSettingsNewIcon)`
`