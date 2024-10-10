'use client';
import styled from 'styled-components';
import BgIntro from '@/assets/images/bgIntro.jpg';

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
  min-height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const LoginSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;

  @media (min-width: 768px) {
    height: auto;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const OAuthProvidersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 1rem;
  font-size: 3rem;
  color: #116c74;
  transition: color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #00a9c1;
  }

  &:active {
    color: #116c74;
  }
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const PageDescription = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: #404040;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const IntroSection = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(${BgIntro.src});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    box-shadow: -8px 0 10px rgba(150, 150, 150, 0.5);
  }
`;

export const DividerWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const DividerIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  opacity: 0.4;
  color: #116c74;
`;

export const DividerText = styled.span`
  font-weight: 500;
  margin: 0 0.5rem;
  color: #116c74;
`;
