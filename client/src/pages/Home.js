import React, {useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import axios from 'axios';

const Home = () => {
const [quote, setquote] = useState("loading...") 
function getQuote() {
  const options = {
    method: 'GET',
    url: 'https://world-of-quotes.p.rapidapi.com/v1/quotes/quote-of-the-day',
   
    headers: {
      'X-RapidAPI-Key': '6744f82751mshc3605f6521c8a9cp1ebe17jsn36d4d832059b',
      'X-RapidAPI-Host': 'world-of-quotes.p.rapidapi.com'
    }
  };
  console.log("line19hit");
   axios.request(options).then(function (response) {
     const quotesoftheday = response.data.quote
    console.log(response.data);
    setquote(quotesoftheday)
  }).catch(function (error) {
    console.error(error);
  });
}

useEffect(
  getQuote, 
  []
) ;


console.log("check");


console.log("line25hit");

  return (
    <div className="container">
      

      <div class="box">
  <img src="https://imgix.bustle.com/rehost/2017/8/21/d82f3279-8ae5-47cb-8ed0-bef83fd34033.jpg" alt="An open book" width="1200" height="500" />
  <div class="shade"></div>
  <j>THIS IS WHERE I'M GONNA PUT 
    <br />SOMETHING NICE TO SAY</j>
</div>
      <br />
      <br /><center>
      <CategoryMenu />
      </center>
      <br />
      <br />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;