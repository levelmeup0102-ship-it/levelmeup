import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '../theme';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #1a1a1a;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, ${colors.green.primary} 0%, #FF6D00 100%);
    margin: 20px auto;
    border-radius: 3px;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 50px;
`;

const MainTabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  border-bottom: 2px solid #e0e0e0;
  flex-wrap: wrap;
`;

const MainTab = styled.button<{ active: boolean }>`
  padding: 15px 25px;
  background: ${props => props.active ? 'white' : 'transparent'};
  border: none;
  border-bottom: 3px solid ${props => props.active ? colors.green.primary : 'transparent'};
  font-size: 1.05rem;
  font-weight: ${props => props.active ? '700' : '500'};
  color: ${props => props.active ? colors.green.primary : '#666'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: ${colors.green.primary};
    background: #fafafa;
  }
  
  @media (max-width: 768px) {
    padding: 12px 18px;
    font-size: 0.95rem;
  }
`;

const SubTabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const SubTab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background: ${props => props.active ? colors.green.primary : 'white'};
  border: 2px solid ${props => props.active ? colors.green.primary : '#ddd'};
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '600' : '500'};
  color: ${props => props.active ? 'white' : '#666'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: ${colors.green.primary};
    color: ${props => props.active ? 'white' : colors.green.primary};
  }
`;

const ContentSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  animation: fadeIn 0.3s ease-in;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: #1a1a1a;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
`;

const SectionContent = styled.div`
  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
    
    li {
      padding: 10px 0;
      color: #444;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      line-height: 1.7;
      
      &::before {
        content: '•';
        color: ${colors.green.primary};
        font-weight: bold;
        font-size: 1.3rem;
        margin-top: -2px;
      }
    }
  }
`;

const ClassTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  
  thead {
    background: linear-gradient(135deg, ${colors.green.primary} 0%, #66BB6A 100%);
    color: white;
    
    th {
      padding: 15px 12px;
      text-align: center;
      font-weight: 600;
      font-size: 0.95rem;
      border: 1px solid rgba(255,255,255,0.2);
    }
  }
  
  tbody {
    tr {
      border-bottom: 1px solid #e0e0e0;
      
      &:hover {
        background: #f9f9f9;
      }
      
      &:last-child {
        border-bottom: none;
      }
    }
    
    td {
      padding: 14px 12px;
      text-align: center;
      font-size: 0.9rem;
      color: #333;
      border-right: 1px solid #f0f0f0;
      
      &:last-child {
        border-right: none;
      }
      
      &:first-of-type {
        font-weight: 600;
        color: #1a1a1a;
      }
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    
    thead th,
    tbody td {
      padding: 10px 8px;
      font-size: 0.85rem;
    }
  }
`;

const CommonSystemSection = styled.div`
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 109, 0, 0.05) 100%);
  border: 1px solid rgba(76, 175, 80, 0.15);
  border-radius: 12px;
  padding: 30px 40px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

const CommonSystemTitle = styled.h3`
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 600;
`;

const CommonSystemDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const ProcessDiagramSection = styled.div`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 40px 30px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ProcessTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 700;
`;

const ProcessSubtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 35px;
  line-height: 1.6;
`;

const DiagramContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  max-width: 100%;
  margin: 0 auto;
  overflow-x: auto;
  padding: 10px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const DiagramRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
`;

const ProcessBox = styled.div<{ primary?: boolean }>`
  background: ${props => props.primary ? '#f0f7f4' : 'white'};
  color: #2c3e50;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  min-width: 140px;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 14px 20px;
    min-width: 120px;
  }
`;

const Arrow = styled.div`
  font-size: 1.5rem;
  color: #b0b0b0;
  font-weight: 300;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const VerticalArrow = styled.div`
  font-size: 1.8rem;
  color: #b0b0b0;
  font-weight: 300;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const SystemGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const SystemItem = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e0e0e0;
  transition: all 0.3s;
  width: 180px;
  flex-shrink: 0;
  
  &:hover {
    border-color: ${colors.green.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.15);
  }
  
  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SystemLabel = styled.div`
  font-size: 0.95rem;
  color: #1a1a1a;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const SystemDesc = styled.div`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  margin-top: 8px;
`;

const ICCSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  
  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

const ICCTitle = styled.h2`
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 15px;
  text-align: center;
`;

const ICCSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.05rem;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ICCGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

const ICCCard = styled.div`
  background: #fafafa;
  padding: 25px;
  border-radius: 10px;
  border-left: 4px solid ${colors.green.primary};
  
  h3 {
    font-size: 1.2rem;
    color: #1a1a1a;
    margin-bottom: 12px;
  }
  
  p {
    color: #555;
    line-height: 1.7;
    font-size: 0.95rem;
  }
