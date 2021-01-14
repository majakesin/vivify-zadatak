import React, {useState } from 'react';
import PropTypes from 'prop-types';


const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
 
  
  
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};



const StarRating = ({ rating }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  const [star,setStarValue] = useState();
 
  function clickOnStar(value) {
    setStarValue(value);
    console.log(star);
    document.getElementsByClassName("fa fa-star-o fa-lg").className +="color_change";

  }
  /*<button  onClick={()=>{clickOnStar(1)}}><i className="fa fa-star-o fa-lg"   style={styles.star}></i></button>
            <button className="button button-sm"  onClick={()=>{clickOnStar(2)}}><i className="fa fa-star-o fa-lg"  style={styles.star}></i></button>
            <button  className="button buttonn-sm"  onClick={()=>{clickOnStar(3)}}><i className="fa fa-star-o fa-lg"  style={styles.star}></i></button>
            <button className="button button-sm" onClick={()=>{clickOnStar(4)}}><i className="fa fa-star-o fa-lg"  style={styles.star}></i></button>
            <button className="button-sm"  onClick={()=>{clickOnStar(5)}}><i className="fa fa-star-o fa-lg"  style={styles.star}></i></button>
          </div>
          To je bila ideja ali nisam stigla
          */ 

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
        <div style={styles.starsEmptyInner}>
          <div style={styles.starsOuter}>
        <i className="fa fa-star-o fa-lg"   style={styles.star}></i>
        <i className="fa fa-star-o fa-lg"   style={styles.star}></i>
        <i className="fa fa-star-o fa-lg"   style={styles.star}></i>
        <i className="fa fa-star-o fa-lg"   style={styles.star}></i>
        <i className="fa fa-star-o fa-lg"   style={styles.star}></i>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
