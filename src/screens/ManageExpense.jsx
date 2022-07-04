import { useState, useRef } from "react";
import {
  Box,
  FormControl,
  HStack,
  Input,
  Pressable,
  Button,
  TextArea,
} from "native-base";
import DatePicker from "react-native-modern-datepicker";
import moment from "moment";
import { colors } from "../theme/colors";

// components
import { Screen } from "../components";

const ManageExpense = () => {
  const [date, setDate] = useState("YYYY-MM-DD");
  const [showPicker, setShowPicker] = useState(false);

  // moment(new Date()).format("YYYY-MM-DD")
  const handleChange = (selectedDate) => {
    setDate(selectedDate);
    // setShowPicker(false);
    // if (showPicker) {
    //   setShowPicker(!showPicker);
    // }
    console.log("runs");
  };

  return (
    <Screen>
      <Box>
        <HStack space={3}>
          <Box flex={1}>
            <FormControl>
              <FormControl.Label>Amount</FormControl.Label>
              <Input type="number" />
            </FormControl>
          </Box>

          <Box flex={1}>
            <FormControl>
              <FormControl.Label>Date</FormControl.Label>
              <Pressable onPress={() => console.log("pressed")}>
                <Input placeholder="YYYY-MM-DD" isReadOnly value={date} />
              </Pressable>
            </FormControl>
          </Box>
        </HStack>

        <FormControl>
          <FormControl.Label>Description</FormControl.Label>

          <TextArea />
        </FormControl>
      </Box>
    </Screen>
  );
};

export default ManageExpense;

{
  /* {showPicker && (
          <Box
            position="absolute"
            top={10}
            width="100%"
            height={10}
            bgColor="amber.400"
          >
            <DatePicker
              options={{
                textHeaderColor: colors.brand.primary,
                textDefaultColor: "#000",
                selectedTextColor: "#fff",
                mainColor: colors.brand.primary,
                textSecondaryColor: "#000",
              }}
              onSelectedChange={handleChange}
              current={date}
              selected={date}
              mode="calendar"
            />
          </Box>
        )} */
}
