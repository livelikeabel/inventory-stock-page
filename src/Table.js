import React, { Component } from 'react';
import './Table.css';
import Header from './Header';
import MenuList from './MenuList';
import StockTable from './StockTable';

class Table extends Component {
  render() {
    return(
      <div className="table-template">
        ------- table ----------
        <div className="header">
            <Header/>
        </div>
        <div className="oneline">
          <div className="menulist">
              <MenuList/>
          </div>
          <div className="stockTable">
              <StockTable/>
          </div>
        </div>
        ------- table ----------
      </div>
    )
  }
};

export default Table;
