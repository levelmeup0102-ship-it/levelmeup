import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '../theme';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  
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
  margin-bottom: 40px;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

const TabContainer = styled.div`
  margin: 0 0 50px;
`;

const TabList = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  min-width: 120px;
  padding: 16px 24px;
  background: ${props => props.$active ? '#1a2332' : '#f5f5f5'};
  border: none;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: ${props => props.$active ? '700' : '600'};
  color: ${props => props.$active ? '#ffffff' : '#666'};
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.$active ? '#2a3442' : '#e8e8e8'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 4px);
    min-width: 100px;
    font-size: 0.95rem;
    padding: 14px 18px;
  }
`;

const TabContent = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
`;

const TeacherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeacherCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: all 0.3s;
  border-left: 4px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
    border-left-color: ${colors.green.primary};
  }
`;

const TeacherName = styled.h3`
  font-size: 1.9rem;
  margin-bottom: 10px;
  color: #1a1a1a;
  font-weight: 700;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

const TeacherGrade = styled.div`
  font-size: 1.2rem;
  color: ${colors.green.primary};
  font-weight: 600;
  margin-bottom: 14px;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

const TeacherDescription = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.05rem;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  white-space: pre-line;
`;



const Teachers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('korean');

  const subjects = [
    {
      id: 'korean',
      icon: '📘',
      title: '국어',
      teachers: [
        {
          name: '김재광 선생님',
          grade: '중등 국어',
          subtitle: '중등 기초·심화 전담 + ICC 보충관리',
          description: `중등 국어 전 학년을 담당하며,
어휘·문법·문학의 기초부터 심화까지 단계적으로 지도합니다.
이론 학습 후 문제 적용과 반복 훈련을 통해
국어 기본기를 안정적으로 완성하는 수업을 진행합니다.
ICC 보충 학습을 통해 학습 누락 없이 관리합니다.`
        },
        {
          name: '김단비 선생님',
          grade: '고등 국어',
          subtitle: '내신 선행 · 수능 기출·유형 집중',
          description: `고등 국어 전담 강사로,
고1 내신 선행부터 고3 수능 대비까지 연계 지도합니다.
문법·독서·문학을 기출 중심으로 정리하여
내신과 수능을 동시에 대비할 수 있도록 설계된 수업을 진행합니다.
고3 선택과목 특강까지 체계적으로 운영합니다.`
        }
      ]
    },
    {
      id: 'math',
      icon: '📐',
      title: '수학',
      teachers: [
        {
          name: '문혜련 선생님',
          grade: '중등 수학',
          subtitle: '중등 선행 개념 · 유형문풀 · 관리형 수업',
          description: `중등 수학 전담 강사로,
학기 선행 개념 학습과 유형별 문제풀이를 병행합니다.
과제·테스트·보충으로 이어지는 관리형 수업을 통해
개념 이해부터 실전 적용까지 꼼꼼하게 지도합니다.
중등 수학 기초를 탄탄히 다지는 데 중점을 둡니다.`
        },
        {
          name: '박재현 선생님',
          grade: '고등 수학',
          subtitle: '대수·기하·미적·확통 선택과목 전담',
          description: `고등 수학 전담 강사로,
공통수학부터 대수·기하·미적분·확률과 통계까지 담당합니다.
선행 개념 정리 후 유형별 문제풀이를 통해
내신과 수능 선택과목을 체계적으로 대비합니다.
고등 수학 전반을 장기적으로 설계하는 수업을 진행합니다.`
        }
      ]
    },
    {
      id: 'english',
      icon: '📕',
      title: '영어',
      teachers: [
        {
          name: '백지원 선생님',
          grade: '중등 영어',
          subtitle: '중등 기초·문법 중심 + 고등 문법 연결',
          description: `중등 영어 기초 과정을 담당하며,
단어·문법·기본 독해를 중심으로 수업을 진행합니다.
중등 영어의 핵심 구조를 정리한 뒤
고등 영어 문법으로 자연스럽게 연결합니다.
기초가 부족한 학생도 안정적으로 따라올 수 있도록 지도합니다.`
        },
        {
          name: '김유정 선생님',
          grade: '중등 영어',
          subtitle: '중등 레벨별 심화 · 상위권 독해',
          description: `중등 영어 레벨별 심화 과정을 담당합니다.
문법 이해를 바탕으로 독해 난도를 점진적으로 높이며
중등 상위권 학생을 위한 심화 학습을 진행합니다.
레벨별 분반 수업으로 학습 효율을 극대화합니다.`
        },
        {
          name: '최아영 선생님',
          grade: '고등 영어',
          subtitle: '내신 독해 중심 · 학교별 대비',
          description: `고등 영어 내신 대비를 담당합니다.
학교 시험에 자주 출제되는 지문을 중심으로
독해 구조 분석과 정확한 해석을 지도합니다.
학교별 내신 범위에 맞춘 수업으로 실전 대비를 강화합니다.`
        },
        {
          name: '조서정 선생님',
          grade: '고등 영어',
          subtitle: '지필·내신 대비 · 기출 기반 수업',
          description: `고등 영어 내신 및 지필 평가 대비를 담당합니다.
기출 지문과 학교별 출제 경향을 반영하여
시험에 바로 적용 가능한 수업을 진행합니다.
내신 성적 향상을 목표로 한 실전 중심 지도에 강점이 있습니다.`
        },
        {
          name: '구태림 선생님',
          grade: '고등 영어',
          subtitle: '내신 문법·독해 + 수능 기출·주간 모의',
          description: `고등 영어 내신과 수능을 모두 담당합니다.
내신에서는 문법과 독해를 균형 있게 지도하며,
수능에서는 기출 분석과 수능특강 연계를 통해
실전 독해 능력과 시간 관리 능력을 함께 훈련합니다.
주간 모의고사와 특강으로 수능 실전 감각을 지속적으로 점검합니다.`
        }
      ]
    },
    {
      id: 'science',
      icon: '🔬',
      title: '과학',
      teachers: [
        {
          name: '신초이 선생님',
          grade: '중등·고등 과학',
          subtitle: '내신 선행 · 개념 중심 수업',
          description: `중등 과학과 고등 통합과학을 담당합니다.
내신 선행을 중심으로 개념 이해를 확실히 다진 뒤
문제 적용을 통해 실력을 완성합니다.
과학 과목을 체계적으로 정리하고 싶은 학생에게 적합한 수업입니다.`
        }
      ]
    },
    {
      id: 'management',
      icon: '🏫',
      title: '학습관리',
      teachers: [
        {
          name: '최윤서 선생님',
          grade: '중등·고등 학습관리',
          subtitle: '윈터스쿨 · 코어학습제 전담',
          description: `중등부터 고등까지 학습관리 전담 강사입니다.
윈터스쿨과 학기 중 코어학습제를 통해
자습 관리, 학습 계획 수립, 개별 상담을 진행합니다.
공부 습관과 학습 흐름을 함께 관리합니다.`
        }
      ]
    }
  ];

  const getCurrentSubject = () => {
    return subjects.find(subject => subject.id === activeTab) || subjects[0];
  };

  const currentSubject = getCurrentSubject();

  return (
    <PageWrapper>
      <PageTitle>강사 소개</PageTitle>
      <PageSubtitle>레벨미업 학원의 과목별 전문 강사진을 소개합니다</PageSubtitle>

      <TabContainer>
        <TabList>
          {subjects.map((subject) => (
            <Tab
              key={subject.id}
              $active={activeTab === subject.id}
              onClick={() => setActiveTab(subject.id)}
            >
              {subject.title}
            </Tab>
          ))}
        </TabList>
      </TabContainer>

      <TabContent>
        <TeacherGrid>
          {currentSubject.teachers.map((teacher, index) => (
            <TeacherCard key={index}>
              <TeacherName>{teacher.name}</TeacherName>
              <TeacherGrade>{teacher.grade}</TeacherGrade>
              <TeacherGrade style={{ color: '#FF6D00', marginBottom: '18px', fontSize: '1.15rem' }}>
                {teacher.subtitle}
              </TeacherGrade>
              <TeacherDescription>{teacher.description}</TeacherDescription>
            </TeacherCard>
          ))}
        </TeacherGrid>
      </TabContent>
    </PageWrapper>
  );
};

export default Teachers;
