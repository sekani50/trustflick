"use client";

import Select from "react-select";
import * as React from "react";
import {
  UseControllerProps,
  UseControllerReturn,
  useController,
  FieldValues,
} from "react-hook-form";

interface SelectProps<T extends FieldValues> extends UseControllerProps<T> {
  options: { value: string; label: string }[];
  error?: string;
  label?: string;
  placeHolder: string;
}
function ErrorText({ children }: { children?: string }) {
  return (
    <div>
      {children && <p className="pt-1 text-xs text-red-500 ">{children}</p>}
    </div>
  );
}

export const ReactSelect = React.forwardRef<
  HTMLSelectElement,
  SelectProps<FieldValues>
>((props, ref) => {
  const {
    label,
    options,
    error,
    placeHolder,
    defaultValue,
    ...controllerProps
  } = props;
  const {
    field: { onChange },
  } = useController(controllerProps) as UseControllerReturn<FieldValues>;

  return (
    <div className="w-full relative 3rem">
      <Select
        defaultValue={defaultValue}
        placeholder={placeHolder}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state?.isFocused ? "#ffffff" : "#ffffff",
            "&:hover": {
              borderColor: "#ffffff",
            },
            height: "3rem",
            color:"#ffffff",
            backgroundColor: "transparent",
            boxShadow: "0px",
            borderRadius: "6px",
          }),

          option: (baseStyles, state) => ({
            ...baseStyles,
            textAlign: "start",
            color: state?.isSelected ? "white" : "black",
            backgroundColor: state?.isFocused ? "#f1f5f9" : "",
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            textAlign: "start",
            textDecoration: "capitalize",
            color:"#ffffff",
            fontSize: "14px",
            padding: "4px",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            textAlign: "start",
            color: "#ffffff",
            fontSize: "14px",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "6px",
            zIndex: 100,
            fontSize: "14px",
          }),
          dropdownIndicator: (baseStyle) => ({
            ...baseStyle,
            borderRight: "0px",
          }),
          indicatorSeparator: (baseStyle) => ({
            ...baseStyle,
            width: "0px",
          }),
        }}
        options={options}
        onChange={(newValue) => onChange(newValue?.value)}
      />
      <ErrorText>{error}</ErrorText>
    </div>
  );
});
