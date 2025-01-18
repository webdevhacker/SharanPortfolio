import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserIP = () => {
//   const [ip, setIp] = useState('');
const [ipDetails, setIpDetails] = useState([]);
useEffect(() => { 
    axios.get('https://ipapi.co/json/').then((res) => { 
        setIpDetails(res.data); 
        // setLat(res.data.latitude); 
        // setLon(res.data.longitude); 
    }); 
}, [])

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
    <div>
      <h1>Your IP Address is: {ipDetails.ip} ({ipDetails.city}, {ipDetails.region}, {ipDetails.country_name})</h1>
    </div>
  );
};

export default UserIP;
