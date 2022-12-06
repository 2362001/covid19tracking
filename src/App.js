import { useEffect, useState } from "react";
import { CountrySelector } from "./components/CountrySelector";
import { Highlight } from "./components/Highlight";
// import { Summary } from "./components/Summary";

import { getReportByCountry, getCountries } from "./apis";

function App() {
  const [countri, setCountri] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      setCountri(res.data);
    });
  }, []);

  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if(selectedCountryId){
      const {Slug} = countri.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
   
  }, [selectedCountryId, countri]);

  return (
    <>
      <CountrySelector countri={countri} handleOnchange={handleOnchange} />
      <Highlight report={report} />
      {/* <Summary report={report} /> */}
    </>
  );
}

export default App;
