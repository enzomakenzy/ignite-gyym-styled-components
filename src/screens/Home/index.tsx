import { useState } from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Container, ExercisesContainer, HeadingExercises, TitleExercise, CounterExercise } from "./styles";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

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

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group 
            name={item}
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 22 }}
        style={{ maxHeight: 48, marginVertical: 26 }}
      />

      <ExercisesContainer>
        <HeadingExercises>
          <TitleExercise>
            Exercícios
          </TitleExercise>

          <CounterExercise>
            {exercises.length}
          </CounterExercise>
        </HeadingExercises>

        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </ExercisesContainer>
    </Container>
  );
}