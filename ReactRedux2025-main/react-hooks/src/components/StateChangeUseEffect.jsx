import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';

function StateChangeUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // Effect runs whenever "count" changes

    return (
       <Box padding='3' boxShadow='md' bg='gray.300' maxW='md'  mt='4'>
            <p>Count: {count}</p>
            <Button bg='gray.100' onClick={() => setCount(count + 1)}>Increment</Button>
        </Box>
    );
}

export default StateChangeUseEffect;
