import React, { Component } from 'react';
import CharacterList from './CharacterList'
import HeroList from './HeroList'
import SquadStats from './SquadStats'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>SuperSquad</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <CharacterList />
                        </div>
                        <div className="col-md-4">
                            <HeroList />
                        </div>
                        <div className="col-md-4">
                            <SquadStats />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;