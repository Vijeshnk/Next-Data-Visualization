'use client'
import React, { useEffect, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import axios from 'axios'; // Import Axios

interface StateCountProps {
  title: string;
}

const StateCountApi = ({ title }: StateCountProps) => {
    const [targetCount, setTargetCount] = useState(0); // Initialize targetCount state
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        // Use Axios to fetch the data from the API
        axios.get('https://65e07458d3db23f762495651.mockapi.io/myapi/eitems')
            .then(response => {
                // Set targetCount to the length of the returned array
                setTargetCount(response.data.length);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        // Animate count to the new targetCount
        const controls = animate(count, targetCount, { duration: 2 });

        return controls.stop;
    }, [targetCount]); // This effect depends on targetCount

    return (
        <motion.div className="flex flex-col items-center justify-center h-full">
            <motion.span initial={{ color: 'white' }} animate={{ color: 'white' }} className="text-4xl font-bold">
                {rounded}
            </motion.span>
            <motion.span initial={{ color: 'white' }} animate={{ color: 'white' }} className="font-bold text-2xl mb-1">
                {title}
            </motion.span>
        </motion.div>
    );
}

export default StateCountApi;
