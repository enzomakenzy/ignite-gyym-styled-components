import { CardContainer, ExerciseCategory, ExerciseInfoContainer, ExerciseName, ExerciseTimer } from "./styles"

export function HistoryCard() {
  return (
    <CardContainer>
      <ExerciseInfoContainer>
        <ExerciseCategory>
          Costas
        </ExerciseCategory>
        
        <ExerciseName>
          Puxada frontal
        </ExerciseName>
      </ExerciseInfoContainer>

      <ExerciseTimer>
        08:56
      </ExerciseTimer>
    </CardContainer>
  )
}