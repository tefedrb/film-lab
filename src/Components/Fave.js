import React, {Component} from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

class Fave extends Component {

  handleClick(e){
    console.log("handling fave click")
  }
  render(){
    return (
      <div onClick={this.handleClick} className="film-row-fave add_to_queue">
        <AddToQueueIcon />
      </div>
    )
  }
}

export default Fave;
