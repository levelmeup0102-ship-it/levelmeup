import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';

const HomeWrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

// Star Wars style scrolling text animation
const scrollText = keyframes`
  0% {
    transform: perspective(300px) rotateX(20deg) translateY(0);
    opacity: 1;
  }
  100% {
    transform: perspective(300px) rotateX(25deg) translateY(-150%);
    opacity: 0;
  }
`;

const starShine = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const glow = keyframes`
  0%, 100% { 
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.8),
                 0 0 30px rgba(255, 215, 0, 0.6),
                 0 0 40px rgba(255, 215, 0, 0.4),
                 0 0 50px rgba(255, 140, 66, 0.3);
  }
  50% { 
    text-shadow: 0 0 30px rgba(255, 215, 0, 1),
                 0 0 40px rgba(255, 215, 0, 0.8),
                 0 0 50px rgba(255, 215, 0, 0.6),
                 0 0 60px rgba(255, 140, 66, 0.5);
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
  background: radial-gradient(ellipse at center, #0d1117 0%, #000000 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(2px 2px at 20% 30%, white, transparent),
      radial-gradient(2px 2px at 60% 70%, white, transparent),
      radial-gradient(1px 1px at 50% 50%, white, transparent),
      radial-gradient(1px 1px at 80% 10%, white, transparent),
      radial-gradient(2px 2px at 90% 60%, white, transparent),
      radial-gradient(1px 1px at 33% 80%, white, transparent),
      radial-gradient(2px 2px at 15% 90%, white, transparent);
    background-size: 200% 200%;
    animation: ${starShine} 3s ease-in-out infinite;
    opacity: 0.6;
    z-index: 1;
  }
`;

const StarWarsScroll = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  perspective: 400px;
  z-index: 3;
`;

const ScrollingText = styled.div`
  width: 80%;
  max-width: 800px;
  font-size: 1.8rem;
  line-height: 2.2;
  color: #ffd700;
  font-weight: 600;
  text-align: justify;
  transform-origin: 50% 100%;
  animation: ${scrollText} 30s linear infinite;
  
  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 40px;
    color: #ffd700;
    animation: ${glow} 2s ease-in-out infinite;
  }
  
  p {
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  }
  
  .achievement {
    font-size: 2.2rem;
    color: #ff8c42;
    font-weight: bold;
    text-align: center;
    margin: 40px 0;
    animation: ${glow} 3s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    
    h2 {
      font-size: 2rem;
    }
    
    .achievement {
      font-size: 1.5rem;
    }
  }
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
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(26, 95, 61, 0.7) 0%, rgba(45, 134, 89, 0.7) 30%, rgba(255, 140, 66, 0.6) 90%, rgba(255, 167, 93, 0.6) 100%);
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 4;
  padding: 40px 20px;
`;

const EpicTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 30px;
  color: #ffd700;
  font-weight: 900;
  letter-spacing: 8px;
  animation: ${glow} 2s ease-in-out infinite, ${float} 3s ease-in-out infinite;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 4px;
  }
`;

const SubTitle = styled.p`
  font-size: 2rem;
  margin-bottom: 50px;
  color: #fff;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5),
               2px 2px 4px rgba(0,0,0,0.8);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const AchievementBadges = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 50px 0;
`;

