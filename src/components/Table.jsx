import React from 'react';
import TableRow from './table Components/TableRow';

const Table = ({id, partyData, lgaArray, th, type}) => {
    return (
        <div className="table" id={`${id}`}>
            <div className="table_head">
                {th && th.map(i=>(<span key={i}>{i}</span>))}
            </div>

            <div className="table_body">
                {lgaArray && lgaArray.map(lga=>(<TableRow data={lga} type={type} partyData={partyData} key={Math.random().toString(21)} />))}
            </div>
        </div>
    )
}

export default Table;