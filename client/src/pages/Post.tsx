import React from 'react';
import styled from '@emotion/styled'
import house from '../assets/small-one-storey-house-medium.jpeg';


const Post = () => {
  return (
      <>
    <h2>Zufa Rentals</h2>
    <Img width="100%" alt='house' src={house}/>
    </>
  );
}

export default Post;

const Img = styled.img`
  color: turquoise;
`
