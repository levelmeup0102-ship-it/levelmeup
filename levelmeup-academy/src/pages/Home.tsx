import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
  min-height: 100vh;
`;

const Hero = styled.section`
  position: relative;
  color: white;
  padding: 120px 20px;
  text-align: center;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(26, 95, 61, 0.85) 0%, rgba(45, 134, 89, 0.85) 30%, rgba(255, 140, 66, 0.85) 90%, rgba(255, 167, 93, 0.85) 100%);
    z-index: 1;
  }
  
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px); 
    }
    50% { 
      transform: translateY(-20px); 
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
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: fadeInUp 1s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
  background: linear-gradient(135deg, #ff8c42 0%, #ffa75d 100%);
  color: white;
  padding: 20px 50px;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(255, 140, 66, 0.4);
  border: 3px solid white;
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 140, 66, 0.6);
    background: linear-gradient(135deg, #ffa75d 0%, #ff8c42 100%);
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
        <VideoBackground>
          {/* Educational academy video background - can be replaced with actual video */}
          <video autoPlay loop muted playsInline>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-student-writing-in-a-notebook-4964-large.mp4" type="video/mp4" />
          </video>
        </VideoBackground>
        <HeroContent>
          <LogoText>LEVEL ME UP</LogoText>
          <HeroTitle>성적을 레벨업하세요!</HeroTitle>
          <HeroSubtitle>부천 중동 15년 전통 중고등 국영수과학 전문 학원</HeroSubtitle>
          <HeroSubtitle>서울대 5년 연속 합격생 배출 | 여름방학 1등급 달성 50명+</HeroSubtitle>
          <CTAButton to="/consulting">무료 상담 신청하기</CTAButton>
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
