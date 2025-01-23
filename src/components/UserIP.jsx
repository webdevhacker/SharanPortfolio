import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const UserIP = () => {
//   const [ip, setIp] = useState('');
// const [ipDetails, setIpDetails] = useState([]);
// useEffect(() => { 
//     axios.get('https://ipapi.co/json/').then((res) => { 
//         setIpDetails(res.data); 
//         // setLat(res.data.latitude); 
//         // setLon(res.data.longitude); 
//     }); 
// }, [])

//   useEffect(() => {
//     const fetchIP = async () => {
//       try {
//         const response = await axios.get('https://api.ipify.org?format=json');
//         setIp(response.data.ip);
//       } catch (error) {
//         console.error('Error fetching the IP address:', error);
//       }
//     };

//     fetchIP();
//   }, []);

  return (
    <div className='flex items-center text-center'>
      <p className=' text-red-500 font-light'><Link to='/useripinfo'>Click to know your IP Address </Link></p>
    </div>
  );
};

export default UserIP;
