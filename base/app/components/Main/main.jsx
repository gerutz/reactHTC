import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import MainBuscador from './MainBuscador';
import VideoBG from './VideoBG';

class MainComponent extends Component {
  constructor(props){
    super(props);
      this.state = {
      }
  }

  render(){
    return(
      <div style={styles.mainWrapper}>
          <MainBuscador />
      </div>

    );
  }
}//end MainComponent

const styles = {
  mainWrapper : {
    height: '600px',
    textAlign: 'center',
    width : '100%',
    backgroundColor : 'gray',
    color : 'white'
  }
}

export default Radium(MainComponent);
