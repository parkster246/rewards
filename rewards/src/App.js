import React,{useState, useEffect} from "react";
import fetch from './api/data'
import _ from 'lodash';
import ReactTable from 'react-table';
import './App.css';

function calculateResults(incomingData){
// calculate points per transaction
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const pointsPerTransaction = incomingData.map(transaction => {
  let points = 0;
  let over100 = transaction.amt - 100;
  let over50 = transaction.amt - 50
  if(over100 > 0){
    points += (over100 * 2);
  }
  if(over50 > 0){
    points += (over50);
  }
  const month = new Date(transaction.transactionDt).getMonth()
  return {...transaction,points, month}
})

}

function App() {
  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
