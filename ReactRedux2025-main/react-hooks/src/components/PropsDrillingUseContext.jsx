import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

function PropsDrillingUseContext() {
    const [user, setUser] = useState({ name: 'John Doe' });
    return <Dashboard user={user} />;
}

function Dashboard({ user }) {
    return (
        <Box padding='3' boxShadow='md' bg='gray.400' maxW='md'  mt='4'>
            <h1>Dashboard PropsDrilling</h1>
            <Sidebar user={user} />
        </Box>
    );
}

function Sidebar({ user }) {
    return (
        <Box padding='3' boxShadow='md' bg='gray.300' maxW='md'  mt='4'>
            <h2>Sidebar</h2>
            <Profile user={user} />
        </Box>
    );
}

function Profile({ user }) {
    return (
        <Box padding='3' boxShadow='md' bg='gray.100' maxW='md'  mt='4'>
            <h2>Profile</h2>
            <p>User Name: {user.name}</p>
        </Box>
    );
}

export default PropsDrillingUseContext;
