'use client'
import React from 'react';
import { motion } from 'framer-motion';
// Assuming these are the correct import paths for your Card and Text components
import { Card, Text } from '@radix-ui/themes'; // Adjust this import based on your actual package

interface ITitleBar{
  name: string

}

const TitleBar = ({name}:ITitleBar) => {
  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div style={{ 
        height: 60, 
     // Change to your desired background color
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <Text as="div" color="gray" size="2" style={{ 
            color: 'white', // Adjust text color as needed
            fontSize: '20px', // Adjust font size as needed
            fontWeight: 'bold', // Make text bold
          }}>
        {name}
        </Text>
      </motion.div>
    </div>
  );
}

export default TitleBar;
