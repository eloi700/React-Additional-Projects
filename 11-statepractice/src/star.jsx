import React from 'react';

function Star(props) {
  const likeIcon = props.isFilled ? '★' : '✩';

  return (
    // <div className='card_favorite-star' onClick={toggleLike}>
    //   {likeIcon}
    // </div>

    <div className='card_favorite-star' onClick={props.handleClick}>
      {likeIcon}
    </div>
  );
}

export default Star;
