import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  InputLeftElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import React from "react";

const CustomInput = ({ props }) => {
  const { type, icon, label, required, isInvalid } = props || {};
  switch (type) {
    case "text":
      return (
        <FormControl
          {...props?.formControlStyle}
          isInvalid={isInvalid}
          isRequired={required}
        >
          <FormLabel color="deep-gray" fontSize="0.9rem" fontWeight="400">
            {label}
          </FormLabel>
          <InputGroup>
            {/* <InputLeftElement pointerEvents="none">{icon}</InputLeftElement> */}
            <Input variant={`brandPrimary`} {...props}></Input>
          </InputGroup>
        </FormControl>
      );
    case "number":
      return (
        <FormControl {...props?.formControlStyle} isRequired={required}>
          <FormLabel color="deep-gray" fontSize="0.9rem" fontWeight="400">
            {label}
          </FormLabel>
          <InputGroup>
            {/* <InputLeftElement pointerEvents="none">{icon}</InputLeftElement> */}
            <NumberInput w="100%" variant={`brandPrimary`} {...props}>
              <NumberInputField />
            </NumberInput>
          </InputGroup>
        </FormControl>
      );
    case "select":
      return (
        <FormControl {...props?.formControlStyle} isRequired={required}>
          <FormLabel color="deep-gray" fontSize="0.9rem" fontWeight="400">
            {label}
          </FormLabel>
          <InputGroup>
            <Select variant={`brandPrimary`} {...props}>
              {props?.options.map((item) => {
                return <option value={item.value}>{item.label}</option>;
              })}
            </Select>
          </InputGroup>
        </FormControl>
      );
    case "date":
      return (
        <FormControl {...props?.formControlStyle} isRequired={required}>
          <FormLabel color="deep-gray" fontSize="0.9rem" fontWeight="400">
            {label}
          </FormLabel>
          <InputGroup>
            {/* <InputLeftElement pointerEvents="none">{icon}</InputLeftElement> */}
            <Input
              variant={`brandPrimary`}
              type="datetime-local"
              {...props}
            ></Input>
          </InputGroup>
        </FormControl>
      );
    default:
      return (
        <FormControl {...props?.formControlStyle} isRequired={required}>
          <FormLabel color="deep-gray" fontSize="0.9rem" fontWeight="400">
            {label}
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
            <Input variant={`brandPrimary`} {...props}></Input>
          </InputGroup>
        </FormControl>
      );
  }
};

export default CustomInput;
