import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import './css/App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import {items, ammunition, weapons, lookup} from './data/data';
import {Availability, Category, Database, Item} from "./data/types";

interface Props {}
interface State {
  gridApi: any;
  setGridApi: any;
  gridColumnApi: any;
  setGridColumnApi: any;
  rowData: RowData[];
  setRowData: RowData[];
  
  lookup: Database;
}

interface RowData {
  name: string;
  category: string;
  buyInfo: string;
  canCraft: JSX.Element|string;
  forageInstructions: string;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    const buildRowData: () => RowData[] = () => {
      const data: Item[] = [...items,...ammunition,...weapons];
      return data.map((v): RowData => {
        return {
          name: v.name,
          category: Category[v.category],
          buyInfo: v.buyInfo
            ? `${v.buyInfo.cost} crowns (${Availability[v.buyInfo.availability]})`
            : '-',
          canCraft: v.craftingRecipe
            ? <button/>
            : '-',
          forageInstructions: v.forageInstructions
            ? `${v.forageInstructions.location} DC ${v.forageInstructions.dc} (x${v.forageInstructions.quantity})`
            : '-'
        };
      });
    };
    
    let rowData: RowData[] = buildRowData();
    
    this.state = {
      gridApi: null,
      setGridApi: null,
      gridColumnApi: null,
      setGridColumnApi: null,
      rowData,
      setRowData: rowData,
      
      lookup,
    };    
  }
  
  render() {
    const defaultColDef = {
      resizable: true,
    };
    
    return (
      <div className="App">
        <div className="ag-theme-alpine" style={{ 
          height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0), 
          width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) 
        }}>
          <AgGridReact
            defaultColDef={defaultColDef}
            rowData={this.state.rowData}
            tooltipShowDelay={0}>
            <AgGridColumn field="name" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="category" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="buyInfo"></AgGridColumn>
            <AgGridColumn field="canCraft"></AgGridColumn>
            <AgGridColumn field="forageInstructions"></AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    );
  }
}
