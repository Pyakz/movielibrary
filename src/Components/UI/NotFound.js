import React from 'react'
import NoData from './NoData.png';

import {  withRouter } from "react-router-dom";

const NotFound = ({history}) => {

    return (
        <div style={{ textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',marginTop:'5rem'}}>
            <h1>Cannot find movies..</h1>
            <img src={NoData} alt="No DataFound" style={{width:'50%'}} />
        </div>
    )
}

export default withRouter(NotFound)
