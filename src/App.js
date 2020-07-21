import React, {useState} from 'react';
import styled from 'styled-components'

import { Route, Switch } from "react-router-dom";
import SearchBar from './Components/UI/SearchBar';
import { GenreProvider } from './Context/GenreContext';
import { MovieProvider } from './Context/MovieContext';

import Movies from './Components/Movies/Movies';
import Movie from './Components/Movies/Movie';
import Nav from './Components/Navigation/Nav';
import Scroll from './Components/UI/Scroll';

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
  z-index:1000;

  @media (max-width:800px) {
    padding: .5rem 2.5rem;
  }  

`;
const Hamburger = styled.span`

    display:inline-block;
    font-size:3.5rem;
    color: var(--DarkColor1);

    &:hover {
        cursor:pointer;
    }

    @media (min-width:801px) {
        display:none;
    }  

`;


const App = () => {

 
  const [navHide, setNavHide] = useState(true)
  const navCloser = () => setNavHide(false)
  const navOpener = () => setNavHide(true)

  return (
      <Container>
        <Scroll >
          <MovieProvider> 
            <GenreProvider> 
              
            <Nav navHide={navHide} closer={navCloser}/> 

              <MobileHeader > 
                <Hamburger onClick={navOpener}> &#9776; </Hamburger>
                 <SearchBar />    
              </MobileHeader> 
                
                <Switch>
                  <Route path='/' exact component={Movies} />
                  <Route exact path='/:category' component={Movies} />
                  <Route exact path='/results' component={Movies} />
                  <Route exact path='/movie/:id' component={Movie} />
                  <Route path='/'  render={() => <h1> cant find</h1>} />
                </Switch>

            </GenreProvider>
          </MovieProvider>
        </Scroll>
      </Container> 
  )
}

export default App;
