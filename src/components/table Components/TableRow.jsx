import React, { useState } from 'react';
import MiniRow from './miniRow';

export const trContext = React.createContext();
const TableRow = ({ data, partyData, type }) => {

    const [open, setOpen] = useState(false);


    return (
        <trContext.Provider value={{open, data, partyData}}>
            <div className={`table_tr`}>
                <section className='main' onClick={() => setOpen(!open)}>
                    <div className="table_td">
                        <span>{data.name}</span>
                        <span>
                            {type ===0 && "LGA"}
                            {type ===1 && "Unit"}
                        </span>
                    </div>
                    <div className="table_td">
                        <span>{(data.votes_count).toLocaleString()}</span>
                    </div>
                    <div className="table_td">
                        <span>{data.state}</span>
                    </div>
                    <div className="table_td">
                        <span>{data.entry}</span>
                    </div>
                </section>
                <MiniRow open={open} type={type} />
            </div>
        </trContext.Provider>
    )
}

export default TableRow;