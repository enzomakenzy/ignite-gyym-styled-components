import { TouchableOpacityProps } from "react-native";
import { GroupButton, TextGroupButton } from "./styles";
import { useState } from "react";

interface Props extends TouchableOpacityProps {
  name: string;
  isActive: boolean;
}

export function Group({ name, isActive, ...rest }: Props) {
  const [ isPressable, setIsPressable ] = useState(false);
  
  return (
    <GroupButton
      isActive={isActive}
      isPressable={isPressable}
      onPressIn={() => setIsPressable(true)}
      onPressOut={() => setIsPressable(false)}
      { ...rest }
    >
      <TextGroupButton 
        isActive={isActive} 
        isPressable={isPressable}
        onPressIn={() => setIsPressable(true)}
        onPressOut={() => setIsPressable(false)}
      >
        {name}
      </TextGroupButton>
    </GroupButton>
  )
}