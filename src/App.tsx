import * as React from 'react';
import './App.css';

import { SearchPage } from 'src/SearchPage/pages/SearchPage';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          Data Portal
        </header>
        <SearchPage />
      </div>
    );
  }
}

export default App;
