import "./App.css";
import React from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import sampleSimpson from "./data";

function App() {
  const [quoteList, setQuoteList] = React.useState(sampleSimpson);

  const getSimpson = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setQuoteList(data);
      });
  };

  return (
    <div className="App">
      {quoteList.map((quote, index) => (
        <QuoteCard key={index} {...quote} />
      ))}
      <button type="button" onClick={getSimpson}>
        Get Simpsons
      </button>
    </div>
  );
}

export default App;
