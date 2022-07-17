import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
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
