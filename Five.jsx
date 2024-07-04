//implementaion of fetching data from api
import React, { useEffect, useState } from 'react';

const Five = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setData(json.products));
  }, []);

  return (
    <div>
      {data ? (
        data.map(product => (
          <h2 key={product.id}>{product.title}</h2>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Five;
