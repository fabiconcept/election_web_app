import React, { useContext, useEffect, useState } from 'react';
import { generalContext } from '../../App';
import MiniMiniRow from './miniMiniRow';
import { trContext } from './TableRow';

const MiniRow = ({type}) => {
    const {open, data, partyData} = useContext(trContext);
    const [miniArray, setMiniArray]= useState([]);

    useEffect(()=>{
        const arrMap = new Map();
        partyData.forEach(element => {
            const {lga_name, party_abbreviation, party_score} = element;
            if (lga_name === data.id) {
                const prevScore = arrMap.get(party_abbreviation) ? arrMap.get(party_abbreviation).party_score : 0;
                arrMap.set(party_abbreviation, {party_score: (parseInt(party_score) + parseInt(prevScore)), party_abbreviation});
                setMiniArray(Array.from(arrMap.values()));
            }

        });
    }, [partyData])

    return (
        <section className={`sub ${!open && "hide"} ${open && type ===1 && "short"}` }>
            {miniArray && miniArray.map(i=>(<MiniMiniRow name={i.party_abbreviation} vote={i.party_score} key={i.party_abbreviation}/>))}
        </section>
    )
}

export default MiniRow;