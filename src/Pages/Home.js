// import React from 'react';

import Chat from '../components/Chat';
// const Home = () => {
//     return (
//         <div className='home'>
//             <div className='container'>
//                 <Sidebar></Sidebar>
//                 <Chat></Chat>
                
//             </div>
//         </div>
//     );
// };

// export default Home;
import React from "react";
import Sidebar from "react-sidebar";
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Chats from '../components/Chats';
import "../Sidebar.css"
import SideBar from '../components/SideBar';
import menu from '../img/menu.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={   <div className="sidebarMobile">
             <Navbar />
                <Search/>
                <Chats/>
              </div>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#03010eee" } }}
      >
        <div className='openSidebar'>
        <button  onClick={() => this.onSetSidebarOpen(true)}>
          <img className='h-8 w-8 m-2' src={menu} alt="" />
          
        </button>
        <p className='text-2xl text-black'>Chats</p>
        </div>
        
        <div className='home'>
       
        <div className='container'>
                
                 
                 <SideBar></SideBar>
                 <Chat></Chat>
                 
                
           </div>
        </div>

      </Sidebar>
    );
  }
}

export default Home;