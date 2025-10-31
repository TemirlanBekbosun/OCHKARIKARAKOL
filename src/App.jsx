import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Phone, MessageCircle, MapPin, ArrowRightFromLine } from "lucide-react";
import logo from "./ochkarik_logo.jpg";
import backgroundImage from "./bg.jpg";

export default function OchkarikLanding() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+996552999111";
  };

  const handleWhatsApp = () => {
    window.open("http://wa.me/996552999111", "_blank");
  };

  const handleLocation = () => {
    window.open("https://go.2gis.com/KYNCe", "_blank");
  };

  return (
    <PageContainer>
      <BackgroundWrapper>
        <BackgroundImage src={backgroundImage} alt="sunset beach" />
        <GradientOverlay />

        <CloudLayer delay="0s" top="5%" duration="30s" />
        <CloudLayer delay="60s" top="20%" duration="10s" />
        <CloudLayer delay="120s" top="35%" duration="120s" />
        <CloudLayer delay="150s" top="3%" duration="50s" />
        <CloudLayer delay="160s" top="65%" duration="50s" />
        <CloudLayer delay="170s" top="95%" duration="50s" />
        <CloudLayer delay="180s" top="45%" duration="50s" />
      </BackgroundWrapper>

      <ContentWrapper>
        <LogoBlock>
          <LogoWrapper>
            <LogoImage src={logo} alt="ochkarik logo" />
          </LogoWrapper>

          <Username>Очки_Оптика</Username>
        </LogoBlock>

        <Title>Очки_Оптика</Title>

        <ToggleButton onClick={() => setShowButtons(!showButtons)}>
          <ToggleIcon $open={showButtons}>
            <ToggleLine />
            <ChevronShape $open={showButtons} />
            <ToggleLine />
          </ToggleIcon>
        </ToggleButton>

        <ButtonsContainer $show={showButtons}>
          <ActionButton
            onClick={handleWhatsApp}
            icon={<ArrowIcon size={30} strokeWidth={3} />}
            text="ЗАПИСАТЬСЯ НА ДИАГНОСТИКУ ЗРЕНИЯ"
            isPrimary
            order={0}
            isActive={showButtons}
          />

          <WaveDivider />

          <ActionButton
            onClick={handleCall}
            icon={<Phone size={22} strokeWidth={2} />}
            text="ПОЗВОНИТЕ НАМ"
            order={1}
            isActive={showButtons}
          />

          <ActionButton
            onClick={handleWhatsApp}
            icon={<MessageCircle size={22} strokeWidth={2} />}
            text="WHATSAPP"
            order={2}
            isActive={showButtons}
          />

          <ActionButton
            onClick={handleLocation}
            icon={<MapPin size={22} strokeWidth={2} />}
            text="ЛОКАЦИЯ"
            order={3}
            isActive={showButtons}
          />
        </ButtonsContainer>

        <FooterPlaceholder />
      </ContentWrapper>
    </PageContainer>
  );
}

function ActionButton({
  onClick,
  icon,
  text,
  isPrimary = false,
  order = 0,
  isActive = false,
}) {
  return (
    <ActionButtonWrapper
      onClick={onClick}
      $isPrimary={isPrimary}
      $order={order}
      $isActive={isActive}
    >
      <IconWrapper>{icon}</IconWrapper>
      <ButtonText>{text}</ButtonText>
    </ActionButtonWrapper>
  );
}

function ArrowIcon() {
  return (
    <ArrowIconStyled>
      <ArrowRightFromLine />
    </ArrowIconStyled>
  );
}

function WaveDivider() {
  return (
    <WaveDividerWrapper>
      <DividerLine />
      <DividerDot />
      <DividerLine />
    </WaveDividerWrapper>
  );
}

function CloudLayer({ delay, top, duration }) {
  return (
    <CloudLayerWrapper $duration={duration} $delay={delay} $top={top}>
      <CloudRow>
        <CloudSegment
          $width="112px"
          $height="64px"
          $background="rgba(255, 255, 255, 0.5)"
        />
        <CloudSegment
          $width="144px"
          $height="96px"
          $background="rgba(255, 255, 255, 0.6)"
          $marginLeft="-48px"
        />
        <CloudSegment
          $width="112px"
          $height="80px"
          $background="rgba(255, 255, 255, 0.5)"
          $marginLeft="-48px"
        />
        <CloudSegment
          $width="96px"
          $height="56px"
          $background="rgba(255, 255, 255, 0.4)"
          $marginLeft="-40px"
        />
        <CloudSegment
          $width="96px"
          $height="56px"
          $background="rgba(255, 255, 255, 0.4)"
          $marginLeft="-90px"
        />
        <CloudSegment
          $width="120px"
          $height="56px"
          $background="rgba(255, 255, 255, 0.4)"
          $marginLeft="-4px"
        />
        <CloudSegment
          $width="200px"
          $height="96px"
          $background="rgba(255, 255, 255, 0.4)"
          $marginLeft="0px"
        />
        <CloudSegment
          $width="96px"
          $height="56px"
          $background="rgba(255, 255, 255, 0.4)"
          $marginLeft="-20px"
        />
      </CloudRow>
    </CloudLayerWrapper>
  );
}

