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
    padding: 25px 16px;
    width: 100%;
    box-sizing: border-box;
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
  
  @media (max-width: 768px) {
    padding: 20px 16px;
    width: 100%;
    box-sizing: border-box;
  }
  
  h3 {
    font-size: 1.7rem;
    color: #1a1a1a;
    margin-bottom: 25px;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
  }
  
  p {
    color: #555;
    margin-bottom: 15px;
    font-size: 1.05rem;
    
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
    
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
      
      @media (max-width: 768px) {
        padding: 10px 0;
        font-size: 0.95rem;
        gap: 10px;
        align-items: flex-start;
        flex-direction: row;
      }
      
      &::before {
        content: '✓';
        color: #4CAF50;
        font-weight: bold;
        font-size: 1.3rem;
        margin-top: -2px;
        flex-shrink: 0;
        
        @media (max-width: 768px) {
          font-size: 1.2rem;
          margin-top: 0;
        }
      }
    }
  }
`;

const CTASection = styled.div`
  margin-top: 60px;
  
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const BrandClosing = styled.div`
  background: linear-gradient(135deg, #1a2332 0%, #2d3748 100%);
  border-radius: 20px;
  padding: 50px 40px;
  text-align: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    padding: 35px 25px;
    margin-bottom: 30px;
  }
`;

const BrandMotto = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BrandSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ConsultSection = styled.div`
  background: transparent;
`;

const ConsultTitle = styled.h3`
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 30px;
  font-weight: 700;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const CTATitle = styled.h3`
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 35px 40px;
  border-radius: 15px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #2E4A6F;
  margin-bottom: 30px;
  text-align: left;
  
  h3 {
    font-size: 1.4rem;
    color: #2E4A6F;
    margin-bottom: 20px;
    font-weight: 700;
  }
  
  p {
    font-size: 1.05rem;
    color: #333;
    margin: 12px 0;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    padding: 25px 20px;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 15px;
    }
    
    p {
      font-size: 0.95rem;
      margin: 10px 0;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #2E4A6F;
  color: white;
  padding: 18px 45px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(23, 183, 166, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(23, 183, 166, 0.4);
    background: #1E3A5F;
  }
  
  @media (max-width: 768px) {
    padding: 15px 35px;
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
                    <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1a1a1a'}}>2) 학습 루틴 & 계획표 완성</h4>
                    <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                      <li>개인 성향/현재 수준에 맞춘 공부 루틴 설계</li>
                      <li>하루 공부 흐름(자습-복습-오답) 고정</li>
                      <li>실천 가능한 방학 계획표 작성</li>
                    </ul>
                  </div>

                  <div style={{padding: '20px', background: 'white', borderRadius: '10px'}}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1a1a1a'}}>3) 개별 피드백 & 목표 관리</h4>
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
          <BrandClosing>
            <BrandMotto>Slow and steady wins the race.</BrandMotto>
            <BrandSubtitle>흔들리지 않는 실력의 리듬을 만들어드립니다</BrandSubtitle>
          </BrandClosing>
          
          <ConsultSection>
            <ConsultTitle>수강 신청 및 상담</ConsultTitle>
            <ContactInfo>
              <h3>레벨미업 학원</h3>
              <p>📍 주소: 경기도 부천시 길주로 275</p>
              <p>📞 전화: 032-322-0592 / 010-2406-0591</p>
            </ContactInfo>
            <ButtonGroup>
              <CTAButton to="/consulting">무료 상담 신청하기</CTAButton>
            </ButtonGroup>
          </ConsultSection>
        </CTASection>
      </Container>
    </PageWrapper>
  );
};

export default WinterSchool;
