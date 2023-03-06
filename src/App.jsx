import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import NavBar from './components/NavBar';
import Candidates from './pages/Candidates';
import LandingPage from './pages/LandingPage';
import Overview from './pages/Overview';
import Statistics from './pages/Statistics';

export const generalContext = React.createContext();

const App = () => {
  const [announced_pu_results_data, setAnnounced_pu_results_data] = useState(null);
  const [states_data, setStates_data] = useState(null);
  const [lga_data, setLga_data] = useState(null);
  const [party_data, setParty_data] = useState(null);
  const [agents_data, setAgents_data] = useState(null);
  const [announced_lga_results_data, setAnnounced_lga_results_data] = useState(null);
  const [polling_unit_data, setPolling_unit_data] = useState(null);
  const [ward_data, setWard_data] = useState(null);
  const [apiStatus, setApi_status] = useState({
    loading: false,
    error: null,
  });


  const fetchData = async () => {
    // Make an HTTP GET request to the API endpoint
    setApi_status({ ...apiStatus, loading: true });
    await fetch('https://lacier-glossaries.000webhostapp.com/')
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
      })
      .then(data => {
        const { ward, polling_unit, states, lga, party, agents, announced_lga_results, announced_pu_results } = data;
        setAnnounced_pu_results_data(announced_pu_results);
        setStates_data(states);
        setLga_data(lga);
        setParty_data(party);
        setAgents_data(agents);
        setAnnounced_lga_results_data(announced_lga_results);
        setPolling_unit_data(polling_unit);
        setWard_data(ward);
      })
      .catch(error => {
        // Display an error message
        setApi_status({ ...apiStatus, error: `There was a problem with the API call:', ${error}` });
      });

    setApi_status({ ...apiStatus, loading: false });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <generalContext.Provider value={{announced_lga_results_data, announced_pu_results_data, states_data, lga_data, party_data, agents_data, ward_data,polling_unit_data, apiStatus}}>
        <div className="app">
          {apiStatus.loading && <div className="loadscreen">
            <img src="https://interview.sirv.com/icons/icons8-loading-circle.gif" alt="" />
          </div>}
          <NavBar />
          <Routes>
            <Route exact path='*' element={<Overview />} />
            <Route exact path='/' element={ <LandingPage/> } />
            <Route path='/overview' element={<Overview />} />
            <Route path='/candidates' element={<Candidates />} />
            <Route path='/statistics/' element={<Statistics />} />
            <Route path='/statistics/:id' element={<Statistics />} />
          </Routes>
          <NavBar isFooter={true} />
          <MobileNav />
        </div>
      </generalContext.Provider>
    </BrowserRouter>
  )
}

export default App;