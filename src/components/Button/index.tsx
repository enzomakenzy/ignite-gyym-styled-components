import { TouchableOpacityProps } from "react-native";
import { GymButton, TextGymButton } from "./styles";
import { useState } from "react";

type Props = TouchableOpacityProps & {
  text: string
  variant?: boolean
}

export function Button({ text, variant = false,...rest }: Props) {
  const [ isPressable, setIsPressable ] = useState(false);

  return (
    <GymButton 
      {...rest}
      isVariant={variant}
      isPressable={isPressable}
      onPressIn={() => setIsPressable(true)}
      onPressOut={() => setIsPressable(false)}
    >
      <TextGymButton isVariant={variant}>{text}</TextGymButton>
    </GymButton>
  )
}