const Badge = styled.div<{ delay?: string }>`
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 66, 0.2));
  border: 3px solid #ffd700;
  border-radius: 15px;
  padding: 25px 15px;
  backdrop-filter: blur(10px);
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.1) translateY(-10px);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
    border-color: #ff8c42;
  }
  
  .number {
    font-size: 3rem;
    font-weight: 900;
    color: #ffd700;
    margin-bottom: 10px;
    animation: ${glow} 3s ease-in-out infinite;
  }
  
  .label {
    font-size: 1.1rem;
    color: #fff;
    font-weight: 600;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: white;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  font-weight: 900;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LogoText = styled.div`
  font-size: 5.5rem;
  font-weight: 900;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #fff 0%, #ffd700 50%, #fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255,255,255,0.5);
  letter-spacing: 5px;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 2px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #ffd700 0%, #ff8c42 100%);
  color: #000;
  padding: 25px 60px;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 900;
  transition: all 0.3s;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.6),
              0 6px 20px rgba(255, 140, 66, 0.4);
  border: 3px solid #ffd700;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${glow} 2s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 50px rgba(255, 215, 0, 1),
                0 10px 30px rgba(255, 140, 66, 0.6);
    background: linear-gradient(135deg, #ff8c42 0%, #ffd700 100%);
  }
  
  @media (max-width: 768px) {
    padding: 18px 40px;
    font-size: 1.2rem;
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
    background: linear-gradient(135deg, #1a5f3d 0%, #ff8c42 100%);
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

const FeatureIcon = styled.div`
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #1a5f3d 0%, #2d8659 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  margin: 0 auto 20px;
  box-shadow: 0 6px 20px rgba(26, 95, 61, 0.4);
  border: 4px solid #ff8c42;
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
  background: linear-gradient(135deg, #1a5f3d 0%, #2d8659 50%, #ff8c42 100%);
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
  background: linear-gradient(135deg, #fff 0%, #ffd700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Hero>
        <StarWarsScroll>
          <ScrollingText>
            <h2>레벨미업 학원의 전설</h2>
            
            <p className="achievement">
              ⭐ 5년 연속 서울대 합격생 배출 ⭐
            </p>
            
            <p>
              부천 중동에서 15년의 전통을 자랑하는 레벨미업 학원은
              끊임없는 도전과 혁신으로 학생들의 꿈을 현실로 만들어왔습니다.
            </p>
            
            <p className="achievement">
              🏆 2023학년도 37명 명문대 합격 🏆
            </p>
            
            <p>
              서울대학교, 포스텍, 고려대학교, 연세대학교...
              대한민국 최고의 명문대학에 매년 수십 명의 합격생을 배출하며
              부천 지역 최고의 입시 실적을 자랑합니다.
            </p>
            
            <p className="achievement">
              💯 영어 100점 다수 배출 💯
            </p>
            
            <p>
              2024년 정명고 영어 100점자 7명 중 4명,
              심원고 영어 100점자 4명 전원 배출!
              체계적인 내신 대비 시스템으로 완벽한 성적을 만들어냅니다.
            </p>
            
            <p className="achievement">
              ✨ 300명 이상의 재원생이 함께하는 ✨
            </p>
            
            <p>
              중등부부터 고등부까지, 국어·영어·수학·과학 전 과목
              최고의 강사진과 함께 여러분의 미래를 설계합니다.
            </p>
            
            <p className="achievement">
              🚀 지금 바로 레벨미업하세요! 🚀
            </p>
          </ScrollingText>
        </StarWarsScroll>
        
        <HeroContent>
          <EpicTitle>LEVEL ME UP</EpicTitle>
          <SubTitle>부천 중동 15년 전통 · 명문대 합격의 전설</SubTitle>
          
          <AchievementBadges>
            <Badge delay="0s">
              <div className="number">5년</div>
              <div className="label">서울대 연속 합격</div>
            </Badge>
            <Badge delay="0.2s">
              <div className="number">37명</div>
              <div className="label">2023 명문대 합격</div>
            </Badge>
            <Badge delay="0.4s">
              <div className="number">100점</div>
              <div className="label">영어 만점 다수</div>
            </Badge>
            <Badge delay="0.6s">
              <div className="number">300+</div>
              <div className="label">재원생</div>
            </Badge>
            <Badge delay="0.8s">
              <div className="number">15년</div>
              <div className="label">부천 전통</div>
            </Badge>
            <Badge delay="1s">
              <div className="number">1등급</div>
              <div className="label">여름방학 50명+</div>
            </Badge>
          </AchievementBadges>
          
          <CTAButton to="/consulting">무료 상담 신청</CTAButton>
        </HeroContent>
      </Hero>

      <Section>
        <Container>
          <SectionTitle>왜 레벨미업 학원인가요?</SectionTitle>
          <CardGrid>
            <Card>
              <CardIcon>👨‍🏫</CardIcon>
              <CardTitle>15년 경력 강사진</CardTitle>
              <CardDescription>
                부천 지역 15년 전통! 10년 이상 경력의 최고 전문 강사진이 학생 개개인의 특성에 맞춘 맞춤형 수업을 제공합니다.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>📊</CardIcon>
              <CardTitle>체계적인 커리큘럼</CardTitle>
              <CardDescription>
                예습-수업-복습 과제를 통한 3단계 학습 시스템으로 학습 습관을 형성하고 자기주도 학습 능력을 키웁니다.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>I.C.C. 집중 케어</CardTitle>
              <CardDescription>
                Intensive Care Class를 통해 부족한 부분을 개별 피드백하고 즉시 보충하여 학습 효율을 극대화합니다.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>🏆</CardIcon>
              <CardTitle>검증된 입시 실적</CardTitle>
              <CardDescription>
                서울대·연세대·고려대 등 명문대 매년 다수 합격! 5년 연속 서울대 합격생 배출로 입증된 최고의 입시 전문성.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>💯</CardIcon>
              <CardTitle>탁월한 내신 성과</CardTitle>
              <CardDescription>
                전교 1등 다수, 전교 3등 이내 13명 배출! 중등부·고등부 모두 뛰어난 성적 향상 사례를 자랑합니다.
              </CardDescription>
            </Card>
          </CardGrid>
        </Container>
      </Section>

      <StatsSection>
        <Container>
          <SectionTitle style={{color: 'white', fontSize: '3rem'}}>🏆 레벨미업의 검증된 실적</SectionTitle>
          <StatsGrid>
            <StatItem>
              <StatNumber>5년 연속</StatNumber>
              <StatLabel>서울대 합격생 배출</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50명+</StatNumber>
              <StatLabel>여름방학 1등급 달성</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>전교 3등↑</StatNumber>
              <StatLabel>13명 배출</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>전교 1등</StatNumber>
              <StatLabel>다수 배출</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>15년</StatNumber>
              <StatLabel>부천 지역 전통</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>300명+</StatNumber>
              <StatLabel>재원생 (중고등)</StatLabel>
            </StatItem>
          </StatsGrid>
        </Container>
      </StatsSection>

      <Section>
        <Container>
          <SectionTitle>주요 프로그램</SectionTitle>
          <FeatureGrid>
            <Feature>
              <FeatureIcon>📚</FeatureIcon>
              <FeatureTitle>국어</FeatureTitle>
              <FeatureDescription>
                비문학, 문학, 문법 영역별 집중 학습으로 수능 국어 완벽 대비
              </FeatureDescription>
            </Feature>
            <Feature>
              <FeatureIcon>🗣️</FeatureIcon>
              <FeatureTitle>영어</FeatureTitle>
              <FeatureDescription>
                듣기, 독해, 문법, 어휘를 통합한 실전 영어 실력 향상
              </FeatureDescription>
            </Feature>
            <Feature>
              <FeatureIcon>🔢</FeatureIcon>
              <FeatureTitle>수학</FeatureTitle>
              <FeatureDescription>
                개념 이해부터 심화 문제까지 단계별 수학 완성
              </FeatureDescription>
            </Feature>
            <Feature>
              <FeatureIcon>🔬</FeatureIcon>
              <FeatureTitle>자습실 완비</FeatureTitle>
              <FeatureDescription>
                PreMeUp 자습관(35석)과 멘토링룸을 통해 쾌적한 학습 환경 제공
              </FeatureDescription>
            </Feature>
          </FeatureGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>📝 블로그 최신 소식</SectionTitle>
          <p style={{textAlign: 'center', color: '#666', marginBottom: '40px'}}>
            레벨미업 블로그에서 더 많은 정보를 확인하세요
          </p>
          <CardGrid>
            <Card>
              <CardIcon>📊</CardIcon>
              <CardTitle>학교별 시험 분석</CardTitle>
              <CardDescription>
                정명고, 심원고, 덕산고 등 부천 지역 주요 고등학교의 상세한 시험 분석 리포트를 
                블로그에서 확인하세요. 출제 경향과 대비 방법을 상세히 안내합니다.
              </CardDescription>
              <div style={{marginTop: '20px'}}>
                <a 
                  href="https://blog.naver.com/levelmeup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: '#1a5f3d', 
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                  }}
                >
                  블로그에서 보기 →
                </a>
              </div>
            </Card>
            <Card>
              <CardIcon>🏆</CardIcon>
              <CardTitle>우수 학생 성과</CardTitle>
              <CardDescription>
                국어 100점 4명, 영어 100점 다수 배출! 레벨미업 학생들의 실제 성적표와 
                성공 스토리를 블로그에서 만나보세요.
              </CardDescription>
              <div style={{marginTop: '20px'}}>
                <a 
                  href="https://blog.naver.com/levelmeup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: '#1a5f3d', 
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                  }}
                >
                  블로그에서 보기 →
                </a>
              </div>
            </Card>
            <Card>
              <CardIcon>📚</CardIcon>
              <CardTitle>내신 대비 커리큘럼</CardTitle>
              <CardDescription>
                I.C.C. 시스템, 예습-복습 과제, 학교별 맞춤 수업 등 레벨미업만의 
                체계적인 내신 대비 시스템을 블로그에서 자세히 알아보세요.
              </CardDescription>
              <div style={{marginTop: '20px'}}>
                <a 
                  href="https://blog.naver.com/levelmeup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: '#1a5f3d', 
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                  }}
                >
                  블로그에서 보기 →
                </a>
              </div>
            </Card>
          </CardGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>📸 더 많은 소식을 확인하세요</SectionTitle>
          <CardGrid style={{maxWidth: '800px', margin: '0 auto'}}>
            <Link to="/gallery" style={{textDecoration: 'none'}}>
              <Card style={{cursor: 'pointer'}}>
                <CardIcon>🏫</CardIcon>
                <CardTitle>학원 시설 & 갤러리</CardTitle>
                <CardDescription>
                  Level ME Up 본관과 Pre ME Up 자습관(35석)의 
                  쾌적한 학습 환경을 사진으로 확인하세요.
                </CardDescription>
                <div style={{marginTop: '20px'}}>
                  <span style={{color: '#1a5f3d', fontWeight: 'bold'}}>
                    갤러리 보기 →
                  </span>
                </div>
              </Card>
            </Link>
            <Card style={{cursor: 'pointer'}} onClick={() => window.open('https://www.instagram.com/levelme__up/', '_blank')}>
              <CardIcon>📷</CardIcon>
              <CardTitle>Instagram</CardTitle>
              <CardDescription>
                @levelme__up<br/>
                레벨미업의 일상, 이벤트, 학생들의 생생한 후기를 
                인스타그램에서 만나보세요!
              </CardDescription>
              <div style={{marginTop: '20px'}}>
                <span style={{color: '#1a5f3d', fontWeight: 'bold'}}>
                  팔로우하기 →
                </span>
              </div>
            </Card>
          </CardGrid>
        </Container>
      </Section>

      <Section style={{background: '#f8f9fa', textAlign: 'center', padding: '100px 20px'}}>
        <Container>
          <SectionTitle>지금 바로 시작하세요!</SectionTitle>
          <p style={{fontSize: '1.2rem', color: '#666', marginBottom: '40px'}}>
            무료 상담을 통해 학생에게 맞는 최적의 학습 계획을 제안해드립니다.
          </p>
          <CTAButton to="/consulting">무료 상담 신청하기</CTAButton>
        </Container>
      </Section>
    </HomeWrapper>
  );
};

export default Home;