`;

type GradeTab = 'middle' | 'high1' | 'high2' | 'high3' | 'icc' | null;
type SubjectTab = 'korean' | 'english' | 'math' | 'science';

const Curriculum: React.FC = () => {
  const location = useLocation();
  const [activeGrade, setActiveGrade] = useState<GradeTab>('middle');
  const [activeSubject, setActiveSubject] = useState<SubjectTab>('korean');
  
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'process') {
      // 학습 프로세스로 스크롤
      setTimeout(() => {
        const processSection = document.querySelector('[data-process-section]');
        if (processSection) {
          processSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (hash === 'subjects') {
      // 과목 소개로 스크롤
      setTimeout(() => {
        const subjectSection = document.querySelector('[data-subject-section]');
        if (subjectSection) {
          subjectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const curriculumData = {
    middle: {
      korean: {
        title: '중등 국어',
        content: '중학교 국어의 기초를 다지고, 문학 작품 감상 및 비문학 독해 기본기를 강화합니다.',
        points: [
          '문학 작품 감상 및 해석 연습',
          '비문학 독해 기본기 강화',
          '어휘력 확장 및 문법 개념 정리',
          '내신 대비 맞춤 학습'
        ]
      },
      english: {
        title: '중등 영어',
        content: '중학 영어의 핵심 문법을 체계적으로 정리하고, 독해 능력을 향상시킵니다.',
        points: [
          '핵심 문법 체계적 정리',
          '독해 속도 및 정확도 향상',
          '어휘력 집중 강화',
          '내신 및 모의고사 대비'
        ]
      },
      math: {
        title: '중등 수학',
        content: '중학 수학의 개념을 정확히 이해하고, 유형별 문제 풀이를 통해 고등 수학으로 연계합니다.',
        points: [
          '개념 정확한 이해 및 정리',
          '유형별 문제 풀이 연습',
          '심화 문제 해결 능력 배양',
          '고등 수학 연계 학습'
        ]
      }
    },
    high1: {
      korean: {
        title: '고1 국어',
        content: '고등학교 국어의 기초를 다지고, 문학 및 비문학 심화 독해 능력을 향상시킵니다.',
        points: [
          '고등 문학 작품 분석 및 감상',
          '비문학 독해 전략 학습',
          '문법 개념 심화 정리',
          '내신 및 모의고사 대비'
        ]
      },
      english: {
        title: '고1 영어',
        content: '내신 대비 기본기를 완성하고, 문법·독해·서술형을 체계적으로 학습합니다.',
        points: [
          '학교별 내신 출제 경향 분석 기반 학습',
          '문법 개념 정리 및 지문 구조 이해',
          '서술형·변형 문항 집중 대비',
          '자체 제작 교재와 반복 회독 방식',
          '예상 모의고사를 통한 시험 대응력 강화'
        ]
      },
      math: {
        title: '고1 수학',
        content: '수학(상), 수학(하)의 개념을 완성하고, 유형별 문제 풀이 전략을 학습합니다.',
        points: [
          '수학(상), 수학(하) 개념 완성',
          '유형별 문제 풀이 전략',
          '심화 문제 대응 능력 향상',
          '내신 및 모의고사 대비'
        ]
      },
      science: {
        title: '고1 과학',
        content: '통합과학의 개념을 체계적으로 정리하고, 실험 및 탐구 활동을 분석합니다.',
        points: [
          '통합과학 개념 체계 정리',
          '실험 및 탐구 활동 분석',
          '과학적 문제 해결 능력 배양',
          '내신 대비 맞춤 학습'
        ]
      }
    },
    high2: {
      korean: {
        title: '고2 국어',
        content: '심화 문학 분석과 고난도 비문학 독해 전략을 학습하며, 수능과 연계합니다.',
        points: [
          '문학 심화 분석 및 적용',
          '비문학 고난도 독해 전략',
          '화법과 작문 실전 대비',
          '내신 및 수능 모의고사 대비'
        ]
      },
      english: {
        title: '고2 영어',
        content: '내신 대비 방식은 고1과 동일하게 유지하되, 난이도와 사고 수준을 높여 수능과 연계합니다.',
        points: [
          '학교별 출제 경향 분석 기반 학습',
          '고난도 변형 문항 집중 대비',
          '수능형 사고 문항 학습 (빈칸/배열/요약)',
          '내신과 수능 동시 대비',
          '고3 수능으로의 자연스러운 연결'
        ]
      },
      math: {
        title: '고2 수학',
        content: '수학I, 수학II, 확률과 통계, 미적분 등 선택 과목을 체계적으로 학습합니다.',
        points: [
          '선택 과목 개념 완성',
          '킬러 문제 대응 전략',
          '실전 문제 풀이 연습',
          '내신 및 수능 모의고사 대비'
        ]
      },
      science: {
        title: '고2 과학',
        content: '물리학, 화학, 생명과학, 지구과학 중 선택 과목을 심화 학습합니다.',
        points: [
          '선택 과목 개념 심화 학습',
          '실험 문제 분석 능력 향상',
          '고난도 문제 해결 전략',
          '내신 및 수능 모의고사 대비'
        ]
      }
    },
    high3: {
      korean: {
        title: '고3 국어',
        content: '수능 국어 최종 마무리 및 실전 감각을 익히며, 목표 등급 달성을 위한 집중 학습을 진행합니다.',
        points: [
          '수능 전 영역 실전 대비',
          '고난도 문제 집중 훈련',
          '시간 관리 및 실전 전략',
          '약점 보완 맞춤 학습'
        ]
      },
      english: {
        title: '고3 영어',
        content: '수능 영어 1등급을 목표로 모든 유형을 완벽히 마스터합니다.',
        points: [
          '수능 전 유형 완벽 대비',
          '고난도 문제 집중 훈련',
          '실전 시간 관리 훈련',
          '약점 영역 집중 보완'
        ]
      },
      math: {
        title: '고3 수학',
        content: '수능 수학 고득점을 위한 실전 문제 풀이 및 전략을 집중적으로 훈련합니다.',
        points: [
          '수능 실전 문제 풀이',
          '킬러 문제 완벽 대응',
          '시간 배분 전략 훈련',
          '약점 유형 집중 보완'
        ]
      }
    }
  };

  const iccContent = {
    title: 'I.C.C 개인관리 시스템',
    subtitle: 'Individual Care & Coaching - 학생 개개인의 학습을 체계적으로 관리하고 분석하는 레벨미업만의 학습 관리 시스템입니다.',
    cards: [
      {
        title: '학생별 학습 진단',
        description: '입학 시 레벨테스트를 통해 현재 학습 수준을 정확히 파악하고, 학생에게 맞는 학습 계획을 수립합니다.'
      },
      {
        title: '주간 테스트 및 성취도 점검',
        description: '매주 정기 테스트를 실시하여 학습 진도와 이해도를 점검하고, 즉시 피드백을 제공합니다.'
      },
      {
        title: '성적 추적 및 약점 분석',
        description: '모든 테스트와 시험 결과를 데이터화하여 성적 변화를 추적하고, 취약 영역을 정확히 분석합니다.'
      },
      {
        title: '학습 피드백 및 방향 조정',
        description: '분석 결과를 바탕으로 학습 방향을 조정하고, 개별 맞춤 피드백을 통해 효과적인 학습을 지원합니다.'
      },
      {
        title: '학부모 상담 및 관리',
        description: '정기적으로 학부모님과 상담하여 학생의 학습 상황을 공유하고, 함께 학습 방향을 논의합니다.'
      },
      {
        title: '목표 설정 및 동기 부여',
        description: '단기 및 장기 목표를 설정하고, 목표 달성 과정을 관리하며 지속적인 학습 동기를 부여합니다.'
      }
    ]
  };

  return (
    <PageWrapper>
      <PageTitle>커리큘럼</PageTitle>
      <PageSubtitle>학년별·과목별 체계적인 학습 시스템</PageSubtitle>

      <CommonSystemSection>
        <CommonSystemTitle>레벨미업 공통 학습 운영 시스템</CommonSystemTitle>
        <CommonSystemDesc>수업–테스트–피드백–개인관리가 끊기지 않도록 설계된 레벨미업의 학습 운영 구조입니다.</CommonSystemDesc>
        <SystemGrid>
          <SystemItem>
            <SystemLabel>내신 N회독<br />학습 시스템</SystemLabel>
            <SystemDesc>학교 시험 범위에 맞춰 이해–적용–점검을 반복하는 단계별 학습 구조입니다.</SystemDesc>
          </SystemItem>
          <SystemItem>
            <SystemLabel>I.C.C<br />개인관리 시스템</SystemLabel>
            <SystemDesc>학생별 취약 포인트를 분석해 보완 과제와 학습 방향을 개별 관리합니다.</SystemDesc>
          </SystemItem>
          <SystemItem>
            <SystemLabel>자체 제작<br />교재</SystemLabel>
            <SystemDesc>학교·시험 유형에 맞춰 직접 제작한 전용 교재로 수업을 진행합니다.</SystemDesc>
          </SystemItem>
          <SystemItem>
            <SystemLabel>WEEKLY<br />모의고사</SystemLabel>
            <SystemDesc>주간 단위 점검을 통해 학습 이해도와 실전 적용력을 확인합니다.</SystemDesc>
          </SystemItem>
          <SystemItem>
            <SystemLabel>Daily Test<br />운영</SystemLabel>
            <SystemDesc>매 수업 전·후 짧은 테스트로 학습 누락을 즉시 점검합니다.</SystemDesc>
          </SystemItem>
        </SystemGrid>
      </CommonSystemSection>

      <ProcessDiagramSection data-process-section>
        <ProcessTitle>학습 프로세스</ProcessTitle>
        <ProcessSubtitle>중등·고등 전 학년에 공통 적용되는 체계적인 학습 프로세스입니다</ProcessSubtitle>
        
        <DiagramContainer>
          {/* 첫 번째 그룹: 예습과제 + Weekly → Daily Test */}
          <DiagramRow style={{flexDirection: 'column', gap: '10px'}}>
            <ProcessBox>정규수업<br />예습과제</ProcessBox>
            <ProcessBox>Weekly<br />모의고사</ProcessBox>
          </DiagramRow>

          <Arrow>→</Arrow>

          <ProcessBox primary>Daily Test</ProcessBox>

          <Arrow>→</Arrow>

          {/* 두 번째 그룹: 정규수업, 모의고사 리뷰, 과제 리뷰 */}
          <DiagramRow style={{flexDirection: 'column', gap: '10px'}}>
            <ProcessBox>정규수업</ProcessBox>
            <ProcessBox>모의고사<br />리뷰</ProcessBox>
            <ProcessBox>과제<br />리뷰</ProcessBox>
          </DiagramRow>

          <Arrow>→</Arrow>

          <ProcessBox primary>I.C.C<br />개인 집중 코칭</ProcessBox>

          <Arrow>→</Arrow>

          <ProcessBox>복습과제</ProcessBox>
        </DiagramContainer>
      </ProcessDiagramSection>

      <MainTabContainer data-subject-section>
        <MainTab active={activeGrade === 'middle'} onClick={() => { setActiveGrade('middle'); setActiveSubject('korean'); }}>
          중등
        </MainTab>
        <MainTab active={activeGrade === 'high1'} onClick={() => { setActiveGrade('high1'); setActiveSubject('korean'); }}>
          고1
        </MainTab>
        <MainTab active={activeGrade === 'high2'} onClick={() => { setActiveGrade('high2'); setActiveSubject('korean'); }}>
          고2
        </MainTab>
        <MainTab active={activeGrade === 'high3'} onClick={() => { setActiveGrade('high3'); setActiveSubject('korean'); }}>
          고3
        </MainTab>
        <MainTab active={activeGrade === 'icc'} onClick={() => setActiveGrade('icc')}>
          I.C.C 개인관리
        </MainTab>
      </MainTabContainer>

      {activeGrade !== null && activeGrade !== 'icc' && (
        <>
          <SubTabContainer>
            <SubTab active={activeSubject === 'korean'} onClick={() => setActiveSubject('korean')}>
              국어
            </SubTab>
            <SubTab active={activeSubject === 'english'} onClick={() => setActiveSubject('english')}>
              영어
            </SubTab>
            <SubTab active={activeSubject === 'math'} onClick={() => setActiveSubject('math')}>
              수학
            </SubTab>
            {(activeGrade === 'high1' || activeGrade === 'high2') && (
              <SubTab active={activeSubject === 'science'} onClick={() => setActiveSubject('science')}>
                과학
              </SubTab>
            )}
          </SubTabContainer>

          <ContentSection>
            {activeGrade && curriculumData[activeGrade] && curriculumData[activeGrade][activeSubject as keyof typeof curriculumData[typeof activeGrade]] && (
              <>
                <SectionTitle>{(curriculumData[activeGrade][activeSubject as keyof typeof curriculumData[typeof activeGrade]] as any).title}</SectionTitle>
                <SectionContent>
                  <p>{(curriculumData[activeGrade][activeSubject as keyof typeof curriculumData[typeof activeGrade]] as any).content}</p>
                  <ul>
                    {(curriculumData[activeGrade][activeSubject as keyof typeof curriculumData[typeof activeGrade]] as any).points.map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </SectionContent>
              </>
            )}
          </ContentSection>
        </>
      )}

      {activeGrade === 'icc' && (
        <ICCSection>
          <ICCTitle>{iccContent.title}</ICCTitle>
          <ICCSubtitle>{iccContent.subtitle}</ICCSubtitle>
          <ICCGrid>
            {iccContent.cards.map((card, index) => (
              <ICCCard key={index}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </ICCCard>
            ))}
          </ICCGrid>
        </ICCSection>
      )}
    </PageWrapper>
  );
};

export default Curriculum;
