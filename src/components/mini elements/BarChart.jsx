import React, {useContext, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { generalContext } from '../../App';


const BarChart = () => {
  const [labels, setLabels] = useState(['APC', 'PDP', 'LP', 'NNPP']);
  const [party_scores, setParty_scores] = useState([0,0,0,0,0,0,0,0,0]);
  const { announced_lga_results_data, announced_pu_results_data, party_data,} = useContext(generalContext);

  useEffect(()=>{
    if (party_data) {
      let arr = []
      party_data.forEach(party =>{
        arr.push(party.partyid);
      });

      setLabels(arr.sort());

      const resultMap = new Map();

      announced_lga_results_data.forEach(lga=>{
        const key = lga.party_abbreviation;
        const value= lga.party_score;


        if (resultMap.has(key)) {
          const existingValue = resultMap.get(key);
          resultMap.set(key, (parseInt(existingValue) + parseInt(value)));
        }else{
          resultMap.set(key, value);
        }

      });
      
      announced_pu_results_data.forEach(pu=>{
        const key = pu.party_abbreviation;
        const value= pu.party_score;

        
        if (resultMap.has(key)) {
          // Key already exists, update the value
          const existingValue = resultMap.get(key);
          resultMap.set(key, (parseInt(existingValue) + parseInt(value)));
        }else{
          resultMap.set(key, value);
        }
      });
      
      const sortedMap = new Map([...resultMap.entries()].sort());
      setParty_scores(Array.from(sortedMap.values()))
    }

  },[party_data, announced_lga_results_data] );

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Election Graph',
      }
    },
  };


  const data = {
    labels,
    datasets: [
      {
        label: 'Votes',
        data: party_scores,
        backgroundColor: '#3c4fff',
        barPercentage: 0.4,
        categoryPercentage: 1,
      }
    ],
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} height={210} />
    </div>
  )
}

export default BarChart;