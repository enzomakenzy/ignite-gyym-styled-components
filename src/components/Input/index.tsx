import { useState } from "react";
import { TextInputProps } from "react-native"

import { GymInput, TextError } from "./styles"

type Props = TextInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null ,...rest }: Props) {
  const [ isFocused, setIsFocused ] = useState(false); 
  const isInvalid = errorMessage != null;

  return (
    <>
      <GymInput 
        {...rest} 
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isInvalid={isInvalid}
      />
    
      <TextError>
        {isInvalid ? errorMessage : null}
      </TextError>
    </>
  )
}