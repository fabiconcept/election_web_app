import React, { useContext } from 'react';
import { generalContext } from '../../App';

const Agents = () => {
    const { agents_data } = useContext(generalContext);

    return (
        <div className="agents">
            {agents_data && agents_data.map(agent => (
                <div className="agent" key={agent.name_id}>
                    <div className="img"><img src={`https://interview.sirv.com/agents/OIP%20(${agent.name_id}).jfif`} width="200" height="280" alt="" /></div>
                    <label>{agent.firstname} {agent.lastname}</label>
                </div>
            ))}
        </div>
    )
}

export default Agents;