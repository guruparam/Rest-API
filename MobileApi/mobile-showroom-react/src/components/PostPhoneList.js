// src/components/PostPhoneModel.js

import React, { useState } from 'react';
import axios from 'axios';

const PostPhoneModel = ({ onPostSuccess }) => {
  const [newPhoneModel, setNewPhoneModel] = useState({
    name: '',
    brand: '',
    price: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    setNewPhoneModel({
      ...newPhoneModel,
      [e.target.name]: e.target.value,
    });
  };

  const addPhoneModel = () => {
    axios.post('http://localhost:8000/api/phonemodels/', newPhoneModel)
      .then(response => {
        console.log('New phone model added:', response.data);
        // Invoke the callback function to notify the parent component
        onPostSuccess();
        // Clear the form after successful submission
        setNewPhoneModel({
          name: '',
          brand: '',
          price: '',
          quantity: '',
        });
      })
      .catch(error => {
        console.error('Error adding new phone model:', error);
      });
  };

  return (
    <div>
      <h2>Add New Phone Model</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={newPhoneModel.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Brand:
          <input type="text" name="brand" value={newPhoneModel.brand} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" value={newPhoneModel.price} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="text" name="quantity" value={newPhoneModel.quantity} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={addPhoneModel}>Add Phone Model</button>
      </form>
    </div>
  );
};

export default PostPhoneModel;
