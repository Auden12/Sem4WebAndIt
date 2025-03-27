import React, { useState, createContext, useContext } from 'react';
import { Box } from '@chakra-ui/react';

// Create a Context for the user
const UserContext = createContext();

function IntroUseContext() {
    const [user, setUser] = useState({ name: 'John Doe' });

    return (
        <UserContext.Provider value={user}>
            <Dashboard />
        </UserContext.Provider>
    );
}

function Dashboard() {
    return (
        <Box padding='3' boxShadow='md' bg='gray.400' maxW='md'  mt='4'>
            <h1>Dashboard useContext</h1>
            <Sidebar />
        </Box>
    );
}

function Sidebar() {
    return (
         <Box padding='3' boxShadow='md' bg='gray.300' maxW='md'  mt='4'>
            <h2>Sidebar</h2>
            <Profile />
        </Box>
    );
}

function Profile() {
    // Use useContext to access the user from context
    const user = useContext(UserContext);

    return (
         <Box padding='3' boxShadow='md' bg='gray.100' maxW='md'  mt='4'>
            <h2>Profile</h2>
            <p>User Name: {user.name}</p>
        </Box>
    );
}

export default IntroUseContext;
