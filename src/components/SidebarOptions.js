import React from 'react';
import styled from 'styled-components';

function SidebarOptions({ Icon, Title }) {
    return (<SidebarOptionContainer>

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

    > h3>span{
        padding:150px;
    }
`;

const SidebarOptionChannel = styled.div``;