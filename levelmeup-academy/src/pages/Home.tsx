import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import { colors, gradients } from '../theme';
import HeroCarousel from '../components/HeroCarousel';

const HomeWrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

const explosiveEntry = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Hero = styled.section`
  position: relative;
  color: white;
  padding: 0;
  text-align: center;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, 
    rgba(0,0,0,0.6) 0%, 
    rgba(0,0,0,0.3) 50%, 
    rgba(0,0,0,0.6) 100%);
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 4;
  padding: 40px 20px;
`;

const LogoText = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.text.primary};
  letter-spacing: 12px;
  text-align: center;
  margin-bottom: 60px;
  text-transform: uppercase;
  opacity: 0.65;
  animation: ${explosiveEntry} 0.8s ease backwards;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    letter-spacing: 8px;
    margin-bottom: 50px;
  }
`;

const EpicTitle = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 20px;
  color: ${colors.text.primary};
  font-weight: 700;
  letter-spacing: -1px;
  animation: ${explosiveEntry} 1s ease 0.2s backwards;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.05rem;
  margin-bottom: 60px;
  color: ${colors.text.secondary};
  font-weight: 400;
  animation: ${explosiveEntry} 1s ease 0.4s backwards;
  letter-spacing: 1px;
  text-align: center;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 50px;
  }
`;

const AchievementBadges = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 60px auto 60px;
  max-width: 720px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 380px;
    gap: 20px;
  }
