import React, { useState } from 'react';
import { Input, Button, FormLabel, Box } from '@chakra-ui/react';

function SimpleFormUseState() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };

    return (
        <Box padding='4' bg='gray.300' maxW='md' mt='4'>
        <form onSubmit={handleSubmit}>         
            <div>
                <FormLabel>Name:</FormLabel>
                <Input bg='gray.100' mt='2'
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div>
                <FormLabel>Email:</FormLabel>
                <Input bg='gray.100' mt='2'
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <Button padding='4' marginTop='2' type="submit">Submit</Button>
        </form>
        </Box>
    );
}

export default SimpleFormUseState;
