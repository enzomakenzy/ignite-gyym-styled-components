import { ScreenHeader } from "@components/ScreenHeader";
import { Container, HeaderList, ListEmptyText } from "./styles";
import { useState } from "react";
import { SectionList } from "react-native";
import { HistoryCard } from "@components/HistoryCard";

interface ExerciseProps {
  title: string;
  data: string[];
}

export function History() {
  const [exercises, setExercises] = useState<ExerciseProps[]>([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Remada unilateral", "Risotto"]
    },
    {
      title: "27.08.22",
      data: ["Puxada frontal"]
    }
  ]);

  return (
    <Container>
      <ScreenHeader title="Histório de Exercícios" />

      <SectionList 
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <HeaderList>
            {section.title}
          </HeaderList>
        )}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: "center", alignItems: "center" }}
        ListEmptyComponent={() => (
          <ListEmptyText>
            Não há exercícios registrados ainda. {"\n"}
            Vamos fazer exercícios hoje?
          </ListEmptyText>
        )}
        style={{ paddingHorizontal: 16 }}
      />
    </Container>
  );
}