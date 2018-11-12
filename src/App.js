import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';;

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <form>
            <div>
              <button className="back">{"<-"}</button>
            </div>
            <div>
              <input type="text" placeholder="Prop" />
            </div>
            <div>
              <input type="submit" value="Next" />
            </div>
            <div>ProgressBar</div>
          </form>
        </section>
      </main>
    );
  }
}

export default App;
