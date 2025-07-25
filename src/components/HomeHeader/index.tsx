import { Container, HelloText, InfoUserContainer, LogoutButton, LogoutIcon, UserImage } from "./styles";
import { Image } from "react-native";

export function HomeHeader() {
  return (
    <Container>
      <UserImage 
        source={{ uri: "https://github.com/enzomakenzy.png" }}
        alt="Imagem de Usuário"
      />

      <InfoUserContainer>
        <HelloText>
          Olá,
        </HelloText>
        <HelloText>
          Enzo
        </HelloText>
      </InfoUserContainer>

      <LogoutButton>
        <LogoutIcon name="logout" />
      </LogoutButton>
    </Container>
  )
}