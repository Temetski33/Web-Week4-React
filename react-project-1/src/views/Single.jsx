import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state;
  return (
  <>
    <h2>Single item</h2>
    {item && (
      <div>
        <div>{item.title}</div>
        <div>{item.description}</div>
        <div>{item.username}</div>
        {/* Jos kuva niin laitetaan kuva, jos video niin video */}
      </div>
    )}
  </>
  );
};

Single.propTypes = {};

export default Single;
