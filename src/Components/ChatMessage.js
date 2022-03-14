import styled from 'styled-components'
import React from 'react'

function ChatMessage({text,name,image,timestamp}) {
  return (
    <ChatArea>
        <UserAvatar>
            <img src= {image} />
        </UserAvatar>
        <MessageContent>
            <Name>Marriane Akeyo
                <span>
                    {new Date(timestamp.toDate()).toUTCString()}
                </span>
            </Name>
            <Text>Whats up byurifuuu</Text>
        </MessageContent>
    </ChatArea>
  )
}

export default ChatMessage

const ChatArea = styled.div`
padding: 8px 20px;
display:flex;
align-items:center;
`

const UserAvatar = styled.div`
width:36px;
height:36px;
border-radius:2px;
overflow:hidden;
margin-right:8px;

img {
    width:100%;
}

`

const MessageContent = styled.div`
display:flex;
flex-direction:column;
`

const Name = styled.span`
font-weight:900;
font-size:15px;
line-height:1.4;

span{
    margin-left:8px;
    font-weight:400;
    color:rgb(97,96,97);
    font-size: 13px;
}
`

const Text = styled.span``