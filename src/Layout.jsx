import React from 'react';
import { Outlet } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import ExploreIcon from '@mui/icons-material/Explore';
// import SearchIcon from '@mui/icons-material/Search';
// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// import SlideshowIcon from '@mui/icons-material/Slideshow';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChatIcon from '@mui/icons-material/Chat';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import MenuIcon from '@mui/icons-material/Menu';
import '../src/App.css';
import '../src/Video/Video.jsx';

function Layout() {
    return (
      <div>
        <header>
         
          <nav>
            
            <ul className="layout">
              <li className="item"><a href="/"> Zoe</a></li>
              <li className="item"><a href="/video"> Video</a></li>
              <li className="item"><a href="/svguiapp"> SVGUIApp</a></li>
              
            </ul>
           
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
  
  export default Layout;