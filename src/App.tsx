import * as React from "react"
import {
  ChakraProvider,
  VStack,
  theme, Center, Divider
} from "@chakra-ui/react";
import {FirstQuest} from "./quests/FirstQuest";
import {SecondQuest} from "./quests/SecondQuest";
import {ThirdQuest} from "./quests/ThirdQuest";

export const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <Center p={20}>
        <VStack
          alignItems="flex-start"
          spacing={8}
          w={{ base: "100vw", sm: "80vw", md: "50vw", lg: "30vw" }}
        >
          <FirstQuest />
          <Divider />

          <SecondQuest />
          <Divider />

          <ThirdQuest />
          <Divider />
        </VStack>
      </Center>
    </ChakraProvider>
  );
};
