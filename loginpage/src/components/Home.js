import React from 'react';
import { getUser, removeUser } from '../commonUtils/Common';
import { Provider } from 'react-redux';
import store from "../store";
import Posts from './Posts';
import Quotes from "../components/Quotes";


function Home(props) {
  const user = getUser();
  const handleLogout = () => {
    removeUser();
    props.history.push('/login');
  }
  return (
    <Provider store={store}>
      <div className="home" style={{display: "flex", justifyContent:"end",padding:"20px"}}>
     
        <button type="button" className='btn' 
    //      style={{fontSize: "20px",fontWeight: "700", height: "fit-content",margin: "20px",
    // padding:" 3px", backgroundColor: "rgb(255 255 255)",color: "black",borderRadius:"8px",padding: "4px 10px" // }}
     onClick={handleLogout} value="Logout" >Logout</button>
      </div>
      <div style={{color:"#ffffff", display:"flex", justifyContent: "end"}}>Login Count {user.user.loginCounter} !</div>

      <h1  className="welcome" 
      style={{color:"#ffffff", display:"flex", justifyContent: "center"}}
      >
        Welcome {user.user.firstname} &#128151;</h1><br></br>
      {/* <Posts /> */}
      <h2 className="quotes"
    //   style={{justifyContent:"center", display:"flex", color: "yellow", backgroundColor: "#07789e",
    
    // margin: "0px auto",
    // padding: "6px",
    // border: "1px solid rgb(25, 25, 90)",
    // borderRadius:"12px"}}
    >&#128512;Best Quotes For You&#128512;</h2>
      <Quotes />

    </Provider>
  );
}

export default Home;
