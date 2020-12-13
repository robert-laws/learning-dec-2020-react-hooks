import React from 'react';
import { useFetch } from './useFetch';

const GetData = ({ login }) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

export default GetData;
