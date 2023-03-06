import React, { useState, useContext, useEffect } from 'react';
import { generalContext } from '../App';
import { formatNumber } from '../utilities/toolKits';

const Candidates = () => {
  const [party_scores, setParty_scores] = useState([]);
  const [totalVotes_, setTotalVotes_] = useState(0);
  const { polling_unit_data, announced_lga_results_data, announced_pu_results_data,  } = useContext(generalContext);

  useEffect(() => {
    if (polling_unit_data) {
      const resultMap = new Map();
      announced_lga_results_data.forEach(lga => {
        const key = lga.party_abbreviation;
        const value = lga.party_score;


        if (resultMap.has(key)) {
          const existingValue = resultMap.get(key);
          resultMap.set(key, (parseInt(existingValue) + parseInt(value)));
        } else {
          resultMap.set(key, value);
        }

      });

      announced_pu_results_data.forEach(pu => {
        const key = pu.party_abbreviation;
        const value = pu.party_score;


        if (resultMap.has(key)) {
          // Key already exists, update the value
          const existingValue = resultMap.get(key);
          resultMap.set(key, (parseInt(existingValue) + parseInt(value)));
        } else {
          resultMap.set(key, value);
        }
      });

      const sortedMap = new Map([...resultMap.entries()].sort());
      
      let arr = [];
      let total_Votes = 0;
      resultMap.forEach((k, v) => {
        total_Votes += k;
        arr.push({k, v});
      });

      arr.sort((a, b) => {
        return b.k - a.k;
      });

      setTotalVotes_(total_Votes);
      setParty_scores(arr);
    }
  }, [polling_unit_data, announced_lga_results_data, announced_pu_results_data]);

  return (
    <div className="dashboard_page">
      <label>List of Parties</label>
      <div className="canditate-grid">
        {party_scores && party_scores.map((party, i) => (
          <div className="candidate-card" key={i}>
            <section>
              <div className="info">election party #{i+1}</div>
              <div className="title">{party.v}</div>
              <div className="ft">
                <div className="img"><img src="https://interview.sirv.com/icons/icons8-check-all-512.png" alt="" /></div>
              </div>
            </section>
            <section>
              <div>{formatNumber(party.k)}</div>
              <div>{`${((100 / totalVotes_) * party.k).toFixed(1)}%`}</div>
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Candidates;