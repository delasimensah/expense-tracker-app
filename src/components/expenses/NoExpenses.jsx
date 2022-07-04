import { Center, Text } from "native-base";

const NoExpenses = ({ text }) => {
  return (
    <Center flex={1}>
      <Text textTransform="capitalize" bold fontSize="sm">
        {text}
      </Text>
    </Center>
  );
};

export default NoExpenses;
