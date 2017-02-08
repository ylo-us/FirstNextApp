import React from 'react';
import { connect } from 'react-redux';

export default ({ number, name, img }) => {
  return (
    <div>
      <h1>Favorite</h1>
      <div>
      	{number}
      </div>
    </div>
  )
}