import React, {Suspense} from 'react'
import styled from 'styled-components'
import Card from './Card'
import NoData from '../UI/NoData.png'
const Recommendation = styled.div`
    text-align:center;
    margin-top:5rem;
`;

const Loader = styled.div`
    margin-top:10rem;
    font-size:5rem;
`;


const Recommend = ({reco}) => {

    let recom = <div > 
         <h1>Cannot find recommended movies..</h1>
        <img style={{width:'50%', textAlign:'center'}} src={NoData} alt="Cannot find recommended movies.." /> 
        </div>
    if(reco.length !== 0) {
        recom  = reco.map(rec => (
            <Suspense key={rec.id} fallback={<Loader> Loading.. </Loader> }> 
                <Card details={rec}  key={rec.id} />  
            </Suspense>
            ))

    }
    return (
        <Recommendation>
                    <h1>Recommended</h1>
                        {recom}
        </Recommendation>
    )
}

export default Recommend
