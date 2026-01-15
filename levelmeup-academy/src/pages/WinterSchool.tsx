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

const WinterSchool: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <BackButton to="/">← 홈으로</BackButton>
        
        <HeroCard>
          <HeroTitle>레벨미업 윈터스쿨</HeroTitle>
          <HeroSubtitle>
            LEVEL ME UP 전과목 집중케어 프로그램<br />
            단순 자습이 아닌 체계적인 학습 관리 시스템
          </HeroSubtitle>
        </HeroCard>

        <MenuSection>
          <MenuTitle>윈터스쿨이 특별한 이유</MenuTitle>
          
          <ContentWithThumbnail>
            <ThumbnailContainer>
              <ThumbnailImage src="/images/winter-school-poster.jpg" alt="레벨미업 윈터스쿨 포스터" />
              <BlogButton href="https://blog.naver.com/levelmeup" target="_blank" rel="noopener noreferrer">
                자세히 알아보기
              </BlogButton>
            </ThumbnailContainer>
            
            <ContentArea>
              <MenuContent style={{marginBottom: '30px'}}>
                <div style={{padding: '25px', background: 'white', borderRadius: '12px', border: '1px solid #e0e0e0', marginBottom: '20px'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a'}}>단순 자습이 아니라</h3>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#555'}}>
                    나의 공부가 어땠는지 <strong>매주 점검하는 과정</strong>을 통해<br />
                    마음 먹은 계획을 <strong>끝까지 실천</strong>할 수 있도록 한다는 것 !!
                  </p>
                </div>

                <div style={{padding: '25px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #e0e0e0'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a'}}>윈터 학습 설명회</h3>
                  <p style={{fontSize: '1.05rem', marginBottom: '15px', color: '#555'}}>
                    <strong>입시/학습 전략 안내</strong>
                  </p>
                  <p style={{fontSize: '1.05rem', marginBottom: '20px', color: '#555', padding: '15px', background: 'white', borderRadius: '8px'}}>
                    <strong>📅 12/27(토) ~ 12/28(일)</strong><br />
                    자습 시작 일주일 전, 윈터 학습 설명회를 통해<br />
                    방학 동안의 입시/학습 목표를 생각해봅시다
                  </p>
                  
                  <h4 style={{fontSize: '1.2rem', marginTop: '25px', marginBottom: '15px', color: '#1a1a1a'}}>✅ 윈터 학습 설명회 진행 내용</h4>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '15px', fontStyle: 'italic'}}>
                    (윈터스쿨 신청자 필수 등원, 신청자 외 참여 원하는 경우 문자 신청)
                  </p>
                  
                  <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                    <li>학년별 대입 준비 전략 & 겨울방학 필수 학습 안내</li>
                    <li>윈터스쿨 프로그램 안내</li>
                    <li>선배와의 만남 (멘토T)</li>
                    <li>겨울방학 학습 계획 작성하기</li>
                    <li>개별 입시 목표 상담 & 학습 계획 피드백</li>
                  </ul>
                  
                  <p style={{fontSize: '0.9rem', color: '#999', marginTop: '20px', fontStyle: 'italic'}}>
                    * 설명회 진행 회차 추후 공지 예정
                  </p>
                </div>
              </MenuContent>
            </ContentArea>
          </ContentWithThumbnail>

        </MenuSection>
      </Container>
    </PageWrapper>
  );
};

export default WinterSchool;
