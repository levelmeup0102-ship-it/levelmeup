import React, { useEffect } from 'react';
import { colors, gradients } from '../theme';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';

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
    background: #17B7A6;
    margin: 20px auto;
    border-radius: 3px;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 60px;
`;

const Section = styled.section`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #1a1a1a;
`;

const AchievementTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
  
  thead {
    background: #17B7A6;
    color: white;
  }
  
  th, td {
    padding: 18px 15px;
    text-align: center;
    border-bottom: 1px solid #e9ecef;
  }
  
  th {
    font-weight: bold;
    font-size: 1.05rem;
  }
  
  tbody tr {
    transition: background 0.3s;
    
    &:hover {
      background: #f8f9fa;
    }
    
    &:last-child td {
      border-bottom: none;
    }
  }
  
  td {
    font-size: 1rem;
    color: #333;
  }
  
  .highlight {
    background: rgba(23, 183, 166, 0.1);
    font-weight: bold;
    color: #17B7A6;
  }
  
  .score {
    color: #17B7A6;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const BackButton = styled.button`
  display: inline-block;
  margin-bottom: 30px;
  padding: 12px 30px;
  background: #17B7A6;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: #0E8F86;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(23, 183, 166, 0.3);
  }
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border-left: 5px solid #17B7A6;
  margin-bottom: 30px;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #17B7A6;
  }
  
  p {
    line-height: 1.8;
    color: #444;
    margin-bottom: 10px;
  }
