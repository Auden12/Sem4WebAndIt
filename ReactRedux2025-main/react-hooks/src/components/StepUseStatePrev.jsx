import { useState } from "react";
import { Button, Box, Heading } from "@chakra-ui/react";

function StepUseStatePrev() {
  const [step, setStep] = useState(0);

  const increment = () => {setStep((prev) => prev + 1);}
  const decrement = () => {setStep((prev) => prev - 1);}

  return (
    <Box padding='3' boxShadow='md' bg='gray.100' maxW='md'  mt='4'>
        <Heading as='h3'>Step</Heading>
      <p>Step: {step}</p>
      <Button marginLeft='-1' marginTop='1' bg='gray.200' onClick={increment}>Increment</Button>
      <Button marginLeft='2' marginTop='1' bg='gray.200' onClick={decrement}>Decrement</Button>
    </Box>
  );
}


export default StepUseStatePrev;