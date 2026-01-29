import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import isPropValid from '@emotion/is-prop-valid';

const riseUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const PageWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  min-height: 70vh;
  background: white;
`;

const HeroSection = styled.div`
  width: 100%;
  min-height: 400px;
  background: #F5F6F8;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  /* Premium grain texture effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 1;
    mix-blend-mode: overlay;
  }
  
  @media (max-width: 968px) {
    min-height: 350px;
  }
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 80px 120px 130px;
  position: relative;
  animation: ${riseUp} 1s ease-out;
  
  @media (max-width: 968px) {
    padding: 80px 40px 80px 60px;
  }
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const HeroMainTitle = styled.h1`
  font-family: 'Pretendard', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: #111111;
  margin: 0 0 32px 0;
  max-width: 640px;
  text-align: left;
  position: relative;
  padding-left: 32px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 70px;
    background: rgba(17, 17, 17, 0.12);
  }
  
  @media (max-width: 1200px) {
    font-size: 3.2rem;
    
    &::before {
      height: 60px;
    }
  }
  
  @media (max-width: 968px) {
    font-size: 2.6rem;
    margin-bottom: 28px;
    padding-left: 24px;
    
    &::before {
      height: 50px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    padding-left: 20px;
    
    &::before {
      height: 40px;
    }
  }
`;

const HeroAccentLine = styled.div`
  display: none;
`;

const HeroSubTitle = styled.h2`
  font-family: 'Pretendard', 'Inter', -apple-system, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.6;
  color: #111111;
  opacity: 0.7;
  margin: 0;
  max-width: 640px;
  text-align: left;
  padding-left: 32px;
  animation: ${riseUp} 1s ease-out 0.2s backwards;
  
  @media (max-width: 1200px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 968px) {
    font-size: 1rem;
    padding-left: 24px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding-left: 20px;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
`;

const CurvedArrowSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: -45px;
  width: 100%;
  height: 60px;
  opacity: 0.85;
  
  @media (max-width: 768px) {
    height: 40px;
    bottom: -30px;
  }
`;

const MainTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 20px;
  line-height: 1.3;
  animation: ${riseUp} 1s ease-out;
  position: relative;
  z-index: 1;
  color: #2C3E50;
  font-family: 'Montserrat', 'Pretendard', -apple-system, sans-serif;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 4px;
  }
`;

const SubTitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  font-weight: 500;
  letter-spacing: 2px;
  font-style: italic;
  animation: ${riseUp} 1s ease-out 0.3s backwards;
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
  text-transform: capitalize;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const AccentLine = styled.div`
  width: 150px;
  height: 4px;
  background: #17B7A6;
  margin: 0 auto;
  border-radius: 2px;
  animation: ${riseUp} 1s ease-out 0.5s backwards;
  position: relative;
  z-index: 1;
`;

const AchievementSection = styled.section`
  padding: 60px 20px;
  background: rgba(23, 183, 166, 0.03);
`;

const AchievementContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 380px;
    margin: 0 auto;
  }
`;

const AchievementCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  border: 2px solid rgba(23, 183, 166, 0.15);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 24px rgba(23, 183, 166, 0.12);
    border-color: #17B7A6;
  }
  
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .label {
    font-size: 1rem;
    color: #000000;
    font-weight: 500;
    line-height: 1.4;
  }
`;

const TabContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px 60px;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 50px;
`;

const Tab = styled('button', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== '$active',
})<{ $active: boolean }>`
  flex: 1;
  padding: 20px 32px;
  background: ${props => props.$active 
    ? 'rgba(23, 183, 166, 0.08)'
    : 'none'};
  border: none;
  font-size: 1.25rem;
  font-weight: ${props => props.$active ? '700' : '500'};
  color: ${props => props.$active ? '#17B7A6' : '#888'};
  border-bottom: ${props => props.$active ? `4px solid #17B7A6` : '2px solid transparent'};
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  border-radius: ${props => props.$active ? '8px 8px 0 0' : '0'};
  box-shadow: ${props => props.$active ? '0 -2px 10px rgba(23, 183, 166, 0.1)' : 'none'};
  
  &:hover {
    color: #17B7A6;
    background: rgba(23, 183, 166, 0.05);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    padding: 18px 22px;
  }
`;

const TabContent = styled.div`
  padding: 20px 0;
  line-height: 1.9;
  color: #333;
  animation: ${riseUp} 0.5s ease-out;