`;

// Learning Flow Infographic Components
const LearningFlowSection = styled.section`
  background: linear-gradient(135deg, #f8fffe 0%, #ffffff 100%);
  padding: 50px 40px;
  border-radius: 20px;
  margin-bottom: 60px;
  border: 2px solid rgba(23, 183, 166, 0.1);
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const FlowTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 50px;
  font-weight: 700;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
`;

const FlowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const FlowStep = styled.div`
  flex: 1;
  background: white;
  border-radius: 15px;
  padding: 30px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(23, 183, 166, 0.15);
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(23, 183, 166, 0.2);
    border-color: #17B7A6;
  }
  
  &::after {
    content: '→';
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #17B7A6;
    font-weight: 300;
    
    @media (max-width: 968px) {
      content: '↓';
      right: auto;
      top: auto;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  &:last-child::after {
    display: none;
  }
  
  @media (max-width: 968px) {
    padding: 25px 20px;
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #17B7A6 0%, #0E8F86 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(23, 183, 166, 0.3);
`;

const StepTitle = styled.h3`
  font-size: 1.1rem;
  color: #17B7A6;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.3;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    min-height: auto;
  }
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StepIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
  opacity: 0.8;
`;

// New Template Components
const TopTagline = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #17B7A6;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.3px;
`;

const SchoolOneLiner = styled.div`
  text-align: center;
  font-size: 1.15rem;
  color: #555;
  margin: 30px auto;
  padding: 25px 30px;
  background: linear-gradient(135deg, #f8fffe 0%, #ffffff 100%);
  border-left: 4px solid #17B7A6;
  border-radius: 8px;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 20px 24px;
  }
`;

const ManagementSection = styled.section`
  background: #F7F9FB;
  padding: 50px 40px;
  border-radius: 20px;
  margin: 60px 0;
  
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const ManagementTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 40px;
  color: #1a1a1a;
  font-weight: 700;
`;

const ManagementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ManagementCard = styled.div`
  background: white;
  padding: 30px 24px;
  border-radius: 15px;
  border: 1px solid #E8EEF3;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(23, 183, 166, 0.15);
    border-color: #17B7A6;
  }
`;

const ManagementIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ManagementCardTitle = styled.h3`
  font-size: 1.1rem;
  color: #17B7A6;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const ManagementCardDesc = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const BrandClosing = styled.div`
  text-align: center;
  padding: 50px 30px;
  margin: 60px 0 0;
  background: linear-gradient(135deg, #0B1B2A 0%, #102B3F 100%);
  border-radius: 20px;
  color: white;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
    font-style: italic;
  }
  
  p {
    font-size: 1.1rem;
    color: #D7DEE7;
    margin: 0;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    padding: 40px 24px;
    
    h3 {
      font-size: 1.2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

interface SchoolData {
  name: string;
  fullName: string;
  description: string;
  keyPoint?: string; // School-specific one-liner
  achievements: Array<{
    year: string;
    semester: string;
    exam: string;
    subject: string;
    score: string;
    students?: string;
  }>;
  examAnalysis?: {
    title: string;
    difficulty: string;
    keyPoints: string[];
    strategies: string[];
  }[];
  features: string[];
}

const schoolsData: Record<string, SchoolData> = {
  '심원고': {
    name: '심원고',
    fullName: '심원고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '심원고는 어휘 난이도와 지문 분석이 성적을 가릅니다.',
    achievements: [
      {
        year: '2024',
        semester: '2학기',
        exam: '기말고사',
        subject: '영어',
        score: '100점 4명 배출',
        students: '레벨미업 재원생'
      },
      {
        year: '2024',
        semester: '2학기',
        exam: '중간고사',
        subject: '영어',
        score: '7명 100점 중 7명',
        students: '레벨미업 재원생'
      },
      {
        year: '2024',
        semester: '1학기',
        exam: '기말고사',
        subject: '영어',
        score: '만점 다수',
        students: '내신 대비반'
      },
      {
        year: '2023',
        semester: '1학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점',
        students: '김*현 학생'
      }
    ],
    examAnalysis: [
      {
        title: '심원고1 25년 2학기 기말고사 영어 시험 분석',
        difficulty: '평이한 난이도 - 객관식만 출제, 전형적인 내신형 스타일',
        keyPoints: [
          '모든 문항이 객관식으로 구성 (서술형 없음)',
          '전반적으로 평이한 난이도로 출제',
          '기존 심원고 경향성 유지: 너무 어렵지도 쉽지도 않은 전형적 내신형',
          '함축 의미 유형이 속담 선지로 구성 - 실수 유발',
          '빈칸 유형 오답 선지가 원문과 형태 유사 - 주의 필요',
          '삽입/순서/흐름 유형에서 원문 변형 출제 포인트 활용',
          '어법 유형이 가장 난이도 높게 출제 (가정법, 수일치, 관계사, 자타동사)',
          '레벨미업 적중 문항 24문항 다수 (객관식 1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24번 등)'
        ],
        strategies: [
          '꼼꼼한 지문 숙지 필수 - 빨리 풀고 넘어가면 실수 유발',
          '많은 기출 문제와 변형 문제 풀이로 출제 포인트 파악',
          '실전 감각 늘리는 연습 중요',
          '어법 유형 집중 대비: 가정법, 수일치, 관계사, 자동사/타동사',
          '속담 선지 대비: 함축 의미 유형 숙지',
          '빈칸 유형 대비: 원문과 형태 유사한 오답 선지 주의',
          '레벨미업 심원고 맞춤 커리큘럼: 3회독 + Final Check + 예상 모의시험 1,2차, Final'
        ]
      },
      {
        title: '2024-2학기 기말고사 영어 시험 분석',
        difficulty: '평이한 난이도 - 실수 방지가 핵심',
        keyPoints: [
          '객관식과 서술형 모든 문항의 난이도가 상당히 평이',
          '서술형에서 새로운 유형 출제되었으나 기본 구조 분석 가능하면 해결',
          '2학기 중간/기말고사에서 한 문제라도 오답시 안정적 1등급 어려움',
          '레벨미업 예상모의시험 24문항 중 14문제 적중'
        ],
        strategies: [
          '영어 단어 학습에 더 많은 시간 투자 필요',
          '처음 보는 지문의 해석과 문장구조 해석 연습',
          '모의고사 독해 연습을 통한 실전 대비',
          '심원고 함정 보기 유의 (부정어, 반의어)',
          '논술형은 조건과 어법에 맞춰 기본 문장 영작 연습 필수'
        ]
      },
      {
        title: '2024-2학기 중간고사 영어 시험 분석',
        difficulty: '지난 1학기 기말고사와 비슷한 난이도',
        keyPoints: [
          '비슷한 난이도의 지난 시험에서 100점 7명 나왔던 점 고려',
          '이번 시험에서도 안정적인 고득점 가능',
          '기본 개념과 문법이 탄탄하면 충분히 만점 가능'
        ],
        strategies: [
          '시험범위 지문에 대한 완벽한 숙지',
          '변형 문제 다양하게 풀어보기',
          '서술형 대비 영작 연습'
        ]
      }
    ],
    features: [
      '심원고 전용 내신 대비반 운영',
      '학교별 맞춤 교재 제작 (기출 완벽 분석)',
      '예상모의시험 3회차 진행 (높은 적중률)',
      '서술형 문항 집중 대비',
      '시험 범위 완벽 정리 및 노트 정리 지도',
      '소규모 그룹 수업으로 개별 관리'
    ]
  },
  '정명고': {
    name: '정명고',
    fullName: '정명고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '정명고는 고난이도 어휘와 외부지문 대비가 핵심입니다.',
    achievements: [
      {
        year: '2024',
        semester: '2학기',
        exam: '기말고사',
        subject: '영어',
        score: '고3 수준 고난이도',
        students: '변별력 높은 시험'
      },
      {
        year: '2024',
        semester: '2학기',
        exam: '중간고사',
        subject: '영어',
        score: '외부지문 고난이도',
        students: '1등급 변별 문항'
      },
      {
        year: '2024',
        semester: '1학기',
        exam: '중간고사',
        subject: '영어',
        score: '100점 7명 중 4명',
        students: '레벨미업 학생'
      },
      {
        year: '2023',
        semester: '1학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점',
        students: '김*원 학생'
      }
    ],
    examAnalysis: [
      {
        title: '2024-2학기 중간고사 영어 시험 분석',
        difficulty: '고3 수준 독해 + 고난이도 어휘 - 최상위권 변별',
        keyPoints: [
          '객관식 20번: 2018학년도 수능특강 영어 독해연습 지문 (고3 수준)',
          '변형 어휘 "affinity" 등장 - 모의고사에서도 자주 등장하지 않는 난이도 높은 어휘',
          '객관식 22번: 2018학년도 수능특강 외부지문 출제',
          '평소 수능 수준의 단어까지 학습한 학생만 정답 가능',
          '레벨미업 예상모의시험에서 객관식 18번 변형 어휘 보기 적중!'
        ],
        strategies: [
          '고1~고2 수준 빈출 단어 필수 학습',
          '고3 수준의 단어장 학습 병행 (정명고 특성상 필수)',
          '단어 뜻만 암기하지 말고 예문과 함께 어감 파악',
          '꾸준한 모의고사 응시로 빈출 단어 노출 높이기',
          '모르는 단어를 정리하며 복습하는 습관',
          '서술형: 직접 영작해보는 연습 (유형이 매년 변화)',
          '중하위권: 70점 목표로 본문 학습 꼼꼼히'
        ]
      },
      {
        title: '2024-1학기 중간고사 영어 시험 분석 (고3)',
        difficulty: '외부지문 제외하고 매우 평이 - 실수 방지 핵심',
        keyPoints: [
          '외부지문 5문항을 제외하고 모두 평이한 난이도',
          '모든 문제를 실수 없이 완벽히 풀어야 고득점',
          '100점 7명 중 4명이 레벨미업 학생'
        ],
        strategies: [
          '시험범위 본문 완벽 숙지',
          '외부지문 대비 모의고사 독해 연습',
          '실수 방지를 위한 꼼꼼한 검토'
        ]
      }
    ],
    features: [
      '정명고 전용 내신 대비반 운영 (가장 많은 재원생)',
      '역대 기출 문제 DB 구축 및 완벽 분석',
      '고난이도 어휘 집중 학습 (고3 수준 단어)',
      '외부지문 대비 실력 향상 프로그램',
      '서술형 다양한 유형 대비',
      '내신 1등급 다수 배출 (검증된 시스템)'
    ]
  },
  '중흥고': {
    name: '중흥고',
    fullName: '중흥고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '중흥고는 빈칸 추론과 어법 문제가 핵심입니다.',
    achievements: [
      {
        semester: '2024-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '빈칸 추론 만점자 다수'
      },
      {
        semester: '2024-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '어법 고득점'
      },
      {
        semester: '2024-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 다수 배출'
      }
    ],
    features: [
      '중흥고 시험 경향 분석',
      '학교별 맞춤 커리큘럼',
      '내신 성적 향상 프로그램',
      '개별 학습 관리',
      '시험 직전 특강 운영'
    ]
  },
  '부천북고': {
    name: '부천북고',
    fullName: '부천북고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '부천북고는 지문 이해 + 선택지 함정이 핵심입니다.',
    achievements: [
      {
        semester: '2024-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '지문 이해 만점자 다수'
      },
      {
        semester: '2024-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '선택지 분석 고득점'
      },
      {
        semester: '2024-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 컷 상승'
      }
    ],
    features: [
      '부천북고 전용 교재',
      '시험 범위별 완벽 정리',
      '서술형 대비 강화',
      '소규모 맞춤 수업',
      '질문 중심 학습법'
    ]
  },
  '덕산고': {
    name: '덕산고',
    fullName: '덕산고등학교',
    description: '부천 지역 내신 대비 학교 - 시험범위 지문 숙지만으로도 높은 점수 가능',
    keyPoint: '덕산고는 꼼꼼한 지문 이해와 다양한 변형 문제 풀이가 핵심입니다.',
    achievements: [
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 1등 배출 + 수강생 전원 성적 상승'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '전교 4등 배출 + 1등급 1명 / 2등급 2명'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '2등급 3명 배출 + 수강생 전원 24등 이내'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '1등급 배출 + 25점 상승 (3등급→1등급)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 달성 + 전교 5등 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        score: '21점 상승'
      }
    ],
    examAnalysis: [
      {
        title: '2024-1학기 중간고사 영어 시험 분석',
        difficulty: '작년 대비 난이도 조금 상승 - 시험범위 꼼꼼히 학습 필수',
        keyPoints: [
          '객관식 19번, 논술형 4번에서 많은 오답 예상',
          '하지만 충분히 맞을 수 있는 문제들',
          '레벨미업 예상 모의고사 3회 진행 - 실제 시험과 상당히 유사한 문항 다수 출제',
          '모의중간고사에서 미리 틀린 것 짚고 넘어간 학생들은 전부 정답'
        ],
        strategies: [
          '시험범위 지문 꼼꼼히 숙지 (객관식 2,3,20번 - 반드시 맞춰야)',
          '단어 변형 없는 문제는 절대 실수 금지',
          '시험범위 안의 단어들과 유의어 반드시 외우기',
          '지문 핵심내용 이해 확인 (객관식 9,10,11,14,19번)',
          '다양한 주제문 확인하고 관련 어휘 함께 학습',
          '많은 변형문제 풀이 필요',
          '고1 빈출 단어 반드시 학습',
          '서술형: 빈칸 영작 유형 대비 (어법에 맞게 문장 쓰기 연습)',
          '지문 내 핵심 문장 확인하고 영작 연습'
        ]
      }
    ],
    features: [
      '덕산고 전용 예상 모의고사 3회 진행 (높은 적중률)',
      '학교별 맞춤 교재',
      '기출 문제 완벽 분석',
      '서술형 영작 집중 연습',
      '소규모 수업으로 개별 관리',
      '시험범위 지문 완벽 정리'
    ]
  },
  '부명고': {
    name: '부명고',
    fullName: '부명고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '부명고는 어휘 난이도와 변형 포인트가 성적을 가릅니다.',
    achievements: [
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 2등 배출 + 신규 원생 전원 성적 상승'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '전교 1등 배출 + 1등급 2명 배출'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '1등급 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '수강생 전원 90점대 이상 (부명고1·2)'
      }
    ],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '부천고': {
    name: '부천고',
    fullName: '부천고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '부천고는 논리적 흐름과 맥락 파악이 성적을 좌우합니다.',
    achievements: [
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '95점 배출 (부천고3)'
      },
      {
        semester: '24-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '93점 배출 (부천고2)'
      },
      {
        semester: '24-1학기',
        exam: '중간고사',
        subject: '수학',
        score: '4등급 → 3등급 상승 (부천고2)'
      }
    ],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '계남고': {
    name: '계남고',
    fullName: '계남고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '계남고는 서술형과 문장 구조 문제가 변별력을 만듭니다.',
    achievements: [
      {
        semester: '2024-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '서술형 만점 다수'
      },
      {
        semester: '2024-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '1등급 컷 상승'
      },
      {
        semester: '2024-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '95점 이상 배출'
      }
    ],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '소명여고': {
    name: '소명여고',
    fullName: '소명여자고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '소명여고는 세부 내용 파악과 서술형 대비가 필수입니다.',
    achievements: [
      {
        semester: '2024-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '내신 1등급 다수'
      },
      {
        semester: '2024-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '평균 90점 이상'
      },
      {
        semester: '2024-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '고득점자 배출'
      }
    ],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '원미고': {
    name: '원미고',
    fullName: '원미고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '원미고는 고난도 어휘와 변형 문제가 변별력을 만듭니다.',
    achievements: [
      {
        semester: '2024-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '어휘 만점자 다수'
      },
      {
        semester: '2024-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '1~2등급 집중 배출'
      },
      {
        semester: '2024-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '평균 성적 향상'
      }
    ],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '중원고': {
    name: '중원고',
    fullName: '중원고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '중원고는 문법과 독해의 균형 잡힌 학습이 핵심입니다.',
    achievements: [
      {
        semester: '2024-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '문법 만점자 다수'
      },
      {
        semester: '2024-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '독해 고득점'
      },
      {
        semester: '2024-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '균형 잡힌 성적 향상'
      }
    ],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '도당고': {
    name: '도당고',
    fullName: '도당고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '도당고는 종합적 사고력과 응용 문제가 성적을 결정합니다.',
    achievements: [
      {
        semester: '2024-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '응용 문제 고득점'
      },
      {
        semester: '2024-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '종합 사고력 향상'
      },
      {
        semester: '2024-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '내신 성적 상승'
      }
    ],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '심원중': {
    name: '심원중',
    fullName: '심원중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [],
    features: [
      '중학교 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  }
};

const SchoolDetail: React.FC = () => {
  const { schoolName } = useParams<{ schoolName: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const school = schoolsData[schoolName || ''];
  
  // Check if it's a high school (고등학교)
  const isHighSchool = school?.fullName.includes('고등학교');

  const handleBackClick = () => {
    const from = searchParams.get('from');
    const section = searchParams.get('section');
    
    if (from === 'home' && section) {
      // Navigate to home and scroll to the specific section
      navigate('/');
      setTimeout(() => {
        const sectionId = section === 'high' ? 'schools-high' : 'schools-middle';
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Default: go to home schools section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('schools');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  if (!school) {
    return (
      <PageWrapper>
        <PageTitle>학교 정보를 찾을 수 없습니다</PageTitle>
        <BackButton onClick={handleBackClick}>← 학교 목록으로 돌아가기</BackButton>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <BackButton onClick={handleBackClick}>← 학교 목록으로 돌아가기</BackButton>
      
      {/* 1. Top Tagline */}
      <TopTagline>부천 내신, 학교별로 전략이 달라야 합니다.</TopTagline>
      
      {/* 2. Main Title */}
      <PageTitle>레벨미업 | {school.name} 내신 맞춤 대비</PageTitle>
      
      {/* 3. Subtitle */}
      <PageSubtitle>학교 이름을 클릭하면 해당 학교의 내신 대비 흐름을 확인하실 수 있습니다.</PageSubtitle>

      {/* 4. School-Specific One-Liner */}
      {school.keyPoint && isHighSchool && (
        <SchoolOneLiner>{school.keyPoint}</SchoolOneLiner>
      )}

      {/* 5. Learning Flow Infographic - Only for High Schools */}
      {isHighSchool && (
        <LearningFlowSection>
          <FlowTitle>레벨미업 학습 흐름</FlowTitle>
          <FlowContainer>
            <FlowStep>
              <StepNumber>1</StepNumber>
              <StepIcon>📖</StepIcon>
              <StepTitle>1회독</StepTitle>
              <StepDescription>개념/지문 구조 정리</StepDescription>
            </FlowStep>
            
            <FlowStep>
              <StepNumber>2</StepNumber>
              <StepIcon>🎯</StepIcon>
              <StepTitle>2회독</StepTitle>
              <StepDescription>빈출 포인트 & 학교 스타일 반영</StepDescription>
            </FlowStep>
            
            <FlowStep>
              <StepNumber>3</StepNumber>
              <StepIcon>✍️</StepIcon>
              <StepTitle>3회독</StepTitle>
              <StepDescription>서술형/변형 대비 실전 적용</StepDescription>
            </FlowStep>
            
            <FlowStep>
              <StepNumber>4</StepNumber>
              <StepIcon>🔍</StepIcon>
              <StepTitle>Final Check</StepTitle>
              <StepDescription>학교 기출 + 유형별 약점 보완</StepDescription>
            </FlowStep>
            
            <FlowStep>
              <StepNumber>5</StepNumber>
              <StepIcon>📝</StepIcon>
              <StepTitle>예상 모의시험</StepTitle>
              <StepDescription>1차·2차·Final로 점수 확정</StepDescription>
            </FlowStep>
          </FlowContainer>
        </LearningFlowSection>
      )}

      <Section>
        <SectionTitle>{school.fullName} 맞춤 LEVEL ME UP 커리큘럼</SectionTitle>
        <InfoBox>
          <h3>{school.name} 맞춤 LEVEL ME UP 프로그램</h3>
          {school.features.map((feature, index) => (
            <p key={index}>✓ {feature}</p>
          ))}
        </InfoBox>
      </Section>

      {school.achievements.length > 0 && (
        <Section>
          <SectionTitle>최근 내신 결과</SectionTitle>
          <AchievementTable>
            <thead>
              <tr>
                <th>학기</th>
                <th>시험</th>
                <th>과목</th>
                <th>결과</th>
              </tr>
            </thead>
            <tbody>
              {school.achievements.map((achievement, index) => (
                <tr key={index} className={achievement.score.includes('100점') ? 'highlight' : ''}>
                  <td>{achievement.semester}</td>
                  <td>{achievement.exam}</td>
                  <td>{achievement.subject}</td>
                  <td className="score">{achievement.score}</td>
                </tr>
              ))}
            </tbody>
          </AchievementTable>
        </Section>
      )}

      {school.examAnalysis && school.examAnalysis.length > 0 && (
        <>
          <Section>
            <SectionTitle>{school.fullName} 내신 출제 경향 분석</SectionTitle>
            {school.examAnalysis.map((analysis, index) => (
              <div key={index}>
                <InfoBox style={{borderLeft: '5px solid #17B7A6'}}>
                  <h3>시험 난이도</h3>
                  <p><strong>{analysis.difficulty}</strong></p>
                </InfoBox>
                
                <InfoBox>
                  <h3>주요 특징</h3>
                  {analysis.keyPoints.map((point, idx) => (
                    <p key={idx}>• {point}</p>
                  ))}
                </InfoBox>
                
                <InfoBox style={{borderLeft: '5px solid #17B7A6'}}>
                  <h3>대비 전략</h3>
                  {analysis.strategies.map((strategy, idx) => (
                    <p key={idx}>✓ {strategy}</p>
                  ))}
                </InfoBox>
              </div>
            ))}
          </Section>
        </>
      )}

      {/* 6. Custom Management System - Only for High Schools */}
      {isHighSchool && (
        <ManagementSection>
          <ManagementTitle>레벨미업 {school.name} 맞춤 관리</ManagementTitle>
          <ManagementGrid>
            <ManagementCard>
              <ManagementIcon>📚</ManagementIcon>
              <ManagementCardTitle>단어 주기 테스트<br />+ 누적 관리</ManagementCardTitle>
              <ManagementCardDesc>
                매 수업 단어 테스트와 누적 복습으로 어휘력을 탄탄하게 다집니다
              </ManagementCardDesc>
            </ManagementCard>
            
            <ManagementCard>
              <ManagementIcon>📖</ManagementIcon>
              <ManagementCardTitle>학교 맞춤 교재<br />N회독</ManagementCardTitle>
              <ManagementCardDesc>
                {school.name} 출제 경향에 최적화된 교재로 반복 학습합니다
              </ManagementCardDesc>
            </ManagementCard>
            
            <ManagementCard>
              <ManagementIcon>💬</ManagementIcon>
              <ManagementCardTitle>지문 꼼꼼 숙지<br />+ 자유 질의응답</ManagementCardTitle>
              <ManagementCardDesc>
                시험범위 지문을 완벽히 이해하고 궁금한 점은 바로바로 해결합니다
              </ManagementCardDesc>
            </ManagementCard>
          </ManagementGrid>
        </ManagementSection>
      )}

      {/* 7. Brand Closing - Only for High Schools */}
      {isHighSchool && (
        <BrandClosing>
          <h3>Slow and steady wins the race.</h3>
          <p>흔들리지 않는 실력의 리듬을 만들어드립니다</p>
        </BrandClosing>
      )}

      <Section>
        <SectionTitle>수강 신청 및 상담</SectionTitle>
        <InfoBox>
          <h3>레벨미업 학원</h3>
          <p>📍 주소: 경기도 부천시 길주로 275</p>
          <p>📞 전화: 032-322-0592 / 010-2406-0591</p>
          <p>⏰ 운영: 월~토 (학년별 상이)</p>
        </InfoBox>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <Link
            to="/consulting"
            style={{
              display: 'inline-block',
              background: '#17B7A6',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(23, 183, 166, 0.3)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0E8F86'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#17B7A6'}
          >
            무료 상담 신청하기
          </Link>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default SchoolDetail;