const float = keyframes`
  0% { transform: translateX(-200px) translateY(0px); }
  50% { transform: translateX(calc(50vw - 100px)) translateY(-15px); }
  100% { transform: translateX(calc(100vw + 200px)) translateY(0px); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const sheen = keyframes`
  0% {
    transform: translateX(-120%) skewX(-18deg);
    opacity: 0;
  }
  40% {
    opacity: 0.4;
  }
  100% {
    transform: translateX(120%) skewX(-18deg);
    opacity: 0;
  }
`;

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
  filter: brightness(1.15) saturate(1.25);
  transform: scale(1.02);
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
`;

const LogoBlock = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const Username = styled.p`
  color: white;
  text-align: center;
  font-size: 14px;
  margin-top: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const Title = styled.h1`
  color: white;
  font-size: clamp(24px, 5vw, 36px);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`;

const ToggleButton = styled.button`
  margin-bottom: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 0.5rem;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ToggleIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 140px;

  ${({ $open }) =>
    !$open &&
    css`
      animation: ${bounce} 2s infinite;
    `}
`;

const ToggleLine = styled.span`
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.7)
  );
`;

const ChevronShape = styled.span`
  width: 14px;
  height: 14px;
  border-right: 2px solid rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
  transform: ${({ $open }) => ($open ? "rotate(225deg)" : "rotate(45deg)")};
  transition: transform 0.35s ease;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: ${({ $show }) => ($show ? "translateY(0)" : "translateY(-2rem)")};
  max-height: ${({ $show }) => ($show ? "500px" : "0")};
  overflow: hidden;
  pointer-events: ${({ $show }) => ($show ? "all" : "none")};
`;

const FooterPlaceholder = styled.div`
  position: fixed;
  bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActionButtonWrapper = styled.button`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 56px;
  background: ${({ $isPrimary }) =>
    $isPrimary
      ? "linear-gradient(135deg, rgba(212, 182, 110, 0.9), rgba(197, 172, 92, 0.55))"
      : "linear-gradient(135deg, rgba(197, 172, 92, 0.55), rgba(180, 152, 74, 0.45))"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  padding: 1rem 3.75rem 1rem 4.5rem;
  border-radius: 5px;
  border: none;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background-size: 200% 100%;

  &::before {
    content: "";
    position: absolute;
    inset: -10% 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0.55) 50%,
      rgba(255, 255, 255, 0) 75%
    );
    opacity: 0;
    transform: translateX(-110%);
    pointer-events: none;
    animation: ${sheen} 4.5s ease-in-out infinite;
    animation-delay: ${({ $order }) => $order * 0.85}s;
    animation-play-state: ${({ $isActive }) =>
      $isActive ? "running" : "paused"};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.18);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
  }

  @media (max-width: 480px) {
    padding: 0.85rem 3rem 0.75rem 4rem;
  }

  &:hover {
    opacity: 0.95;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
  }

  &:hover::after {
    opacity: 0.35;
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

const ButtonText = styled.span`
  pointer-events: none;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.3;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 15.5px;
    letter-spacing: 0.8px;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 1.5rem;
  display: flex;
  align-items: center;
  svg {
    width: 36px;
    height: 36px;
    stroke-width: 1;
  }

  @media (max-width: 480px) {
    left: 1.15rem;
    svg {
      width: 32px;
      height: 32px;
      stroke-width: 1;
    }
  }
`;

const ArrowIconStyled = styled.span`
  font-size: 24px;
  font-weight: 300;
  line-height: 1;
`;

const WaveDividerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0.75rem 0;
`;

const DividerLine = styled.span`
  flex: 1;
  max-width: 140px;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.6)
  );
`;

const DividerDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.65);
  background: rgba(255, 255, 255, 0.15);
`;

const CloudLayerWrapper = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  left: -200px;
  opacity: 0.16;
  animation: ${float} ${({ $duration }) => $duration} linear infinite;
  animation-delay: ${({ $delay }) => $delay};
  will-change: transform;
`;

const CloudRow = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CloudSegment = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background: ${({ $background }) => $background};
  border-radius: 50%;
  filter: blur(20px);
  margin-left: ${({ $marginLeft }) => $marginLeft || "0"};
`;
