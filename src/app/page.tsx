'use client';
import React, { useState, useEffect } from 'react';
import {
  MainContainer,
  LoginSection,
  FormWrapper,
  IntroSection,
  OAuthProvidersWrapper,
  PageTitle,
  PageDescription,
  IconWrapper,
  DividerWrapper,
  DividerIcon,
  DividerText,
} from './styles';
import {
  AiFillGoogleCircle,
  AiOutlineGithub,
  AiOutlineLine,
} from 'react-icons/ai';
import AuthForm from '@/components/AuthForm';
import { Spin } from 'antd';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando carregamento
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <MainContainer>
      {loading ? (
        <Spin
          size="large"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}
        />
      ) : (
        <>
          <LoginSection>
            <PageTitle>Seja bem-vindo!</PageTitle>
            <PageDescription>
              Estamos prontos para continuar sua jornada. Faça login para
              prosseguir.
            </PageDescription>
            <OAuthProvidersWrapper>
              <IconWrapper>
                <AiFillGoogleCircle />
              </IconWrapper>
              <IconWrapper>
                <AiOutlineGithub />
              </IconWrapper>
            </OAuthProvidersWrapper>
            <DividerWrapper>
              <DividerIcon>
                <AiOutlineLine />
              </DividerIcon>
              <DividerText>ou</DividerText>
              <DividerIcon>
                <AiOutlineLine />
              </DividerIcon>
            </DividerWrapper>
            <FormWrapper>
              <AuthForm />
            </FormWrapper>
          </LoginSection>
          <IntroSection>
            <h1>Bem-vindo!</h1>
          </IntroSection>
        </>
      )}
    </MainContainer>
  );
};

export default Home;
