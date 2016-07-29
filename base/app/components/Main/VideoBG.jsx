import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class VideoBG extends Component {
  render(){
    return(
      <div style={styles.base}>
        <video autoplay loop id="videoHeader">
            <source src="../Assets/coder.mp4" />
        </video>
      </div>
    );
  }
}

const styles = {
  base : {
    float : "right",
    backgroundColor : "green",
    width : '100%',
    minHeight : '400px'
  }
}

export default Radium(VideoBG);
