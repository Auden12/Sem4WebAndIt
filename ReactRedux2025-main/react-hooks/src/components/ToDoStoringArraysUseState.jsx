import React, { useState } from 'react';
import { Box, Heading, Button, Input, ListItem, UnorderedList } from '@chakra-ui/react';

function ToDoStoringArraysUseState() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    };

    return (
        <Box padding='4' boxShadow='md' bg='gray.400' maxW='md'  mt='4'>
            <Heading as='h2'>Todo List</Heading>
            <Input bg='gray.100' mt='2' type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <Button marginLeft='-1' marginTop='2' bg='gray.200' onClick={addTodo}>Add Todo</Button>
            <UnorderedList>
                {todos.map((todo, index) => (
                    <ListItem i key={index}>{todo}</ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}

export default ToDoStoringArraysUseState;
