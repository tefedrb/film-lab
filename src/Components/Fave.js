import React from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

function Fave(props){
    const handleClick = (e) => {
      e.stopPropagation();
      props.onFaveToggle()
    }

    const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue';
    return (
      <div onClick={handleClick} className={`film-row-fave ${isFave}`}>
        <AddToQueueIcon />
      </div>
    )
}

export default Fave;
