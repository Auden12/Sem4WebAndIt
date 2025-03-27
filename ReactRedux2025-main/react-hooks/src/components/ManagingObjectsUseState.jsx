import React, { useState } from 'react';
import { Box, Input, Heading } from '@chakra-ui/react';

function ManagingObjectsUseState() {
    const [profile, setProfile] = useState({ name: '', age: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <Box padding='4' boxShadow='md' bg='gray.400' maxW='md'  mt='4'>
            <Heading as='h3'>User Profile</Heading>
            <Input bg='gray.100' mt='2'
                type="text"
                name="name"
                placeholder="Name"
                value={profile.name}
                onChange={handleChange}
            />
            <Input bg='gray.100' mt='1'
                type="number"
                name="age"
                placeholder="Age"
                value={profile.age}
                onChange={handleChange}
            />
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </Box>
    );
}

export default ManagingObjectsUseState;
