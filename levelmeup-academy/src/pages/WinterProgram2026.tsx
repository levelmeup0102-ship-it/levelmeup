import React, { useState } from 'react';
import { colors } from '../theme';
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

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const MenuItem = styled.button<{ active: boolean }>`
  padding: 25px;
  border-radius: 12px;
  border: 2px solid ${props => props.active ? '#4CAF50' : '#e0e0e0'};
  background: ${props => props.active ? 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)' : 'white'};
  color: ${props => props.active ? '#1a1a1a' : '#333'};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(76, 175, 80, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(76, 175, 80, 0.2);
    border-color: #4CAF50;
  }
  
  .date {
    display: block;
    font-size: 0.95rem;
    margin-top: 10px;
    color: ${props => props.active ? '#2e7d32' : '#666'};
    font-weight: 500;
  }
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
  background: white;
  border-radius: 16px;
  padding: 50px 40px;
  text-align: center;
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1a1a1a;
  font-weight: 700;
`;

const CTAText = styled.p`
  font-size: 1.15rem;
  margin-bottom: 35px;
  color: #555;
  line-height: 1.7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled.a<{ primary?: boolean }>`
  display: inline-block;
  background: ${props => props.primary ? '#4CAF50' : 'white'};
  color: ${props => props.primary ? 'white' : '#333'};
  padding: 16px 36px;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid ${props => props.primary ? '#4CAF50' : '#e0e0e0'};
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(76, 175, 80, 0.25);
    background: ${props => props.primary ? '#45a049' : '#f8f9fa'};
    border-color: #4CAF50;
  }
`;

const WinterProgram2026: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<'sentence' | 'science' | 'class'>('sentence');
  
  return (
    <PageWrapper>
      <Container>
        <BackButton to="/">← 홈으로</BackButton>
        
        <HeroCard>
          <HeroTitle>예비고1 겨울학기 영어 2차 개강</HeroTitle>
          <HeroSubtitle>
            12월 Intensive GRAMMAR → 1~2월 Intensive READING<br />
            → 3월 미리 중간고사 & 내신 대비 개강
          </HeroSubtitle>
        </HeroCard>

        <MenuSection>
          <MenuTitle>예비고1 겨울학기 커리큘럼 진행 흐름</MenuTitle>
          
          <ContentWithThumbnail>
            <ThumbnailContainer>
              <ThumbnailImage src="/images/winter-yebigo1-poster.jpg" alt="예비고1 겨울학기 특강 포스터" />
              <BlogButton href="https://blog.naver.com/levelmeup" target="_blank" rel="noopener noreferrer">
                자세히 알아보기
              </BlogButton>
            </ThumbnailContainer>
            
            <ContentArea>
              <MenuContent style={{marginBottom: '30px'}}>
                <div style={{padding: '25px', background: 'white', borderRadius: '12px', border: '1px solid #e0e0e0', marginBottom: '25px'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a', fontWeight: '700'}}>12월 | Intensive GRAMMAR (문법 기반)</h3>
                  
                  <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#555', marginBottom: '20px'}}>
                    고등 영어의 기본은 "암기"가 아니라 <strong>문장 구조를 정확히 읽는 힘</strong>입니다.<br />
                    겨울학기 12월은 중등 문법을 고등 내신/수능 관점으로 재정리하며,<br />
                    해석·적용까지 가능한 문법 실력을 만드는 단계입니다.
                  </p>
                  
                  <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                    <li>핵심 문법 개념 정리 + 적용 훈련</li>
                    <li>문장 구조 읽기(해석) 기반 다지기</li>
                    <li>고등 내신형 문제 접근 방식 익히기</li>
                  </ul>
                </div>

                <div style={{padding: '25px', background: 'white', borderRadius: '12px', border: '1px solid #e0e0e0', marginBottom: '25px'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a', fontWeight: '700'}}>1~2월 | Intensive READING (독해 구조/유형)</h3>
                  
                  <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#555', marginBottom: '20px'}}>
                    12월에 쌓은 문법 기반을 바탕으로,<br />
                    독해 지문을 <strong>"감으로 푸는 것"이 아니라 구조로 분석하고 흐름으로 이해</strong>하는 방식으로 훈련합니다.
                  </p>
                  
                  <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                    <li>지문 문장 구조 분석 + 내용 흐름 파악</li>
                    <li>내신/수능 유형별 독해 연습</li>
                    <li>약점 유형 보완 + 실전 적용 훈련</li>
                  </ul>
                </div>

                <div style={{padding: '25px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #e0e0e0'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#1a1a1a', fontWeight: '700'}}>3월 | 미리 중간고사 + 내신 대비 개강</h3>
                  
                  <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#555', marginBottom: '20px'}}>
                    방학 동안 학습한 내용을 실전 시험으로 점검하고,<br />
                    학교별 내신 대비 커리큘럼으로 자연스럽게 연결합니다.
                  </p>
                  
                  <ul style={{marginLeft: '0', paddingLeft: '0'}}>
                    <li>3월 첫째 주: 예비고1 미리 중간고사 진행</li>
                    <li>결과 기반 약점 진단 및 학습 방향 피드백</li>
                    <li>3월 중순~: 학교별 내신 대비 본격 개강</li>
                  </ul>
                </div>
              </MenuContent>
            </ContentArea>
          </ContentWithThumbnail>

        </MenuSection>
      </Container>
    </PageWrapper>
  );
};

export default WinterProgram2026;
