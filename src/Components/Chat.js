import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import {useParams} from 'react-router-dom'

function Chat({user}) {
    
    let { channelId } = useParams();
    const getChannel = () => {
        //database functionality to fetch channels from rooms
    }
    
    const [messages,setMessages] = useState();

    const getMessages = () =>{
        //db function to fetch messages
    }

    const sendMessage = (text) => {
      if (channelId)
     { 
         let payload =  {
          text:text,
          user:user.name,
        }
        //some db functionality


      }
    }

    const [channel,setChannels] = useState();

    useEffect(()=>{
         getChannel();
         getMessages();
    },[channelId])

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
                {
                    messages.length > 0 &&
                    messages.map(()=>{
                        <ChatMessage 
                        //props
                        />
                    })
                }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage}/>
        </ContainerChat>
    )
}

export default Chat

const ContainerChat = styled.div`
display:grid;
grid-template-rows:64px auto min-content; 
min-height:0;
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
display:flex;
flex-direction:column;
overflow-y:scroll;
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