import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

function Chat() {
    return (
        <ContainerChat>
            <Header>
                <ChannelInfo>
                    <ChannelName># Clever</ChannelName>
                    <ChannelDescription>More coding cause the future is remote</ChannelDescription>
                </ChannelInfo>
                <ChannelDetails>
                    <div>Details</div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>
                 <ChatMessage />
            </MessageContainer>
            <ChatInput />
        </ContainerChat>
    )
}

export default Chat

const ContainerChat = styled.div`
display:grid;
grid-template-rows:64px auto min-content; 
`

const Header = styled.div`
padding-left:20px;
padding-right:20px;
display:flex;
align-items:center;
border-bottom:1px solid rgba(83,39,83,.13);
justify-content:space-between;
`

const MessageContainer = styled.div`
`

const ChannelInfo = styled.div``

const ChannelDetails = styled.div`
display:flex;
align-items:center;
color: #606060;
`

const ChannelName = styled.div`
font-weight:700;
`

const ChannelDescription = styled.div`
font-weight:400;
color:#606060;
font-size:13px;
margin-top:8px;
`
const Info = styled(InfoOutlinedIcon)`
margin-left:10px;
`