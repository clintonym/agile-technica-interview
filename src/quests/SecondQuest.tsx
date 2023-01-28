import * as React from "react"
import {Box, HStack, VStack} from "@chakra-ui/react";

export const SecondQuest = () => {
  return (
    <VStack
      alignItems="flex-start"
      spacing={4}
      w="full"
    >
      {/*TODO: Modify code below to set equal spaces in between these 3 boxes*/}
      {/*Code here*/}
      <HStack w="full" spacing={4}>
        <Box w={8} h={8} bg="tomato" />
        <Box w={8} h={8} bg="tomato" />
        <Box w={8} h={8} bg="tomato" />
      </HStack>
      {/*TODO: Modify code below to set these 3 boxes to align on the bottom*/}
      {/*Code here*/}
      <HStack w="full" spacing={4}>
        <Box w={4} h={4} bg="tomato" />
        <Box w={6} h={6} bg="tomato" />
        <Box w={8} h={8} bg="tomato" />
      </HStack>
    </VStack>
  );
};
