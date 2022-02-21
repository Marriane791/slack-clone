import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { sidebarItemsData } from '../data/SideBarData';
import AddIcon from '@mui/icons-material/Add';
import {channelData} from '../data/ChannelData';

function Sidebar() {
    return (
        <Sidebaree>
            <WorkSpace>
                <Name>Clever Programmer</Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpace>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainchannelItem>
                            {item.icon}
                            {item.text}
                </MainchannelItem>
                    ))
                }
                
            </MainChannels>
            <ChannelsContainer>
                <NewChannel>
                    <div>Channels</div>
                    <AddIcon />
                </NewChannel>
                <ChannelList>
                        {
                            channelData.map(item =>(
                                <Channel>
                                    {item.hash}
                                    {item.text}
                                </Channel>
                            ))
                        }
                </ChannelList>
            </ChannelsContainer>
        </Sidebaree>
    )
}

export default Sidebar

const Sidebaree = styled.div`
background:#350d36;
color:#fff;
`
const WorkSpace = styled.div`
height:64px;
display:flex;
align-items:center;
padding-left:19px;
justify-content:space-between;
border-bottom:1px solid #532753;
 `

const Name = styled.div`
`
const NewMessage = styled.div`
width:36px;
height:36px;
background:#fff;
color:#3F0E40;
fill:#3F0E40;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:20px;
cursor:pointer;
`

const MainChannels = styled.div`
padding-top:20px;
`

const MainchannelItem = styled.div`
color: rgb(188,171,188);
display:grid;
grid-template-columns:15% auto;
height:28px;
align-items:center;
padding-left:18px;
cursor:pointer;
:hover{
    background-color:black;
}
`
const ChannelsContainer = styled.div`
color: rgb(188,171,188);
margin-top:10px;
`

const NewChannel = styled.div`
display:flex;
justify-content:space-between; 
align-items:center;
height:20px;
padding-left:19px;
padding-right:12px;
`
const ChannelList = styled.div``

const Channel = styled.div`
height:28px;
display:flex;
align-items:center;
justify-content:space-between;
padding-left:19px;
cursor:pointer;
:hover {
    color:black;
}
`
