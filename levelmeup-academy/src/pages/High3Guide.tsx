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

const High3Guide: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <BackButton to="/">← 홈으로</BackButton>
        
        <HeroCard>
          <HeroTitle>예비고3 학습 가이드</HeroTitle>
          <HeroSubtitle>
            겨울방학부터 시작하는 체계적인 고3 준비<br />
            내신과 수능을 함께 대비하는 학습 전략
          </HeroSubtitle>
        </HeroCard>

        <MenuSection>
          <MenuTitle>고3 진입 전 겨울방학의 중요성</MenuTitle>
          
          <ContentWithThumbnail>
            <ThumbnailContainer>
              <ThumbnailImage src="/images/high3-guide-poster.jpg" alt="예비고3 학습 가이드 포스터" />
              <BlogButton href="https://blog.naver.com/levelmeup" target="_blank" rel="noopener noreferrer">
                자세히 알아보기
              </BlogButton>
            </ThumbnailContainer>
            
            <ContentArea>
              <MenuContent style={{marginBottom: '30px'}}>
                <div style={{padding: '25px', background: 'white', borderRadius: '12px', border: '1px solid #e0e0e0', marginBottom: '20px'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a'}}>마지막 기회, 겨울방학</h3>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px'}}>
                    고3 진입 전 겨울방학은<br />
                    <strong>입시 전략을 정리하고, 내신과 수능을 함께 준비할 수 있는 마지막 기회</strong>입니다.
                  </p>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#666', padding: '15px', background: '#f8f9fa', borderRadius: '8px'}}>
                    이 시기에 방향을 잡지 못하면<br />
                    3학년 1학기부터는 학습량과 속도를 따라가기 어려워집니다.
                  </p>
                </div>

                <div style={{padding: '25px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #e0e0e0', marginBottom: '20px'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a'}}>레벨미업 고3 정규수업</h3>
                  <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                    <li>내신과 수능을 분리하지 않고</li>
                    <li>등급대별로 필요한 학습을 구분하여</li>
                    <li>겨울방학부터 체계적으로 연결하는 수업입니다</li>
                  </ul>
                </div>

                <div style={{padding: '25px', background: 'white', borderRadius: '12px', border: '1px solid #e0e0e0', marginBottom: '20px'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a'}}>겨울방학 학습 계획</h3>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#555', marginBottom: '15px'}}>
                    <strong>겨울방학(12~2월) 동안</strong>
                  </p>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#666', marginBottom: '15px'}}>
                    개념 정리와 유형별 접근법을 충분히 다지고,<br />
                    이를 바탕으로 3월 이후 내신 대비 수업에서는<br />
                    문제풀이 중심 학습이 진행됩니다.
                  </p>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#555', padding: '15px', background: '#E8F5E9', borderRadius: '8px', borderLeft: '4px solid #4CAF50'}}>
                    겨울방학 학습은<br />
                    <strong>고3 1학기 내신뿐 아니라 11월 수능까지 이어지는 기초</strong>가 되는 과정입니다.
                  </p>
                </div>

                <div style={{padding: '25px', background: '#fff3cd', borderRadius: '12px', border: '1px solid #ffc107'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a'}}>수강 권장 안내</h3>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#555', marginBottom: '15px'}}>
                    고3 수업 진입과 학습 연계를 위해<br />
                    <strong>겨울방학 기간 수업 수강을 권장드립니다.</strong>
                  </p>
                  <p style={{fontSize: '0.95rem', color: '#666', marginTop: '15px', fontStyle: 'italic'}}>
                    * 수업 일정 및 반 편성은 학원 운영 상황에 따라 변동될 수 있습니다.<br />
                    * 자세한 상담은 학원으로 문의해 주세요.
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

export default High3Guide;
