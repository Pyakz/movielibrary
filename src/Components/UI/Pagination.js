import React, { useContext } from 'react'
import styled from 'styled-components'
import {  withRouter } from "react-router-dom";
import { CurrentPage } from '../../Context/PaginationContext';

const Page = styled.div`

    width:100%;
    margin:4rem 1rem;
    z-index:${props => props.navHice ? '0' : '2'};
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
        
    div {

            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            background-color:var(--color1);
            color:white;
            margin:1rem;
            border-radius:50rem;
            padding:1rem 2.5rem;
            transition: all .3s ease-in-out;
            font-size:1.2rem;
            box-shadow: 0px 3px 10px -5px rgba(0,0,0,1);

            h4 { font-size:1.2rem;}

            .left {
                    font-size:1.5rem;
                    margin-right:1rem;
                }

            .right {
                    margin-left:1rem;
                    font-size:1.5rem;
                }
          
     
            &:hover {
                transform:scaleX(1.1);
                color:var(--DarkColor1);
                cursor:pointer;
                background-color:lightblue;
                box-shadow: 0px 3px 17px -5px rgba(0,0,0,1);
            }
        }
    

`;

export const HomeButton = styled.div`
    width:100%;
    margin:4rem 1rem;
    z-index:${props => props.navHice ? '0' : '2'};
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    
    div {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            background-color:var(--color1);
            color:white;
            margin:1rem;
            border-radius:50rem;
            padding:1rem 2.5rem;
            transition: all .3s ease-in-out;
            font-size:1.2rem;
            box-shadow: 0px 3px 10px -5px rgba(0,0,0,1);

    h4 { font-size:1.2rem;}

    .left {
            font-size:1.5rem;
            margin-right:1rem;
        }

        &:hover {
            transform:scaleX(1.1);
            color:var(--DarkColor1);
            cursor:pointer;
            background-color:lightblue;
            box-shadow: 0px 3px 17px -5px rgba(0,0,0,1);
            }
    }
`;

const Pagination = (props) => {
    const {page, setPage} = useContext(CurrentPage)

const pageAdder = () => {
    setPage(page + 1)
    props.history.push(`?page=${page+1}`)
}

const pageReducer = () => {
    setPage(page - 1)
    props.history.push(`?page=${page}`)
}

let button; //Initialize button variable
 if(page <= 1) {
     //If page is less than or equal to one then it is either 0 or 1, 
     // so that means the next page is 2 
     // hence, output the Button with right arrow icon
    button =   <div onClick={ pageAdder }> 
                    <h4> Page  {page + 1}</h4> 
                    <h4 className='right'> &#8250; </h4> 
              </div>
 }  else if(page > 499) {
     // If page is greater than 499 then it is 500 or higher 
     // in The Movie DB documentation the limit for call is 500 page
     // hence, output the Button with left arrow icon
    button = <div onClick={ pageReducer }> 
                <h4 className='left'> &#8249; </h4> 
                <h4> Page  {page - 1}</h4> 
             </div>
 
} else if ( page > 1 || page < 499) {
    // If page is greater than 1 or less than 499.
     // then output two button with difference direction of icons
    button = 
      <>
       <div onClick={ pageReducer }> 
            <h4 className='left'> &#8249; </h4> 
            <h4> Page  {page - 1} </h4> 
        </div>
        
       <div onClick={ pageAdder }> 
            <h4> Page  {page + 1} </h4> 
            <h4 className='right'> &#8250; </h4 > 
        </div>
    </>
}
    return (
        <Page navHice={props.navHide}>
                {button}
        </Page>
    )
}

export default withRouter(Pagination)