`;

const Section = styled.div`
  margin-bottom: 35px;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  margin-bottom: 24px;
  color: #333;
  line-height: 1.9;
`;

const IntroSubtitle = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #17B7A6;
  margin-bottom: 28px;
  line-height: 1.6;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const IntroParagraph = styled.p`
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 16px;
  
  strong {
    font-weight: 700;
    color: #17B7A6;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IntroQuote = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #17B7A6;
  margin: 28px 0;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const FacilityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FacilityItem = styled.li`
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s;
  
  &:hover {
    padding-left: 10px;
    border-left: 3px solid #17B7A6;
  }
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const FacilityName = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
`;

const FacilityDesc = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  line-height: 1.7;
`;

const LocationInfo = styled.div`
  margin-bottom: 20px;
  padding: 18px 24px;
  background: #fafafa;
  border-radius: 8px;
  border-left: 4px solid #17B7A6;
  transition: all 0.3s;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const InfoLabel = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 6px;
  font-weight: 600;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

const InfoText = styled.div`
  font-size: 1.05rem;
  color: #1a1a1a;
  font-weight: 500;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const MapContainer = styled.div`
  margin-top: 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  iframe {
    display: block;
  }
`;

const FacilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
`;

const FacilityCard = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 48px;
  display: grid;
  grid-template-columns: 45% 55%;
  min-height: 420px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #17B7A6;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const FacilityTextContent = styled.div`
  padding: 48px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 968px) {
    padding: 32px 24px;
  }
`;

const FacilityNumber = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 2px;
  margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif;
`;

const FacilityTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  line-height: 1.3;
  letter-spacing: -0.5px;
`;

const FacilityDescription = styled.p`
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.75;
  margin-bottom: 32px;
  max-width: 90%;
  
  @media (max-width: 968px) {
    max-width: 100%;
  }
`;



const FacilityImageWrapper = styled.div`
  width: 100%;
  padding-top: 75%; /* 4:3 비율 (3/4 = 0.75 = 75%) */
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// 새로운 Facility 섹션 스타일
const FacilitySection = styled.div`
  margin-bottom: 80px;
  
  &:last-child {
    margin-bottom: 40px;
  }
`;

const FacilitySectionHeader = styled.div`
  margin-bottom: 32px;
`;

const FacilitySectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
`;

const FacilitySectionDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
`;

interface FacilityImageGridProps {
  columns: number;
}

const FacilityImageGrid = styled.div<FacilityImageGridProps>`
  display: grid;
  grid-template-columns: ${props => props.columns === 1 ? '1fr' : '1fr 1fr'};
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const FacilityImage = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const FacilityImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
`;

const LocationSection = styled.div`
  margin-top: 20px;
`;

// SNS Section Styles
const SNSSection = styled.div`
  margin-top: 80px;
  padding: 60px 40px;
  background: white;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 60px;
  }
`;

const SNSSectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 40px;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #17B7A6;
    margin: 15px auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SNSGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SNSCard = styled.a`
  background: #F5F6F8;
  padding: 40px 30px;
  border-radius: 12px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #E0E2E6;
    background: #FAFBFC;
  }
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const SNSIcon = styled.div`
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const SNSTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SNSDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
  min-height: 48px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-height: auto;
  }
