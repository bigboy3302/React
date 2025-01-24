import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prasības un Prasību Specifikācija</h1>

        <div className="question-box">
          <h2>Kas ir prasības?</h2>
          <div className="answer-box">
            <p>
              Prasības ir noteikumi vai nosacījumi, kas jāievēro, lai sasniegtu kādu konkrētu mērķi vai risinājumu. 
              Tas var attiekties uz programmatūras izstrādi, kur prasības norāda, kādām funkcijām, darbībām un īpašībām jābūt 
              konkrētai programmai vai sistēmai, lai tā apmierinātu lietotāju vajadzības vai uzņēmuma prasības.
            </p>
          </div>
        </div>

        <div className="question-box">
          <h2>Kas ir prasību specifikācija?</h2>
          <div className="answer-box">
            <p>
              Prasību specifikācija ir dokumentēts un detalizēts apraksts par prasībām, kas attiecas uz programmatūru, 
              sistēmu vai produktu. Tas ietver funkcionalitāti, kas jānodrošina, kā arī nosacījumus, pie kuriem ir jābūt 
              ievērotiem izstrādātājam vai komandai. Prasību specifikācija ir pamatdokuments, kas palīdz saprast, kas tieši jāizstrādā, 
              un kāda ir sagaidāmā rezultāta kvalitāte.
            </p>
          </div>
        </div>

        <div className="question-box">
          <h2>Un ar ko viena atšķirās no otras?</h2>
          <div className="answer-box">
            <p>
              - <strong>Prasības</strong> ir vispārējas un var ietvert dažādus mērķus vai uzdevumus.<br />
              - <strong>Prasību specifikācija</strong> ir konkrētāks dokuments, kas precīzi definē, ko tieši jāveic, kādas funkcijas jāievieš 
              un kādi ir kvalitātes standarti. Tas ir ļoti detalizēts un skaidrs apraksts par to, ko nepieciešams izstrādāt.
            </p>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
