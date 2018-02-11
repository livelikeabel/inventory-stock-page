import React,{ Component } from 'react';
import './StockTable.css';
import Stocks from './Stocks';

class StockTable extends Component {
    render() {
        return (
            <div className="stockTable">
                <div className="stocks">
                  <Stocks/>
                </div>
                <div className="stocks">
                  <Stocks/>
                </div>
                <div className="stocks">
                  <Stocks/>
                </div>
                <div className="stocks">
                  <Stocks/>
                </div>
                <div className="stocks">
                  <Stocks/>
                </div>
                <div className="stocks">
                  <Stocks/>
                </div>
                <div className="stocks">
                  <Stocks/>
                </div>
                <div className="stocks">
                  <Stocks/>
                </div>
                <div className="stocks">
                  <Stocks/>
                </div>
            </div>
        )
    }
};

export default StockTable;
