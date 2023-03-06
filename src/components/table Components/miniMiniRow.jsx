import React,{ useState, useEffect, useContext } from 'react';
import { trContext } from './TableRow';

const MiniMiniRow = ({name, vote}) => {
    const { open } = useContext(trContext);
    const [expand, setExpand] = useState(false);

    
    useEffect(()=>{
        !open && setExpand(open);
    }, [open]);

    return (
        <div className="sect_row">
            <div className="main-r" onClick={() => setExpand(!expand)}>
                <div className="table_td">
                    <span>{name}</span>
                </div>
                <div className="table_td">
                    <span className=''>{Number(vote).toLocaleString()}</span>
                </div>
                <div className="table_td">
                    <span>---</span>
                </div>
            </div>
        </div>
    )
}

export default MiniMiniRow;