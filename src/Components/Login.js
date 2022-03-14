import React from 'react'
import styled from 'styled-components'

function Login() {

    return (
        <ContainerLogin>
            <Content>
                <SlackImg  src='http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png'/>
                <h1>Sign in to slack</h1>
                <SigninButton >
                    Sign in with google
                </SigninButton>
            </Content>
        </ContainerLogin>
    )
}

export default Login

const ContainerLogin = styled.div`
width:100%;
height:100vh;
background-color:#f8f8f8;
display:flex;
justify-content:center;
align-items:center;

`

const Content = styled.div`
background-color:white;
padding:100px;
border-radius:5px;
display:flex;
flex-direction:column;
align-items:center;
box-shaddow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

const SlackImg = styled.img`
height:100px;
`
const SigninButton = styled.button`
margin-top:50px;
background-color:#0a8d48;
color:white;
border:none;
height:40px;
border-radius:4px;
cursor:pointer;
font-size:15px;
`