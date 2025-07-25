import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Container, FormContainer, FormTitle, LogoContainer, PeopleTrainingImage, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png"

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <PeopleTrainingImage 
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="cover"
        />

        <LogoContainer>
          <LogoSvg />
          <Title>
            Treine sua mente e seu cortpo
          </Title>
        </LogoContainer>

        <FormContainer>
          <FormTitle>
            Acesse sua conta
          </FormTitle>
          <Input placeholder="Nome" />

          <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" />

          <Input placeholder="Senha" secureTextEntry />

          <Button text="Acessar" />
        </FormContainer>

        <Button text="Criar conta" variant onPress={handleNewAccount} style={{ marginBottom: 41 }} />
      </Container>
    </KeyboardAwareScrollView>
  );
}