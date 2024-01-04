import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetPhoneModel() {
    const [phoneModels, setPhoneModels] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
      try {
          const response = await axios.get('http://localhost:8000/api/phonemodels/');
          const data = (response.data);
          setPhoneModels(data);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
      }
  }

  useEffect(() => {
    fetchData();
}, []);

    return (
          <div>{
                phoneModels.map((model) => (
                  <div className='flex-con' key={model.id}>
                    <div>
                      <img src={model.image} alt={model.name}></img>
                      <div>
                        <p>{model.name}</p>
                        <p>{model.price}</p>
                      <br></br> 
                      <button className='button-buy'>Buy</button>
                      </div>
                      
                    </div>
                  </div>
              ))
              }                 
          </div>
    );
}

export default GetPhoneModel;