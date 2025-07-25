import { useState } from "react";
import { TextInputProps } from "react-native"

import { GymInput } from "./styles"

export function Input({ ...rest }: TextInputProps) {
  const [ isFocused, setIsFocused ] = useState(false); 

  return (
    <GymInput 
      {...rest} 
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}