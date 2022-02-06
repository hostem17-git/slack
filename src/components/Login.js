import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
    const handleSignIn = (e) => {
        console.log("clicked")
        e.preventDefault()

        auth.signInWithPopup(provider).catch((error) => alert.message());

    }

    return <LoginContainer>
        <InnerLoginContainer>
            <img
                src="https://images.pling.com/img/00/00/07/28/00/1422594/e20d4a4b5d23357c5ace1844206c6b02e082e73231a16f9036cb8e3bf109d52816bd.png"
                alt="Slack Logo"
            />
            <h1>Sign in to Slack-Clone</h1>

            <Button onClick={handleSignIn}>
                Sign In via Google
            </Button>
        </InnerLoginContainer>
    </LoginContainer>;
}

export default Login;


const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height:100vh;
    display:grid;
    place-items:center;

`;

const InnerLoginContainer = styled.div`

    padding:100px;
    text-align:center;
    background-color:white;
    border-radius:10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),
                0 1px 2px rgba(0,0,0,.24);
    >img{
        object-fit:contain;
        height:100px;
        margin-bottom:40px;
    }

    >button{
        margin-top:50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color:white;
    }

    >button:hover{
        border:1px solid #0a8d48;
        color:#0a8d48;
    }


`;
