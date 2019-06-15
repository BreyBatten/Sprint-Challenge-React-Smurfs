import React from 'react';
import Axios from 'axios';

const Smurf = props => {

  const deleteSmurf = () => {
    Axios.delete(`http://localhost:3333/smurfs/${props.id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="delete-btn" onClick={deleteSmurf}>Delete Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

