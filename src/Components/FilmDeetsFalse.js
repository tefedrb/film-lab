import React from 'react';
import Subscriptions from '@material-ui/icons/Subscriptions';

function FilmDeetsFalse(){
    return (
        <div className="film-detail">
          <div style={{marginRight: "5px"}}><Subscriptions /></div>
          <span>No film selected!</span>
        </div>
    )
}

export default FilmDeetsFalse;