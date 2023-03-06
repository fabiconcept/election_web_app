import React, {useContext} from 'react'
import { generalContext } from '../App';
import Carousel from '../components/Carousel'
import Agents from '../components/mini elements/Agents';
import BarChart from '../components/mini elements/BarChart'

const Overview = () => {
  const { party_data } = useContext(generalContext);

  return (
    <div className="dashboard_page">
        <label>Election Turnout</label>
        <Carousel/>

        <label>Statistical Data</label>
        <div className="card-group g-2">
            <BarChart />
            <div>
              <div className="min-grid">
                { party_data && party_data.map(party => (
                  <div 
                      className='span' 
                      key={party.partyid}
                  >
                    {party.partyname}
                    <img src={`https://interview.sirv.com/candidates/${(party.partyid).toLowerCase()}.jpg`} alt="" />
                  </div>
                ))}
              </div>
            </div>
        </div>  

        <Agents/>

    </div>
  )
}

export default Overview