import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Chat from './Components/Chat';
import Login from './Components/Login';
import styled from 'styled-components';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {

  // const getChannels = () => {
  //   //snapshot is a picture of how the database looks like at a particular time
  //   db.collection('rooms').onSnapShot((snapshot) => {
  //   // snapshot.docs.map((doc) => {
  //   //   console.log(doc.data());
  //   // } )
  //   })
  // }
  // // //a use effect calls a function only when the app is being initialised unless otherwise it is called when sth is updated
  // // useEffect (() => {
  // //   getChannels();
  // // },[])

  return (
    <div className="App">
      <Container>
        <Header />
        <Main>
          <Sidebar />
        <Router>
          <Switch>
            <Route path = "/room">
              <Chat />
            </Route>
            <Route path = "/">
              <Login />
            </Route>
          </Switch>
        </Router>
        </Main>
      </Container>
    </div>
  );
}

export default App;
const Container = styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-rows:38px auto;

`
const Main = styled.div`
display:grid;
grid-template-columns: 260px auto;
`

