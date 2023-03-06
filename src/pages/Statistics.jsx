import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generalContext } from '../App';
import Table from '../components/Table';

const Statistics = () => {
    const [lgaArray, setLgaArray] = useState(null);
    const [puArray, setPuArray] = useState(null);
    const [partyData, setPartyData] = useState(null);
    const [puData, setPuData] = useState(null);
    const { announced_lga_results_data, states_data, lga_data, polling_unit_data, announced_pu_results_data } = useContext(generalContext);
    const [currentSlide, setCurrentSlide] = useState(0);

    const { id } = useParams();

    const initiateLgaTable = () =>{
        if (lga_data) {
            const lgaMap = new Map();
            const partyMap = [];

            // Create a map of LGAs with their initial values
            lga_data.forEach(lga => {
                const lgaId = lga.lga_id;
                const stateId = lga.state_id;
                const stateArray = Array.from(states_data.values());
                const value = {
                    entry: lga.entered_by_user,
                    name: lga.lga_name,
                    state: stateArray[stateId].state_name,
                    votes_count: 0,
                    id: 0,
                };
                lgaMap.set(lgaId, value);
            });

            // Update the LGA map with the announced results and create a map of parties with their total votes
            announced_lga_results_data.forEach(lgaResult => {
                const { lga_name, party_score, party_abbreviation } = lgaResult;
                const lgaData = lgaMap.get(lga_name);
                const votesCount = parseInt(lgaData.votes_count) + parseInt(party_score);
                
                const lgaValue = { ...lgaData, votes_count: votesCount, id: lga_name };
                lgaMap.set(lga_name, lgaValue);

                partyMap.push({lga_name,  party_abbreviation, party_score});
            });

            
            setLgaArray(Array.from(lgaMap.values()));
            setPartyData(partyMap);
        }
    }

    const initiatePuTable = () =>{
        if (polling_unit_data) {
            const puMap = new Map();
            const puPartyMap = [];

            polling_unit_data.forEach(unit => {
                const { uniqueid, polling_unit_name, polling_unit_number, entered_by_user  } = unit;
                if (polling_unit_name) {
                    const dataObj = {
                        entry: entered_by_user ? entered_by_user : '',
                        name: polling_unit_name,
                        state: polling_unit_number,
                        votes_count: 0,
                        id: uniqueid,
                    }
                    puMap.set(uniqueid, dataObj);
                }
            });
            
            announced_pu_results_data.forEach(pu => {
                const { party_abbreviation, party_score, polling_unit_uniqueid } = pu;

                const mapPrevValue = puMap.get(polling_unit_uniqueid);
                const value = puMap.get(polling_unit_uniqueid) ? puMap.get(polling_unit_uniqueid).votes_count : 0;

                puMap.set(polling_unit_uniqueid, {...mapPrevValue, votes_count: (parseInt(value) + parseInt(party_score))})
                puPartyMap.push({lga_name: polling_unit_uniqueid,  party_abbreviation, party_score});
            });

            setPuData(Array.from(puMap.values()));
            setPuArray(puPartyMap);
        }
    }

    useEffect(() => {
        initiateLgaTable();
        initiatePuTable();
    }, [lga_data, announced_lga_results_data, states_data]);


    const scrollToEnd = () => {
        const myDiv = document.getElementById('my-div');
        myDiv.scrollLeft = myDiv.scrollWidth - myDiv.clientWidth;
    }

    const scrollToStart = () => {
        const myDiv = document.getElementById('my-div');
        myDiv.scrollLeft = 0;
    }
    
    useEffect(()=>{
        switch (id) {
            case "lga":
                setCurrentSlide(0);
                break;
                
            case "poll":
                setCurrentSlide(1);
                break;
        
            default:
                setCurrentSlide(0);
                break;
        }

    }, [id])

    useEffect(() => {
        if (currentSlide === 0) {
            scrollToStart()
        } else {
            scrollToEnd()
        }
    }, [currentSlide]);

    return (
        <div className="dashboard_page">
            {currentSlide === 0 && <div className={`title`}>Election results from {lga_data?.length} local government Areas</div>}
            {currentSlide === 1 && <div className={`title`}>Election results from {polling_unit_data?.length} Polling units</div>}
            <section className="table_section">
                <div className="filter_row">
                    <div className="limit">
                        {/* <label>show</label>
                        <div className="inp">
                            <input type="number" name="" value={0} id="" disabled />
                            <div className="ctrl">
                                <img src="https://interview.sirv.com/icons/icons8-empty-flag-90.png" alt="" />
                                <img src="https://interview.sirv.com/icons/icons8-empty-flag-90.png" alt="" />
                            </div>
                        </div> */}
                    </div>

                    <div className="tab">
                        <span className={`${currentSlide === 0 && "active"}`} onClick={() => setCurrentSlide(0)}>Lga</span>
                        <span className={`${currentSlide === 1 && "active"}`} onClick={() => setCurrentSlide(1)}>Pu</span>
                    </div>
                </div>

                <div className="slide" id='my-div'>
                    <Table id={'tb1'} type={0} lgaArray={lgaArray} partyData={partyData} key={1} th={["LGA Name", "LGA Votes", "LGA State", "Entry Personel"]} />
                    <Table id={'tb2'} type={1} lgaArray={puData} partyData={puArray} th={["Unit Name", "Unit Votes", "Unit Number", "Entry Personel"]}/>
                </div>
            </section>
        </div>
    )
}

export default Statistics;