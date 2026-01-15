import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
  min-height: 480px;
  background: linear-gradient(135deg, #0a1628 0%, #0f1b2a 50%, #1a2332 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(23, 183, 166, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(23, 183, 166, 0.02) 0%, transparent 50%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.015;
    pointer-events: none;
  }
  
  @media (max-width: 968px) {
    min-height: 320px;
    padding: 60px 20px;
  }
  
  @media (max-width: 768px) {
    min-height: 280px;
    padding: 50px 16px;
  }
`;

const HeroContent = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${riseUp} 1s ease-out;
`;

const HeroMainTitle = styled.h1`
  font-family: 'Cinzel', 'Playfair Display', 'Cormorant Garamond', serif;
  font-size: 4.2rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.25;
  color: #F5F7FA;
  margin: 0 0 36px 0;
  text-transform: uppercase;
  
  @media (max-width: 1200px) {
    font-size: 3.6rem;
  }
  
  @media (max-width: 968px) {
    font-size: 2.8rem;
    margin-bottom: 28px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 0.04em;
    margin-bottom: 24px;
  }
`;

const HeroAccentLine = styled.div`
  width: 120px;
  height: 3px;
  background: #17B7A6;
  margin: 0 auto 36px;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(23, 183, 166, 0.4), 0 0 20px rgba(23, 183, 166, 0.2);
  animation: ${riseUp} 1s ease-out 0.2s backwards;
  
  @media (max-width: 968px) {
    width: 100px;
    margin-bottom: 28px;
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 2px;
    margin-bottom: 24px;
  }
`;

const HeroSubTitle = styled.h2`
  font-family: 'Montserrat', 'Inter', 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #D7DEE7;
  margin: 0;
  animation: ${riseUp} 1s ease-out 0.3s backwards;
  
  @media (max-width: 1200px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 968px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    letter-spacing: 0;
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

const Tab = styled.button<{ $active: boolean }>`
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
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #17B7A6;
  margin-bottom: 24px;
  line-height: 1.6;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
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

const FacilityDetailButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #18B7A6;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  width: fit-content;
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #0E8F86;
    gap: 12px;
    
    &::after {
      transform: translateX(4px);
    }
  }
`;

const FacilityImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @media (max-width: 968px) {
    height: 280px;
  }
`;

const LocationSection = styled.div`
  margin-top: 20px;
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
              <IntroSubtitle>우리가 추구하는 교육 철학</IntroSubtitle>
              
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
              <FacilityCard>
                <FacilityImageWrapper>
                  <img src="/images/classroom/1.png" alt="강의실" />
                </FacilityImageWrapper>
                <FacilityTextContent>
                  <FacilityNumber>01</FacilityNumber>
                  <FacilityTitle>강의실</FacilityTitle>
                  <FacilityDescription>
                    국어·영어·수학·과학 과목별 전용 강의실로 구성되어, 과목 특성에 맞는 수업 환경을 제공합니다
                  </FacilityDescription>
                  <FacilityDetailButton to="/facility/classroom">View details</FacilityDetailButton>
                </FacilityTextContent>
              </FacilityCard>

              <FacilityCard>
                <FacilityImageWrapper>
                  <img src="/images/facility-study-room.jpg" alt="자습관" />
                </FacilityImageWrapper>
                <FacilityTextContent>
                  <FacilityNumber>02</FacilityNumber>
                  <FacilityTitle>자습관</FacilityTitle>
                  <FacilityDescription>
                    빈 시간에 자유롭게 이용하는 스터디카페형 자습 공간
                  </FacilityDescription>
                  <FacilityDetailButton to="/facility/study-room">View details</FacilityDetailButton>
                </FacilityTextContent>
              </FacilityCard>

              <FacilityCard>
                <FacilityImageWrapper>
                  <img src="/images/facility-test-room.jpg" alt="테스트실" />
                </FacilityImageWrapper>
                <FacilityTextContent>
                  <FacilityNumber>03</FacilityNumber>
                  <FacilityTitle>테스트실</FacilityTitle>
                  <FacilityDescription>
                    모의고사, 데일리 테스트, ICC를 진행하는 집중 평가 공간
                  </FacilityDescription>
                  <FacilityDetailButton to="/facility/test-room">View details</FacilityDetailButton>
                </FacilityTextContent>
              </FacilityCard>

              <FacilityCard>
                <FacilityImageWrapper>
                  <img src="/images/facility-lounge.jpg" alt="라운지" />
                </FacilityImageWrapper>
                <FacilityTextContent>
                  <FacilityNumber>04</FacilityNumber>
                  <FacilityTitle>라운지</FacilityTitle>
                  <FacilityDescription>
                    휴식과 자유 학습이 모두 가능한 공용 공간
                  </FacilityDescription>
                  <FacilityDetailButton to="/facility/lounge">View details</FacilityDetailButton>
                </FacilityTextContent>
              </FacilityCard>

              <FacilityCard>
                <FacilityImageWrapper>
                  <img src="/images/facility-lobby.jpg" alt="로비" />
                </FacilityImageWrapper>
                <FacilityTextContent>
                  <FacilityNumber>05</FacilityNumber>
                  <FacilityTitle>로비</FacilityTitle>
                  <FacilityDescription>
                    학원의 첫인상이자 주요 안내와 성과를 확인할 수 있는 공간
                  </FacilityDescription>
                  <FacilityDetailButton to="/facility/lobby">View details</FacilityDetailButton>
                </FacilityTextContent>
              </FacilityCard>
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
    </PageWrapper>
  );
};

export default About;
