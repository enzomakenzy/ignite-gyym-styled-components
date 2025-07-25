import { useState } from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Container } from "./styles";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
  const [groups, setGroups] = useState<string[]>(["Costas", "Bíceps", "Tríceps", "Ombro"]);
  const [exercises, setExercises] = useState(["Puxada frontal", "Remada curvada", "Remada unilateral", "Levantamento terra", "1", "2", "3", "4"]);
  const [groupSelected, setGroupSelected] = useState("costas");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenExerciseDetails = () => {
    navigation.navigate("exercise");
  }

  return (
    <Container>
      <HomeHeader />
    </Container>
  );
}