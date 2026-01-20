import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 60px 20px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  background: white;
  color: #333;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid #e0e0e0;
  transition: all 0.3s;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background: #f8f9fa;
    border-color: #4CAF50;
    color: #4CAF50;
    transform: translateX(-5px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 50px;
  border: 1px solid #e9ecef;
  
  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 400;
  
  strong {
    color: #1a1a1a;
    font-weight: 600;
  }
`;

const ContentWithThumbnail = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  margin-top: 40px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
  
  @media (max-width: 968px) {
    width: 100%;
    align-items: center;
  }
`;

const ThumbnailImage = styled.img`
  width: 350px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  
  @media (max-width: 968px) {
    width: 100%;
    max-width: 500px;
  }
`;

const BlogButton = styled.a`
  display: inline-block;
  width: 350px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  padding: 16px 24px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.4);
  transition: all 0.3s;
  border: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.5);
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  }
  
  &::after {
    content: ' →';
    margin-left: 8px;
    transition: margin-left 0.3s;
  }
  
  &:hover::after {
    margin-left: 12px;
  }
  
  @media (max-width: 968px) {
    width: 100%;
    max-width: 500px;
  }
`;

const ContentArea = styled.div`
  flex: 1;
`;

const MenuSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 50px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 50px;
  border: 1px solid #e9ecef;
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const MenuTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #1a1a1a;
  font-weight: 700;
`;

const MenuContent = styled.div`
  padding: 40px;
  background: #fafbfc;
  border-radius: 12px;
  line-height: 1.8;
  border: 1px solid #e9ecef;
  
  h3 {
    font-size: 1.7rem;
    color: #1a1a1a;
    margin-bottom: 25px;
    font-weight: 700;
  }
  
  p {
    color: #555;
    margin-bottom: 15px;
    font-size: 1.05rem;
    
    strong {
      color: #1a1a1a;
      font-weight: 600;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
    
    li {
      padding: 12px 0;
      color: #444;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 1.05rem;
      
      &::before {
        content: '✓';
        color: #4CAF50;
        font-weight: bold;
        font-size: 1.3rem;
        margin-top: -2px;
      }
    }
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #17B7A6 0%, #2DD4C1 100%);
  border-radius: 16px;
  padding: 50px 40px;
  text-align: center;
  margin-top: 50px;
  box-shadow: 0 4px 20px rgba(23, 183, 166, 0.3);
  
  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 15px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 30px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: white;
  color: #17B7A6;
  padding: 16px 48px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    background: #f8f9fa;
  }
  
  @media (max-width: 768px) {
    padding: 14px 40px;
    font-size: 1rem;
  }
`;

const WinterSchool: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <BackButton to="/">← 홈으로</BackButton>
        
        <HeroCard>
          <HeroTitle>윈터스쿨 학습 특강</HeroTitle>
          <HeroSubtitle>
            방학은 길지만, 성적이 오르는 시간은 짧습니다.<br />
            레벨미업 윈터스쿨은 "열심히"를 강요하는 프로그램이 아니라, <strong>레벨미업 졸업생 멘토의 1:1 케어</strong>로 공부 루틴을 끝까지 잡아주는 겨울 프로그램입니다.<br />
            혼자 하면 흐트러지는 계획도, <strong>옆에서 함께 점검하고 피드백</strong>해 주면 결과가 달라집니다.
          </HeroSubtitle>
        </HeroCard>

        <MenuSection>
          <MenuTitle>윈터스쿨 진행 내용</MenuTitle>
          
          <ContentWithThumbnail>
            <ThumbnailContainer>
              <ThumbnailImage src="/images/winter-school-poster.jpg" alt="레벨미업 윈터스쿨 학습 특강 포스터" />
              <BlogButton href="https://m.blog.naver.com/PostView.naver?blogId=levelmeup&logNo=224085414673&referrerCode=0&searchKeyword=%EC%9C%88%ED%84%B0" target="_blank" rel="noopener noreferrer">
                자세히 알아보기
              </BlogButton>
            </ThumbnailContainer>
            
            <ContentArea>
              <MenuContent style={{marginBottom: '30px'}}>
                <div style={{padding: '25px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #e0e0e0'}}>
                  
                  <div style={{marginBottom: '25px', padding: '20px', background: 'white', borderRadius: '10px'}}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1a1a1a'}}>이런 학생에게 추천합니다</h4>
                    <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                      <li>겨울방학에 무엇부터 해야 할지 막막한 학생</li>
                      <li>내신과 수능을 동시에 잡고 싶은 학생</li>
                      <li>공부 시간은 늘었는데 성적이 안 오르는 학생</li>
                    </ul>
                  </div>

                  <div style={{marginBottom: '25px', padding: '20px', background: 'white', borderRadius: '10px'}}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1a1a1a'}}>1) 학년별 맞춤 학습 전략</h4>
                    <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                      <li>중등/고1/고2/고3 학년별 목표 설정</li>
                      <li>내신 중심 / 수능 중심 / 병행 전략 정리</li>
                      <li>과목별 공부 우선순위와 시간 배분</li>
                    </ul>
                  </div>

                  <div style={{marginBottom: '25px', padding: '20px', background: 'white', borderRadius: '10px'}}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1a1a1a'}}>2) 겨울방학 집중 커리큘럼</h4>
                    <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                      <li>핵심 개념 정리 + 유형 훈련 + 실전 적용</li>
                      <li>약점 단원 집중 보완</li>
                      <li>주간 목표 점검으로 흐트러지지 않게 관리</li>
                    </ul>
                  </div>

                  <div style={{marginBottom: '25px', padding: '20px', background: 'white', borderRadius: '10px'}}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1a1a1a'}}>3) 학습 루틴 & 계획표 완성</h4>
                    <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                      <li>개인 성향/현재 수준에 맞춘 공부 루틴 설계</li>
                      <li>하루 공부 흐름(자습-복습-오답) 고정</li>
                      <li>실천 가능한 방학 계획표 작성</li>
                    </ul>
                  </div>

                  <div style={{padding: '20px', background: 'white', borderRadius: '10px'}}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1a1a1a'}}>4) 개별 피드백 & 목표 관리</h4>
                    <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                      <li>학습 방향 점검</li>
                      <li>과목별 약점 진단</li>
                      <li>목표 달성을 위한 구체적 수정 피드백</li>
                    </ul>
                  </div>
                </div>
              </MenuContent>
            </ContentArea>
          </ContentWithThumbnail>

        </MenuSection>

        <CTASection>
          <CTATitle>지금 바로 상담 신청하세요</CTATitle>
          <CTADescription>
            윈터스쿨 프로그램에 대해 더 자세히 알고 싶으신가요?<br />
            전문 상담을 통해 자녀에게 맞는 최적의 학습 계획을 안내해 드립니다.
          </CTADescription>
          <CTAButton to="/consulting">상담 신청하기</CTAButton>
        </CTASection>
      </Container>
    </PageWrapper>
  );
};

export default WinterSchool;
