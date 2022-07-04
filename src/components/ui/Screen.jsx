import { Box } from "native-base";

const Screen = ({ children }) => {
  return (
    <Box flex={1} px={6} pt={6}>
      {children}
    </Box>
  );
};

export default Screen;
