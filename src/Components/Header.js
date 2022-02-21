import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
    return (
        <Containerh>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder = "search ..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>Marriane</Name>
                <UserImage>
                    <img src='/images/IMG_9647.JPG' />
                </UserImage>
            </UserContainer>
        </Containerh>
    )
}

export default Header

const Containerh = styled.div`
background:#350d36;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
position:relative;
box-shadow: inset 0 0 0 1px rgb(104 74 104);


`
const Main = styled.div`
display:flex;
margin-right:16px;
margin-left:16px;
`

const SearchContainer = styled.div`
min-width:400px;
margin-left:16px;
margin-right:16px;
`

const Search = styled.div`
box-shadow: inset 0 0 0 1px rgb(104 74 104);
width:100%;
border-radius:6px;


input {
    background-color:transparent;
    border:none;
    padding-left:8px;
    padding-right:8px;
    padding-top:4px;
    padding-bottom:4px;
    color:white;
}
input:focus {
    outline:none;
}
`

const UserContainer = styled.div`
display:flex;
align-items:center;
padding-right:16px; 
position:absolute;
right:0; 
`

const Name = styled.div`
pading-right:16px;
`

const UserImage = styled.div`
width:20px;
height:25px;
padding:5px;
margin:5px;
border:1px solid #fff;
border-radius:3px;
img {
    width:100%;
}
`