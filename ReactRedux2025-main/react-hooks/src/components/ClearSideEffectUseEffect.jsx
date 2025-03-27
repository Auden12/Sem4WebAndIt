import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';


function ClearSideEffectUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup function to clear the timer
        return () => clearInterval(timer);
    }, []); // Empty dependency array means this effect runs once

    return  <Box padding='3' boxShadow='md' bg='gray.100' maxW='md'  mt='4'>Count: {count}</Box>;
}

export default ClearSideEffectUseEffect;