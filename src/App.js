import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Chat from './Components/Chat';
import Login from './Components/Login';
import styled from 'styled-components';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {
   const [rooms,setRooms] = useState([]) 
   const [user,setUser] = useState([])

   //const getChannels = () => {
  //   //snapshot is a picture of how the database looks like at a particular time
  //   db.collection('rooms').onSnapShot((snapshot) => {
  //    setRooms(snapshot.docs.map((doc) => {
  //   //   console.log(doc.data());
  //    return { id:doc.id, name:doc.data().name };
  //   // } ))
    //}
  // }
  // // //a use effect calls a function only when the app is being initialised unless otherwise it is called when sth is updated
  // // useEffect (() => {
  // //   getChannels();
  // // },[])

  return (
    <div className="App">
        <Router>
          {
            !user ?
            <Login />
            :
            <Container>
            <Header />
            <Main>
              <Sidebar rooms={rooms}/>
              <Switch>
               <Route path = "/room/:channelId">
                <Chat user={user} />
               </Route>
               <Route path = "/">
                 Select or create channel.
               </Route>
              </Switch>
            </Main>
          </Container>
          }
        </Router>
    </div>
  );
}

export default App;
const Container = styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-rows:38px minmax(0,1fr);

`
const Main = styled.div`
display:grid;
grid-template-columns: 260px auto;
`

