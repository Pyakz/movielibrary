import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { Route, Switch } from "react-router-dom";
import SearchBar from './Components/UI/SearchBar';
import Movies from './Components/Movies/Movies';
import Movie from './Components/Movies/Movie';
import Nav from './Components/Navigation/Nav';
import Scroll from './Components/UI/Scroll';
import Backdrop from './Components/UI/Backdrop';

const Container = styled.main`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
`;

const MobileHeader = styled.div`

  width: 100%;
  height: auto;
  position: fixed;
  right: 0;
  top: 0;
  background-color:var(--color1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.52);
  z-index:9;

  @media (max-width:800px) { padding: .5rem 2.5rem; }  

`;

const Hamburger = styled.span`

    display:inline-block;
    font-size:3.5rem;
    color: var(--DarkColor1);

    &:hover { cursor:pointer; }

    @media (min-width:801px) { display:none; }  

`;



function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width
}

const App = () => {
  const [navHide, setNavHide] = useState(true)
  const [position, setPosition] = useState(false)  
  const [windowDimension, setWindowDimension] = useState(getWindowDimensions());
  
  const navCloser = () => setNavHide(false)
  const navOpener = () => setNavHide(true)
  
  useEffect(() => {
      const handleResize = () => setWindowDimension(getWindowDimensions());
      window.addEventListener('resize', handleResize);
      if(windowDimension >= 799) { 
        setNavHide(true) 
        setPosition(true) 
      } else {
        setPosition(false) 
        setNavHide(false)
      }
      return () => window.removeEventListener('resize', handleResize);
  }, [windowDimension]);


  return (
      <Container>
        <Scroll >
        
              {navHide ? <Backdrop click={navCloser}  position={position} navHide={navHide} /> : null }
                <Nav navHide={navHide} closer={navCloser} position={position} clicked={navCloser}/> 
                      <MobileHeader navHide={navHide} > 
                        <Hamburger onClick={navOpener}> &#9776; </Hamburger>
                        <SearchBar />    
                      </MobileHeader>         
                  <Switch>
                    <Route path='/' exact render={(props) => <Movies  {...props} navHide={navHide} position={position}/>} />
                    <Route exact path='/:category' render={(props) => <Movies  {...props} navHide={navHide} position={position}/>} />
                    <Route exact path='/results' render={(props) => <Movies  {...props} navHide={navHide} position={position}/>} />
                    <Route exact path='/movie/:id' render={(props) => <Movie  {...props} navHide={navHide} position={position}/>} />
                    <Route path='/'  render={() => <h1> cant find</h1>} />
                  </Switch>
        </Scroll>
      </Container> 
  )
}

export default App;
