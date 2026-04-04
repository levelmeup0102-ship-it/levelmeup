import React, { useState } from 'react';
import { colors, gradients } from '../theme';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  padding: 60px 20px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  margin-bottom: 30px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-5px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
`;

const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`;

const SubjectCard = styled.div<{ color: string }>`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  border-top: 5px solid ${props => props.color};
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
  }
`;

const SubjectIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  text-align: center;
  filter: drop-shadow(2px 2px 8px rgba(0,0,0,0.1));
`;

const SubjectTitle = styled.h2<{ color: string }>`
  font-size: 1.8rem;
  color: ${props => props.color};
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
`;

const SubjectDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.05rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding: 12px 0;
    color: #444;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    line-height: 1.6;
    
    &::before {
      content: '✓';
      color: #4CAF50;
      font-weight: bold;
      font-size: 1.3rem;
      margin-top: -2px;
    }
  }
`;

const BenefitsSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 40px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const BenefitCard = styled.div`
  background: linear-gradient(135deg, #f5f7ff 0%, #e9ecff 100%);
  border-radius: 15px;
  padding: 30px 25px;
  text-align: center;
  transition: all 0.3s;
  border: 2px solid #4CAF5040;
  
  &:hover {
    transform: scale(1.05);
    border-color: #4CAF50;
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 1.3rem;
    color: #4CAF50;
    margin-bottom: 10px;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  border-radius: 20px;
  padding: 50px 40px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 35px;
  opacity: 0.95;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled.a<{ primary?: boolean }>`
  display: inline-block;
  background: ${props => props.primary ? 'white' : 'rgba(255,255,255,0.2)'};
  color: ${props => props.primary ? '#4CAF50' : 'white'};
  padding: 18px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid white;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    background: ${props => props.primary ? '#f5f7ff' : 'rgba(255,255,255,0.3)'};
  }
`;

const MenuSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const MenuTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const MenuItem = styled.button<{ active: boolean }>`
  padding: 20px;
  border-radius: 15px;
  border: 2px solid ${props => props.active ? '#4CAF50' : '#e0e0e0'};
  background: ${props => props.active ? 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
    border-color: #4CAF50;
  }
  
  .date {
    display: block;
    font-size: 0.9rem;
    margin-top: 8px;
    opacity: ${props => props.active ? '0.9' : '0.7'};
    font-weight: normal;
  }
