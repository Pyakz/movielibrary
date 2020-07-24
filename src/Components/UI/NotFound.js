import React from 'react'
import NoData from './NoData.png';
import { HomeButton } from './Pagination';

import {  withRouter } from "react-router-dom";

const NotFound = ({history}) => {

    return (
        <div style={{ textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',marginTop:'5rem',height:'90vh' }}>
            <h1>Cannot find movies..</h1>
            <img src={NoData} alt="No DataFound" style={{width:'50%' }} />
            <HomeButton onClick={() => history.push('/')}> 
                <div > 
                <h4 className='left'> &#x2302; </h4> 
                <h4> Home </h4> 
              </div>
              </HomeButton>
        </div>
    )
}

export default withRouter(NotFound)
