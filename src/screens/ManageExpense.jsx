import { useState, useLayoutEffect } from "react";
import {
  Box,
  FormControl,
  HStack,
  VStack,
  Input,
  Button,
  TextArea,
} from "native-base";
import DatePicker from "react-native-modern-datepicker";
import moment from "moment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { colors } from "../theme/colors";

// components
import { Screen } from "../components";

const ManageExpense = ({ navigation, route }) => {
  const expenseId = route.params?.expenseId;
  const expenses = useSelector((state) => state.expenses.expenses);

  const selectedExpense = expenses.find((expense) => expense.id === expenseId);

  const [date, setDate] = useState(
    selectedExpense
      ? moment(selectedExpense.date).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD")
  );

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        amount: selectedExpense ? selectedExpense.amount.toString() : "",
        description: selectedExpense ? selectedExpense.description : "",
      },
      validationSchema: Yup.object({
        amount: Yup.string().required("Amount is required"),
        description: Yup.string().required("Description is required"),
      }),
      onSubmit: (values) => {
        console.log({ ...values, date: new Date(date) });
      },
    });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? "Edit Expense" : "Add Expense",

      headerRight: () => {
        return (
          <Button
            onPress={() => navigation.goBack()}
            variant={"link"}
            _text={{
              color: "red.600",
              fontSize: "md",
            }}
          >
            Cancel
          </Button>
        );
      },
    });
  }, [navigation, expenseId]);

  return (
    <Screen>
      <VStack space={6}>
        <VStack space={1}>
          <HStack space={3}>
            <Box flex={1}>
              <FormControl
                isRequired
                isInvalid={touched.amount && errors.amount}
              >
                <FormControl.Label>Amount</FormControl.Label>

                <Input
                  keyboardType="decimal-pad"
                  value={values.amount}
                  onChangeText={handleChange("amount")}
                  onBlur={handleBlur("amount")}
                />

                {touched.amount && errors.amount && (
                  <FormControl.ErrorMessage>
                    {errors.amount}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            </Box>

            <Box flex={1}>
              <FormControl isRequired>
                <FormControl.Label>Date</FormControl.Label>

                <Input isReadOnly value={date} />
              </FormControl>
            </Box>
          </HStack>

          <FormControl
            isRequired
            isInvalid={touched.description && errors.description}
          >
            <FormControl.Label>Description</FormControl.Label>

            <TextArea
              numberOfLines={4}
              isInvalid={touched.description && errors.description}
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
            />

            {touched.description && errors.description && (
              <FormControl.ErrorMessage>
                {errors.description}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        </VStack>

        <HStack space={1}>
          <Box flex={1}>
            <Button
              backgroundColor="brand.primary"
              onPress={handleSubmit}
              // isLoading
            >
              {expenseId ? "Update" : "Add"}
            </Button>
          </Box>

          {expenseId && (
            <Box flex={1}>
              <Button
                borderColor="error.500"
                _text={{ color: "error.500" }}
                variant="outline"
                // isLoading
                _spinner={{
                  color: "error.500",
                }}
              >
                Delete Expense
              </Button>
            </Box>
          )}
        </HStack>

        <Box width="100%">
          <DatePicker
            options={{
              textHeaderColor: colors.brand.primary,
              textDefaultColor: "#000",
              selectedTextColor: "#fff",
              mainColor: colors.brand.primary,
              textSecondaryColor: "#000",
            }}
            onSelectedChange={(date) => setDate(date)}
            selected={date}
            mode="calendar"
          />
        </Box>
      </VStack>
    </Screen>
  );
};

export default ManageExpense;