`;

const MenuContent = styled.div`
  padding: 30px;
  background: #f8f9fa;
  border-radius: 15px;
  line-height: 1.8;
  
  h3 {
    font-size: 1.5rem;
    color: #4CAF50;
    margin-bottom: 20px;
  }
  
  p {
    color: #666;
    margin-bottom: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 10px 0;
      color: #444;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      
      &::before {
        content: '✓';
        color: #4CAF50;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
`;

const PreHighSchool: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<'sentence' | 'science' | 'class'>('sentence');
  
  return (
    <PageWrapper>
      <Container>
        <BackButton to="/events">← 이벤트 목록</BackButton>
        
        <HeroCard>
          <HeroTitle>🎓 2026 겨울학기 특강 안내</HeroTitle>
          <HeroSubtitle>
            레벨미업 학원의 체계적인 겨울학기 특강 프로그램<br />
            과목별 맞춤 커리큘럼으로 실력 향상을 경험하세요
          </HeroSubtitle>
        </HeroCard>

        <MenuSection>
          <MenuTitle>📚 특강 프로그램 선택</MenuTitle>
          <MenuGrid>
            <MenuItem 
              active={activeMenu === 'sentence'} 
              onClick={() => setActiveMenu('sentence')}
            >
              중등 영어 [Sentence UP] 특강
              <span className="date">1/16 금요일 개강</span>
            </MenuItem>
            <MenuItem 
              active={activeMenu === 'science'} 
              onClick={() => setActiveMenu('science')}
            >
              예비고1 통합과학 2차 개강
              <span className="date">1/10 토요일 개강</span>
            </MenuItem>
            <MenuItem 
              active={activeMenu === 'class'} 
              onClick={() => setActiveMenu('class')}
            >
              수학 [CLASS UP] 특강
              <span className="date">1/4 일요일 1차 개강</span>
            </MenuItem>
          </MenuGrid>
          
          {activeMenu === 'sentence' && (
            <MenuContent>
              <h3>🗣️ 26-1 겨울학기 중등 영어 [Sentence UP] 특강</h3>
              <p><strong>개강일:</strong> 2026년 1월 16일 (금)</p>
              <p><strong>대상:</strong> 중등 전 학년</p>
              <p><strong>특강 내용:</strong></p>
              <ul>
                <li>문장 구조 완벽 이해 및 분석 훈련</li>
                <li>필수 문법 패턴 집중 학습</li>
                <li>독해 실력 향상을 위한 구문 독해</li>
                <li>서술형 문제 대비 작문 연습</li>
                <li>내신 영어 완벽 대비</li>
              </ul>
            </MenuContent>
          )}
          
          {activeMenu === 'science' && (
            <MenuContent>
              <h3>🔬 레벨미업학원 예비고1 통합과학 2차 개강</h3>
              <p><strong>개강일:</strong> 2026년 1월 10일 (토)</p>
              <p><strong>대상:</strong> 예비 고1 (현 중3)</p>
              <p><strong>특강 내용:</strong></p>
              <ul>
                <li>고등 통합과학 핵심 개념 선행</li>
                <li>물리/화학/생명과학/지구과학 통합 학습</li>
                <li>실험 및 탐구 활동 분석</li>
                <li>레벨미업 자체 교재 사용</li>
                <li>3월 첫 중간고사 완벽 대비</li>
              </ul>
            </MenuContent>
          )}
          
          {activeMenu === 'class' && (
            <MenuContent>
              <h3>➗ 26-1 겨울학기 수학 [CLASS UP] 특강</h3>
              <p><strong>1차 개강일:</strong> 2026년 1월 4일 (일)</p>
              <p><strong>대상:</strong> 중등 및 예비고1 전 학년</p>
              <p><strong>특강 내용:</strong></p>
              <ul>
                <li>학년별 맞춤 수학 커리큘럼</li>
                <li>개념 이해부터 문제 풀이까지 단계별 학습</li>
                <li>고난도 문제 대비 심화 훈련</li>
                <li>절대적 학습량 확보</li>
                <li>내신 + 모의고사 동시 대비</li>
              </ul>
            </MenuContent>
          )}
        </MenuSection>

        <SubjectGrid>
          <SubjectCard color="#ff6b6b">
            <SubjectIcon>📖</SubjectIcon>
            <SubjectTitle color="#ff6b6b">국어 집중 특강</SubjectTitle>
            <SubjectDescription>
              중고등 핵심 문법부터 모의고사 독해까지 완벽 정리
            </SubjectDescription>
            <FeatureList>
              <li>중고등 핵심 문법 총정리</li>
              <li>문학 갈래별 특징 및 접근법</li>
              <li>모의고사 읽는 연습</li>
              <li>다양한 지문 독해 훈련</li>
              <li>3월 첫째 주 모의 중간고사</li>
            </FeatureList>
          </SubjectCard>

          <SubjectCard color="#4ecdc4">
            <SubjectIcon>🗣️</SubjectIcon>
            <SubjectTitle color="#4ecdc4">영어 완성 특강</SubjectTitle>
            <SubjectDescription>
              기초 문법 + 필수 어휘로 안정적 고득점 만들기
            </SubjectDescription>
            <FeatureList>
              <li>기초 문법부터 체계적 정리</li>
              <li>고등 필수 어휘 암기 훈련</li>
              <li>다양한 기출 변형 문제</li>
              <li>Intensive GRAMMAR/READING</li>
              <li>3월 첫째 주 모의 중간고사</li>
            </FeatureList>
          </SubjectCard>

          <SubjectCard color="#95e1d3">
            <SubjectIcon>➗</SubjectIcon>
            <SubjectTitle color="#95e1d3">수학 완전 정복</SubjectTitle>
            <SubjectDescription>
              절대적 학습량 + 단계별 훈련으로 고득점 달성
            </SubjectDescription>
            <FeatureList>
              <li>공통수학 + 기하 특강</li>
              <li>교과서부터 기출까지 단계별</li>
              <li>고난도 변형 문제 대비</li>
              <li>절대적 학습량 확보</li>
              <li>3월 첫째 주 모의 중간고사</li>
            </FeatureList>
          </SubjectCard>

          <SubjectCard color="#f38181">
            <SubjectIcon>🔬</SubjectIcon>
            <SubjectTitle color="#f38181">통합과학 선행</SubjectTitle>
            <SubjectDescription>
              레벨미업 자체 교재로 첫 단추를 제대로!
            </SubjectDescription>
            <FeatureList>
              <li>자체 제작 교재 사용</li>
              <li>과학 비법 노트 제공</li>
              <li>체계적 겨울방학 훈련</li>
              <li>수준별 맞춤 지도</li>
              <li>3월 첫째 주 모의 중간고사</li>
            </FeatureList>
          </SubjectCard>
        </SubjectGrid>

        <BenefitsSection>
          <SectionTitle>✨ 특강의 장점</SectionTitle>
          <SectionSubtitle>
            레벨미업 예비고1 특강만의 차별화된 시스템
          </SectionSubtitle>
          
          <BenefitsGrid>
            <BenefitCard>
              <div className="icon">📚</div>
              <h3>체계적 커리큘럼</h3>
              <p>12월~3월까지 4개월 완성<br />단계별 로드맵 제공</p>
            </BenefitCard>
            
            <BenefitCard>
              <div className="icon">👨‍🏫</div>
              <h3>수준별 지도</h3>
              <p>레벨테스트 후 반 배정<br />개인별 맞춤 학습</p>
            </BenefitCard>
            
            <BenefitCard>
              <div className="icon">📝</div>
              <h3>미리 중간고사</h3>
              <p>3월 첫째 주 실전 시험<br />과목별 1/2/3등 시상</p>
            </BenefitCard>
            
            <BenefitCard>
              <div className="icon">💯</div>
              <h3>자체 교재</h3>
              <p>레벨미업 제작 교재<br />핵심만 쏙쏙 정리</p>
            </BenefitCard>
            
            <BenefitCard>
              <div className="icon">🎯</div>
              <h3>무료 상담</h3>
              <p>수강 여부 관계없이<br />학습 상담 진행</p>
            </BenefitCard>
            
            <BenefitCard>
              <div className="icon">🏆</div>
              <h3>예비 명예의 전당</h3>
              <p>최우수상/우수상/도약상<br />성취에 따른 시상</p>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>

        <CTASection>
          <CTATitle>🚀 지금 바로 시작하세요!</CTATitle>
          <CTAText>
            쪼렙이들의 만렙 실력을 위한 겨울방학 훈련<br />
            레벨미업과 함께 고등학교 첫 시작을 완벽하게!
          </CTAText>
          
          <ButtonGroup>
            <CTAButton href="tel:032-322-0592" primary>
              📞 전화 상담: 032-322-0592
            </CTAButton>
            <CTAButton href="/consulting">
              💬 온라인 상담 신청
            </CTAButton>
          </ButtonGroup>
          
          <div style={{ marginTop: '30px', fontSize: '1.1rem', opacity: 0.9 }}>
            <p>📍 신중동역 4번 출구 방향 | 중동프라자 6층</p>
            <p>📱 010-2406-0591</p>
          </div>
        </CTASection>
      </Container>
    </PageWrapper>
  );
};

export default PreHighSchool;