`;

const Badge = styled.div<{ delay?: string }>`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 32px 24px;
  animation: ${explosiveEntry} 0.8s ease ${props => props.delay || '0s'} backwards;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  text-align: center;
  border: 1px solid rgba(0,0,0,0.08);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 24px rgba(0,0,0,0.2);
    border-color: rgba(0,0,0,0.12);
  }
  
  .number {
    font-size: 2.2rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 10px;
    letter-spacing: -0.5px;
  }
  
  .label {
    font-size: 0.9rem;
    color: #000000;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${gradients.greenButton};
  color: ${colors.text.primary};
  padding: 16px 40px;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  border: none;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(76, 175, 80, 0.5);
    background: linear-gradient(135deg, ${colors.green.hover} 0%, ${colors.green.primary} 100%);
  }
  
  @media (max-width: 768px) {
    padding: 14px 32px;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background: ${colors.navy.dark};
  color: ${colors.text.primary};
  padding: 16px 40px;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.2);
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${colors.navy.medium};
    transform: translateY(-2px);
    border-color: rgba(255,255,255,0.3);
  }
  
  @media (max-width: 768px) {
    padding: 14px 32px;
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  
  &:nth-of-type(even) {
    background: white;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #1a1a1a;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 5px;
    background: linear-gradient(135deg, #4CAF50 0%, #FF6D00 100%);
    margin: 20px auto 0;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

const CardIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const Feature = styled.div`
  text-align: center;
`;

const FeatureIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  display: block;
  filter: drop-shadow(0 4px 10px rgba(13, 71, 161, 0.2));
`;

const FeatureTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #1a1a1a;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 50%, #FF6D00 100%);
  color: white;
  padding: 100px 20px;
  margin: 80px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '🏆🎓📚✨💯🌟';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 5rem;
    opacity: 0.08;
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    padding: 40px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  background: linear-gradient(135deg, #fff 0%, #66BB6A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

// 배너 이미지 카드 섹션 스타일
const BannerSection = styled.section`
  padding: 80px 20px;
  background: white;
`;

const BannerCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

const BannerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  &:hover > a > div:first-of-type {
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  }
  
  &:hover span {
    background: ${colors.green.hover};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
`;

const BannerCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  overflow: hidden;
  background: #f5f5f5;
`;

const BannerCardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const BannerCardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const BannerCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const BannerCardButton = styled.span`
  color: white;
  background: ${colors.green.primary};
  padding: 12px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 2px solid ${colors.green.primary};
  
  &:hover {
    background: ${colors.green.hover};
    border-color: ${colors.green.hover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
  
  &::after {
    content: '→';
    font-size: 1.2rem;
  }
`;



// 브랜딩 헤드라인 섹션
const BrandingSection = styled.section`
  padding: 80px 20px 60px;
  background: #F7F9FB;
  text-align: center;
`;

const HeadlineContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const MainHeadline = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #0F1E2E;
  margin-bottom: 0;
  letter-spacing: 0.5px;
  line-height: 1.2;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: ${colors.green.primary};
    margin: 16px auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 0.3px;
    
    &::after {
      width: 50px;
      margin-top: 12px;
    }
  }
`;

const SubHeadline = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${colors.green.primary};
  margin: 20px 0 0;
  letter-spacing: 0.2px;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-top: 16px;
  }
`;

// 개설학교 섹션
const SchoolsSection = styled.div<{ $variant?: 'high' | 'middle' }>`
  margin-top: 60px;
  padding: 50px 40px;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #E8EEF3;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const SchoolsTitleLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${colors.green.primary};
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const SchoolsTitle = styled.h3`
  font-size: 1.9rem;
  text-align: center;
  margin-bottom: 16px;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const SchoolsSubtitle = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #8B95A1;
  margin-bottom: 40px;
  font-weight: 400;
`;

const SchoolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

const SchoolBadge = styled(Link)`
  background: #FFFFFF;
  color: #2d2d2d;
  padding: 22px 18px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  border: 1.5px solid #E8EEF3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 70px;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(46, 74, 111, 0.15);
    border-color: ${colors.green.primary};
    color: ${colors.green.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 16px 14px;
    min-height: 60px;
  }
`;

const SchoolsDescription = styled.p`
  margin-top: 60px;
  padding: 30px;
  text-align: center;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #555;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 24px 20px;
    margin-top: 40px;
    white-space: normal;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      {/* 메인 슬라이드 캐러셀 */}
      <HeroCarousel />

      {/* 배너 이미지 카드 섹션 */}
      <BannerSection>
        <Container>
          <BannerCardsGrid>
            <BannerCardWrapper>
              <BannerCardLink to="/core-study">
                <BannerCardImageContainer>
                  <BannerCardImage src="/images/banner-core-study.png" alt="2026-1학기 중간대비 코어자습" />
                </BannerCardImageContainer>
                <BannerCardContent>
                  <BannerCardButton>자세히 보기</BannerCardButton>
                </BannerCardContent>
              </BannerCardLink>
            </BannerCardWrapper>
            
            <BannerCardWrapper>
              <BannerCardLink to="/high3-guide">
                <BannerCardImageContainer>
                  <BannerCardImage 
                    src="/images/banner-high3.jpg" 
                    alt="고3 수능 정규·특강"
                    style={{ objectFit: 'contain', background: '#EAF3FF', transform: 'scale(1.005)', objectPosition: 'center' }}
                  />
                </BannerCardImageContainer>
                <BannerCardContent>
                  <BannerCardButton>자세히 보기</BannerCardButton>
                </BannerCardContent>
              </BannerCardLink>
            </BannerCardWrapper>
            
            <BannerCardWrapper>
              <BannerCardLink to="/winter-school">
                <BannerCardImageContainer>
                  <BannerCardImage src="/images/banner-winter-school-new.jpg" alt="겨울방학 윈터스쿨" />
                </BannerCardImageContainer>
                <BannerCardContent>
                  <BannerCardButton>자세히 보기</BannerCardButton>
                </BannerCardContent>
              </BannerCardLink>
            </BannerCardWrapper>
          </BannerCardsGrid>
        </Container>
      </BannerSection>

      {/* 브랜딩 헤드라인 및 개설학교 섹션 */}
      <BrandingSection id="schools">
        <Container>
          <HeadlineContainer>
            <MainHeadline>LEVEL ME UP</MainHeadline>
            <SubHeadline>부천 내신, 학교별로 전략이 달라야 합니다.</SubHeadline>
            <SchoolsDescription style={{ marginTop: '20px', marginBottom: '40px' }}>
              레벨미업은 부천 지역 다수 학교의 내신 분석을 바탕으로, 학교별 맞춤 내신과 수준별 수능 커리큘럼을 함께 설계합니다.
            </SchoolsDescription>
          </HeadlineContainer>
          
          <SchoolsSection id="schools-high" $variant="high">
            <SchoolsTitleLabel>LEVEL ME UP</SchoolsTitleLabel>
            <SchoolsTitle>부천 고등학교 맞춤 커리큘럼</SchoolsTitle>
            <SchoolsSubtitle style={{ marginTop: '16px', marginBottom: '30px', color: '#666' }}>
              학교 이름을 클릭하면 해당 고등학교의 <strong style={{ color: '#2E4A6F' }}>내신 시험 일정, 최근 입시 실적, 학습 흐름</strong>을 확인하실 수 있습니다
            </SchoolsSubtitle>
            <SchoolsGrid>
              <SchoolBadge to="/school/정명고?from=home&section=high">정명고</SchoolBadge>
              <SchoolBadge to="/school/소명여고?from=home&section=high">소명여고</SchoolBadge>
              <SchoolBadge to="/school/심원고?from=home&section=high">심원고</SchoolBadge>
              <SchoolBadge to="/school/중흥고?from=home&section=high">중흥고</SchoolBadge>
              <SchoolBadge to="/school/원미고?from=home&section=high">원미고</SchoolBadge>
              <SchoolBadge to="/school/부명고?from=home&section=high">부명고</SchoolBadge>
              <SchoolBadge to="/school/덕산고?from=home&section=high">덕산고</SchoolBadge>
              <SchoolBadge to="/school/중원고?from=home&section=high">중원고</SchoolBadge>
              <SchoolBadge to="/school/도당고?from=home&section=high">도당고</SchoolBadge>
              <SchoolBadge to="/school/계남고?from=home&section=high">계남고</SchoolBadge>
              <SchoolBadge to="/school/부천고?from=home&section=high">부천고</SchoolBadge>
              <SchoolBadge to="/school/부천북고?from=home&section=high">부천북고</SchoolBadge>
            </SchoolsGrid>
          </SchoolsSection>
          
          <SchoolsSection id="schools-middle" $variant="middle">
            <SchoolsTitleLabel>LEVEL ME UP</SchoolsTitleLabel>
            <SchoolsTitle>부천 중학교 맞춤 커리큘럼</SchoolsTitle>
            <SchoolsSubtitle style={{ marginTop: '16px', marginBottom: '30px', color: '#666' }}>
              학교 이름을 클릭하면 해당 중학교의 <strong style={{ color: '#2E4A6F' }}>내신 시험 일정, 최근 내신 성과, 학습 흐름</strong>을 확인하실 수 있습니다
            </SchoolsSubtitle>
            <SchoolsGrid>
              <SchoolBadge to="/school/부천중?from=home&section=middle">부천중</SchoolBadge>
              <SchoolBadge to="/school/중흥중?from=home&section=middle">중흥중</SchoolBadge>
              <SchoolBadge to="/school/부흥중?from=home&section=middle">부흥중</SchoolBadge>
              <SchoolBadge to="/school/계남중?from=home&section=middle">계남중</SchoolBadge>
              <SchoolBadge to="/school/중원중?from=home&section=middle">중원중</SchoolBadge>
              <SchoolBadge to="/school/심원중?from=home&section=middle">심원중</SchoolBadge>
              <SchoolBadge to="/school/부천여중?from=home&section=middle">부천여중</SchoolBadge>
              <SchoolBadge to="/school/까치울중?from=home&section=middle">까치울중</SchoolBadge>
              <SchoolBadge to="/school/성주중?from=home&section=middle">성주중</SchoolBadge>
              <SchoolBadge to="/school/부명중?from=home&section=middle">부명중</SchoolBadge>
            </SchoolsGrid>
          </SchoolsSection>
        </Container>
      </BrandingSection>
    </HomeWrapper>
  );
};

export default Home;