`;

const SNSButton = styled.span`
  font-size: 0.95rem;
  color: #17B7A6;
  font-weight: 600;
  transition: color 0.2s ease;
  
  ${SNSCard}:hover & {
    color: #0E8F84;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const About: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('info');
  
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'guide') {
      setActiveTab('info');
    } else if (hash === 'facilities') {
      setActiveTab('facility');
    } else if (hash === 'location') {
      setActiveTab('location');
    }
    
    // 탭 전환 후 스크롤
    if (hash) {
      setTimeout(() => {
        const tabContainer = document.querySelector('[data-tab-container]');
        if (tabContainer) {
          tabContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <PageWrapper>
      <HeroSection>
        <HeroContent>
          <HeroMainTitle>
            SLOW AND STEADY<br />
            WINS THE RACE.
          </HeroMainTitle>
          <HeroAccentLine />
          <HeroSubTitle>Progress, not pressure.</HeroSubTitle>
        </HeroContent>
      </HeroSection>

      <TabContainer data-tab-container>
        <TabList>
          <Tab $active={activeTab === 'info'} onClick={() => setActiveTab('info')}>
            학원안내
          </Tab>
          <Tab $active={activeTab === 'facility'} onClick={() => setActiveTab('facility')}>
            학원시설
          </Tab>
          <Tab $active={activeTab === 'location'} onClick={() => setActiveTab('location')}>
            찾아오는 길
          </Tab>
        </TabList>

        {activeTab === 'info' && (
          <TabContent>
            <Section>
              <IntroSubtitle>Progress, not pressure</IntroSubtitle>
              
              <IntroParagraph>
                레벨미업은 학생을 몰아붙이기보다, <strong>흔들리지 않는 실력의 리듬</strong>을 먼저 만듭니다.<br />
                빠른 성적보다 중요한 건, 매일의 루틴이 쌓여 결국 결과가 되는 구조입니다.
              </IntroParagraph>
              
              <IntroParagraph>
                우리는 '감으로 하는 공부'가 아니라,<br />
                핵심 개념을 단단히 정리하고 기준을 세운 뒤,<br />
                실전 훈련으로 완성되는 학습 흐름을 만들어갑니다.
              </IntroParagraph>
              
              <IntroParagraph>
                단순히 문제를 많이 푸는 것이 아니라,<br />
                학생이 스스로 성장할 수 있는 공부의 구조를 갖추도록 돕겠습니다.
              </IntroParagraph>
              
              <IntroQuote>
                Slow and steady wins the race.<br />
                그 문장은 레벨미업의 방식이자 약속입니다.
              </IntroQuote>
            </Section>
          </TabContent>
        )}

        {activeTab === 'facility' && (
          <TabContent>
            <FacilityContainer>
              {/* 1. 강의실 + 명예의 전당 - 2장 한 줄 */}
              <FacilitySection>
                <FacilitySectionHeader>
                  <FacilitySectionTitle>강의실 / 명예의 전당</FacilitySectionTitle>
                  <FacilitySectionDescription>
                    과목별 전용 강의실과 학생들의 성적 향상 및 합격 소식을 게시하는 성과 보드
                  </FacilitySectionDescription>
                </FacilitySectionHeader>
                <FacilityImageGrid columns={2}>
                  <FacilityImage>
                    <img src="/images/facility/classroom-new.png" alt="강의실" />
                    <FacilityImageCaption>강의실</FacilityImageCaption>
                  </FacilityImage>
                  <FacilityImage>
                    <img src="/images/facility/hall-of-fame.jpg" alt="명예의 전당" />
                    <FacilityImageCaption>명예의 전당 (성적 게시)</FacilityImageCaption>
                  </FacilityImage>
                </FacilityImageGrid>
              </FacilitySection>

              {/* 2. 자습관 섹션 - 2장 */}
              <FacilitySection>
                <FacilitySectionHeader>
                  <FacilitySectionTitle>자습관 (1관 / 2관)</FacilitySectionTitle>
                  <FacilitySectionDescription>
                    혼자 공부해도 흐트러지지 않는 관리형 자습 공간으로, 1관과 2관으로 구성되어 있습니다
                  </FacilitySectionDescription>
                </FacilitySectionHeader>
                <FacilityImageGrid columns={2}>
                  <FacilityImage>
                    <img src="/images/facility/study-room-1.jpg" alt="자습관 1관" />
                    <FacilityImageCaption>자습관 1관</FacilityImageCaption>
                  </FacilityImage>
                  <FacilityImage>
                    <img src="/images/facility/study-room-2.jpg" alt="자습관 2관" />
                    <FacilityImageCaption>자습관 2관</FacilityImageCaption>
                  </FacilityImage>
                </FacilityImageGrid>
              </FacilitySection>

              {/* 3. 테스트실 섹션 - 2장 */}
              <FacilitySection>
                <FacilitySectionHeader>
                  <FacilitySectionTitle>테스트실</FacilitySectionTitle>
                  <FacilitySectionDescription>
                    데일리 테스트, ICC, 모의고사를 진행하는 집중 평가 공간입니다
                  </FacilitySectionDescription>
                </FacilitySectionHeader>
                <FacilityImageGrid columns={2}>
                  <FacilityImage>
                    <img src="/images/facility/test-room-daily.jpg" alt="데일리 테스트실" />
                    <FacilityImageCaption>데일리 테스트</FacilityImageCaption>
                  </FacilityImage>
                  <FacilityImage>
                    <img src="/images/facility/test-room-mock.jpg" alt="모의고사실" />
                    <FacilityImageCaption>모의고사</FacilityImageCaption>
                  </FacilityImage>
                </FacilityImageGrid>
              </FacilitySection>
            </FacilityContainer>
          </TabContent>
        )}

        {activeTab === 'location' && (
          <TabContent>
            <LocationGrid>
              <LocationInfo>
                <InfoLabel>주소</InfoLabel>
                <InfoText>경기도 부천시 길주로 275 중동프라자 6층</InfoText>
              </LocationInfo>
              <LocationInfo>
                <InfoLabel>위치</InfoLabel>
                <InfoText>신중동역 4번 출구 인근</InfoText>
              </LocationInfo>
            </LocationGrid>
            <MapContainer>
              {/* 구글맵 iframe - 마커 포함 */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8!2d126.7648558!3d37.5025873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2z6rK96riw64-EIOu2gOyynOyLnCDquLjso7zroZwgMjc1!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
                width="100%"
                height="450"
                style={{
                  border: 'none',
                  borderRadius: '12px'
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="레벨미업 학원 위치"
              />
              
              {/* 지도 버튼들 */}
              <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="https://map.naver.com/p/search/%EB%A0%88%EB%B2%A8%EB%AF%B8%EC%97%85%20%ED%95%99%EC%9B%90" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'inline-block',
                    padding: '14px 28px',
                    background: '#17B7A6',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontFamily: 'Pretendard, Noto Sans KR, sans-serif',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 12px rgba(23, 183, 166, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(23, 183, 166, 0.35)';
                    e.currentTarget.style.background = '#0E8F84';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(23, 183, 166, 0.25)';
                    e.currentTarget.style.background = '#17B7A6';
                  }}
                >
                  🗺️ 네이버 지도
                </a>
                <a 
                  href="https://map.kakao.com/link/map/레벨미업학원,37.5025873,126.7648558" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'inline-block',
                    padding: '14px 28px',
                    background: '#17B7A6',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontFamily: 'Pretendard, Noto Sans KR, sans-serif',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 12px rgba(23, 183, 166, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(23, 183, 166, 0.35)';
                    e.currentTarget.style.background = '#0E8F84';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(23, 183, 166, 0.25)';
                    e.currentTarget.style.background = '#17B7A6';
                  }}
                >
                  🗺️ 카카오맵
                </a>
              </div>
            </MapContainer>
            
            {/* 바운스 애니메이션 키프레임 추가 */}
            <style>
              {`
                @keyframes bounce {
                  0%, 100% {
                    transform: translate(-50%, -100%) translateY(0);
                  }
                  50% {
                    transform: translate(-50%, -100%) translateY(-10px);
                  }
                }
              `}
            </style>
          </TabContent>
        )}
      </TabContainer>

      <SNSSection>
        <SNSSectionTitle>레벨미업 SNS</SNSSectionTitle>
        <SNSGrid>
          <SNSCard href="https://blog.naver.com/levelmeup" target="_blank" rel="noopener noreferrer">
            <SNSIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="5" fill="#03C75A"/>
                <path d="M7.5 6h3v5.5l3.5-5.5h3v12h-3v-5.5L10.5 18h-3V6z" fill="white"/>
              </svg>
            </SNSIcon>
            <SNSTitle>레벨미업 블로그</SNSTitle>
            <SNSDescription>
              블로그에서 학교별 지필 분석·내신 자료·특강 소식을 확인하세요.
            </SNSDescription>
            <SNSButton>
              블로그 바로가기 ↗
            </SNSButton>
          </SNSCard>

          <SNSCard href="https://www.instagram.com/levelme__up/" target="_blank" rel="noopener noreferrer">
            <SNSIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#FED576'}} />
                    <stop offset="25%" style={{stopColor: '#F47133'}} />
                    <stop offset="50%" style={{stopColor: '#BC3081'}} />
                    <stop offset="75%" style={{stopColor: '#4C63D2'}} />
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="6" fill="url(#instagramGradient)"/>
                <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                <rect x="6" y="6" width="12" height="12" rx="3" stroke="white" strokeWidth="1.5" fill="none"/>
              </svg>
            </SNSIcon>
            <SNSTitle>레벨미업 인스타그램</SNSTitle>
            <SNSDescription>
              인스타에서 학원 이벤트·학원 소식·공지 내용을 확인하세요.
            </SNSDescription>
            <SNSButton>
              인스타그램 바로가기 ↗
            </SNSButton>
          </SNSCard>
        </SNSGrid>
      </SNSSection>
    </PageWrapper>
  );
};

export default About;
