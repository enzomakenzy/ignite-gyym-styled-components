import { Alert } from "react-native";

import { Container, FormContainer, FormTitle, LogoContainer, PeopleTrainingImage, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png"

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "src/services/api";
import axios from "axios";


type FormDataProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const signUpFormSchema = z.object({
    name: z.string({ error: "Informe o nome" }),
    email: z.email({ error: "Informe o e-mail" }),
    password: z.string({error: "Informe a senha." }).min(6, "A senha deve ter pelo menos 6 digitos"),
    passwordConfirm: z.string({ error: "Confirme a sua senha." }).min(6, "A senha deve ter pelo menos 6 digitos")
  }).refine(({ password, passwordConfirm }) => password === passwordConfirm, {
      error: "As senhas não coincidem",
      path: ["passwordConfirm"]
  });

type SignUpFormData = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema)
  });

  function handleNewAccount() {
    navigation.goBack();
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      const response = await api.post("/users", { name, email, password })
      console.log(response.status)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert(error.response?.data.message);
      }
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
            Criar sua conta
          </FormTitle>
          <Controller 
            control={control}
            name="name"
            render={(({ field: { onChange, value } }) => (
              <Input 
                placeholder="Nome" 
                value={value}
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            ))}
          />

          <Controller 
            control={control}
            name="email"
            render={(({ field: { onChange, value } }) => (
              <Input 
                placeholder="E-mail" 
                keyboardType="email-address" 
                autoCapitalize="none" 
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            ))}
          />

          <Controller 
            control={control}
            name="password"
            render={(({ field: { onChange, value } }) => (
              <Input 
                placeholder="Senha" 
                secureTextEntry 
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            ))}
          />

          <Controller 
            control={control}
            name="passwordConfirm"
            render={(({ field: { onChange, value } }) => (
              <Input 
                placeholder="Confirme a senha" 
                secureTextEntry 
                value={value}
                onChangeText={onChange}
                errorMessage={errors.passwordConfirm?.message}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
              />
            ))}
          />

          <Button text="Criar" onPress={handleSubmit(handleSignUp)} />
        </FormContainer>

        <Button text="Voltar para login" variant onPress={handleNewAccount} style={{ marginBottom: 41 }} />
      </Container>
    </KeyboardAwareScrollView>
  );
}