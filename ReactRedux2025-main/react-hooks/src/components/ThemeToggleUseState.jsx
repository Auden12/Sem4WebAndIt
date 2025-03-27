import React, { useState } from 'react';
import { Box, Button, Container, Heading } from '@chakra-ui/react';

function ThemeToggleUseState() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (  
        <Box padding='3' maxW='md'  mt='4' style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
            <Heading as='h2'>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Heading>
            <Button onClick={toggleTheme}>Toggle Theme</Button>
        </Box>
       
    );
}

export default ThemeToggleUseState;
