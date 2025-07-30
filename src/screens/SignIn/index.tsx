import { Container, FormContainer, FormTitle, LogoContainer, PeopleTrainingImage, Title, ToSignUpContainer, ToSignUpTitle } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png"

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useForm, Controller } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "src/hooks/useAuth";
import { AppError } from "@screens/utils/AppError";

import Toast from "react-native-toast-message";

type FormDataProps = {
  email: string;
  password: string;
}

const signInFormSchema = z.object({
  email: z.email("Informe o e-mail"),
  password: z.string().nonempty("Informe a senha")
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignIn() {
  const { signIn } = useAuth();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema)
  });

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : "Não foi possível entrar. Tente novamente mais tarde";
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: title
      }) 
    }
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

          <Controller 
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input 
                placeholder="Email" 
                keyboardType="email-address" 
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input 
                placeholder="Senha" 
                secureTextEntry 
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />


          <Button text="Acessar" onPress={handleSubmit(handleSignIn)} />
        </FormContainer>

        <ToSignUpContainer>
          <ToSignUpTitle>
            Ainda não tem acesso?
          </ToSignUpTitle>

          <Button text="Criar conta" variant onPress={handleNewAccount} />
        </ToSignUpContainer>
      </Container>
    </KeyboardAwareScrollView>
  );
}