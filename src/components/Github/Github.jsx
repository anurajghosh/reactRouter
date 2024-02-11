import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/anurajghosh')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className='text-center m-4 bg-orange-400 text-black p-4 text-3xl'>
      Github: {data.followers}
      <img
        className='rounded-full ml-10'
        src={data.avatar_url}
        alt='git pic'
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/anurajghosh');
  return response.json();
};
