import { useState } from "react";
import { Button, Box, Heading } from "@chakra-ui/react";

function CounterUseState() {
  const [count, setCount] = useState(0);

  return (
    <Box padding='3' boxShadow='md' bg='gray.100' maxW='md'  mt='4'>
      <Heading as='h3'>Counter</Heading>
      <p>Count: {count}</p>
      <Button marginLeft='-1' marginTop='1' bg='gray.200' onClick ={() => setCount(count + 1)}>Increment</Button>
      <Button marginLeft='2' marginTop='1' bg='gray.200' onClick={() => setCount(count - 1)}>Decrement</Button>
      <Button marginLeft='2' marginTop='1' bg='gray.200' onClick={() => setCount(0)}>Reset</Button>
    </Box>
  );
}

export default CounterUseState;