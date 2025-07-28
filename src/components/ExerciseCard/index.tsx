import { CardContainer, ExerciseImage, ExerciseInfo, ExerciseName, ExerciseRepetitions, RightIcon } from "./styles";

export function ExerciseCard() {
  return (
    <CardContainer>
      <ExerciseImage 
        source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg" }}
        alt="Imagem do exercício"
      />

      <ExerciseInfo>
        <ExerciseName>
          Remada unilateral
        </ExerciseName>

        <ExerciseRepetitions numberOfLines={2}>
          3 séries x 12 repetições
        </ExerciseRepetitions>
      </ExerciseInfo>

      <RightIcon name="right" />
    </CardContainer>
  );
}