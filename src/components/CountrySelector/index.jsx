import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import React from "react";

export const CountrySelector = ({ value, handleOnchange, countri }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        Quốc gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnchange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countri.map((countri) => {
          return (
            <option value={countri.ISO2.toLowerCase()}>
              {countri.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Lua chon quoc gia</FormHelperText>
    </FormControl>
  );
};
