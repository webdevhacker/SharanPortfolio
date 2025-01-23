import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserIPinfo = () => {
//   const [ip, setIp] = useState('');
const [ipDetails, setIpDetails] = useState([]);
useEffect(() => { 
    axios.get('https://ipapi.co/json/').then((res) => { 
        setIpDetails(res.data); 
        // setLat(res.data.latitude); 
        // setLon(res.data.longitude); 
    }); 
}, [])
    return (
            <div className="bg-white max-w-4xl items-center align-middle shadow overflow-hidden sm:rounded-lg md:mx-auto mt-14 mb-28">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Informations
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Details and informations are based on your IP address.
        </p>
    </div>
    <div className="border-t border-gray-200">
        <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    IP Address
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.ip}
                </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    City
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.city}
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Region
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                {ipDetails.region}
                </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Country with code
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.country_name}, {ipDetails.country_calling_code}
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Postal Code
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.postal}
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Time Zone
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.timezone}
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Latitude
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.latitude}
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Longitude
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.longitude}
                </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    ASN
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.asn}
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Internet Service Provider(ISP)
                </dt>
                <dd className="mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                    {ipDetails.org}
                </dd>
            </div>
        </dl>
    </div>
</div>
        )
    }

export default UserIPinfo