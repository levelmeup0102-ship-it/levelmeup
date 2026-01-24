import React from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
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
  
  @media (max-width: 768px) {
    padding: 20px 12px;
    margin-bottom: 25px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #1a1a1a;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
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
  
  @media (max-width: 768px) {
    width: auto;
    max-width: 95%;
    margin: 0 auto 20px auto;
    display: block;
    font-size: 0.75rem;
    transform: scale(0.85);
    transform-origin: center;
    
    th, td {
      padding: 8px 4px;
      font-size: 0.7rem;
      white-space: nowrap;
    }
    
    th {
      font-size: 0.75rem;
      padding: 10px 4px;
    }
    
    td {
      font-size: 0.7rem;
    }
    
    .score {
      font-size: 0.8rem;
    }
  }
`;

const CollegeAdmissionsSection = styled.div`
  margin-bottom: 50px;
`;

const CollegeTitle = styled.h3`
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: bold;
`;

const CollegeNote = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 30px;
  padding: 15px 20px;
  background: #fff9e6;
  border-left: 4px solid #ffc107;
  border-radius: 5px;
  
  strong {
    color: #1a1a1a;
  }
`;

const CollegeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CollegeCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: all 0.3s;
  border: 2px solid #f0f0f0;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 24px rgba(23, 183, 166, 0.15);
    border-color: #17B7A6;
  }
`;

const UniversityName = styled.h4`
  font-size: 1.2rem;
  color: #17B7A6;
  margin-bottom: 10px;
  font-weight: bold;
`;

const DepartmentName = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
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
    padding: 25px 12px;
    margin-bottom: 30px;
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
    padding: 25px 12px;
    margin: 30px 0;
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
    color: #FFFFFF;
  }
  
  p {
    font-size: 1.1rem;
    color: #D7DEE7;
    margin: 0;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    padding: 30px 12px;
    margin: 30px 0 0;
    
    h3 {
      font-size: 1.2rem;
      color: #FFFFFF;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

// Middle School Curriculum Styles
const MiddleCurriculumSection = styled.div`
  margin: 60px 0;
  padding: 50px 30px;
  background: linear-gradient(135deg, #F7F9FB 0%, #FFFFFF 100%);
  border-radius: 20px;
  border: 1px solid #E8EEF3;
  
  @media (max-width: 768px) {
    margin: 30px 0;
    padding: 25px 12px;
  }
`;

const CurriculumTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #0B1B2A;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CurriculumSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #5A6C7D;
  margin-bottom: 50px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;

const ProcessFlow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 8%;
    right: 8%;
    height: 2px;
    background: linear-gradient(90deg, #17B7A6 0%, #0B1B2A 100%);
    z-index: 0;
  }
  
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 30px;
    
    &::before {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const ProcessStep = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  min-width: 140px;
  
  @media (max-width: 1024px) {
    flex: 0 0 calc(33.333% - 20px);
  }
  
  @media (max-width: 768px) {
    flex: 1 1 100%;
    min-width: 100%;
  }
`;

const MiddleStepIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #17B7A6 0%, #14A090 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;
  box-shadow: 0 4px 15px rgba(23, 183, 166, 0.3);
  border: 3px solid white;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.5rem;
  }
`;

const MiddleStepTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #0B1B2A;
  margin: 0;
  line-height: 1.4;
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-height: auto;
  }
`;

const CurriculumDescription = styled.p`
  text-align: center;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #2C3E50;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  border-left: 4px solid #17B7A6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 20px;
    line-height: 1.7;
  }
`;

interface SchoolData {
  name: string;
  fullName: string;
  description: string;
  keyPoint?: string; // School-specific one-liner
  achievements: Array<{
    year?: string;
    semester: string;
    exam: string;
    subject: string;
    grade?: string;
    score: string;
    students?: string;
  }>;
  collegeAdmissions?: Array<{
    university: string;
    department: string;
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
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '95점 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '95점 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '95점 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '90점 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '90.5점 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '90.1점 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '90.0점 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점 (고3)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '90.9점 (고3)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '99점 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '93.8점 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '93.8점 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '93점 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '96점 (고3)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '95점 (고3)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '94점 (고3)'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '수학',
        score: '38점 상승 1명 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '수학',
        score: '20점 이상 상승 3명 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '수학',
        score: '10점 이상 상승 2명 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '국어',
        score: '1등급 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '국어',
        score: '1등급 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '영어',
        score: '전교 2등 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '영어',
        score: '전교 3등 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '100점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '97점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.6점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.4점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.3점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '94점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '93.1점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.7점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '90.9점 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '32점 상승 1명 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.1점 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '95.7점 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '95.7점 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '91점 (고1)'
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
    collegeAdmissions: [
      { university: '이화여자대학교', department: '인공지능데이터사이언스학부' },
      { university: '경희대학교', department: '응용화학과' },
      { university: '동국대학교', department: '경영학과' },
      { university: '인하대학교', department: '화학공학과' },
      { university: '숭실대학교', department: '경영학부' }
    ],
    features: [
      '심원고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '심원고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 심원고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 심원고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 심원고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '정명고': {
    name: '정명고',
    fullName: '정명고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '정명고는 고난이도 어휘와 외부지문 대비가 핵심입니다.',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 9명 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.1점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 1등 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '21점 상승 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.2점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 4등 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 달성 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.2점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 4등 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '10점 상승 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 달성 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.0점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 4등 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 달성 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.0점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 4등 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '중간 114등 → 기말 4등 상승 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '110등 상승 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 달성 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '91.0점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 14등 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 달성 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '90점 이상 11명 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '97.0점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.6점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.4점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.3점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.0점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '94.0점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '93.1점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.7점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '90.9점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.2점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 2등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '11점 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.2점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 2등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '2학기 전교 2등 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '96.0점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 2등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '22점 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '95.0점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 2등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '93.0점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 12등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.6점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 17등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 달성 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.6점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '25점 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.0점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 17등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '1등급 달성 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 5명 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '영어',
        score: '총 9명 중 5명 1등급 달성 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '전과목',
        score: '전교 1등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '전과목',
        score: '전교 2등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        score: '수강생 전원 성적 상승 (고2)'
      },
      {
        semester: '24-2학기',
        exam: '기말고사',
        subject: '수학',
        score: '3등급 상승 (고1)'
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
    collegeAdmissions: [
      { university: '서울대학교', department: '기계공학부' },
      { university: '연세대학교', department: '신소재공학부' },
      { university: '고려대학교', department: '건축사회환경공학부' },
      { university: '성균관대학교', department: '전자전기공학부' },
      { university: '가천대학교', department: '의예과' }
    ],
    features: [
      '정명고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '정명고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 정명고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 정명고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 정명고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '중흥고': {
    name: '중흥고',
    fullName: '중흥고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '중흥고는 빈칸 추론과 어법 문제가 핵심입니다.',
    achievements: [
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '전체',
        score: '신규 원생 전원 성적 상승 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '전체',
        score: '10점 이상 상승 5명 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '전체',
        score: '20점 이상 상승 1명 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '전체',
        score: '30점 이상 상승 1명 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '수학',
        score: '1등급 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '수학',
        score: '수강생 전원 성적 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '수학',
        score: '최대 22점 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '전교 1등 / 100점 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '1등급 5명 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '신규 원생 전원 성적 상승 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '90점 이상 7명 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '90점 이상 6명 기록 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '수학',
        score: '1등급 배출 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '전교 1등 배출 (고1)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '93.2점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '20점 상승 사례 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '전교 1등 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '100점 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '98점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '97점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '95점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '93.9점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '93점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '92점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '91점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '신규 원생 4명 전원 성적 상승 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '29점 상승 사례 포함 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '국어',
        score: '95.9점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        score: '수강생 절반 성적 상승 (고2)'
      }
    ],
    collegeAdmissions: [
      { university: '서울시립대학교', department: '도시사회학과' },
      { university: '동국대학교', department: '전자전기공학부' },
      { university: '숙명여자대학교', department: '경제학부' },
      { university: '홍익대학교', department: '영어영문학과' },
      { university: '성신여자대학교', department: '사회복지학과' }
    ],
    features: [
      '중흥고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '중흥고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 중흥고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 중흥고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 중흥고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '부천북고': {
    name: '부천북고',
    fullName: '부천북고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '부천북고는 지문 이해 + 선택지 함정이 핵심입니다.',
    achievements: [
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '2등급 2명 배출 (고2)'
      },
      {
        semester: '24-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '95점 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점 기록 (고3)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '95.7점 기록 (고3)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '95.4점 기록 (고3)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '95.3점 기록 (고3)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '90점 기록 (고2)'
      }
    ],
    features: [
      '부천북고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '부천북고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 부천북고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 부천북고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 부천북고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
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
        score: '전교 1등 배출 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '수강생 전원 성적 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '영어',
        score: '전교 2등 배출 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '전교 4등 배출 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 1명 배출 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '2등급 2명 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '2등급 3명 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '수강생 전원 24등 이내 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '8등 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '11등 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '15등 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '1등급 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '25점 상승(1명) (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '3등급 → 1등급 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 달성 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '국어',
        score: '전교 5등 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        score: '21점 상승 (고1)'
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
      '덕산고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '덕산고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 덕산고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 덕산고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 덕산고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
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
        score: '전교 2등 배출 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '전교 1등 배출 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 2명 배출 (고2)'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '신규 원생 전원 성적 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '1등급 배출 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '수강생 전원 90점대 이상 기록 (고1)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '수강생 전원 90점대 이상 기록 (고2)'
      }
    ],
    features: [
      '부명고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '부명고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 부명고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 부명고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 부명고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
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
        grade: '고3',
        score: '95점 배출'
      },
      {
        semester: '24-1학기',
        exam: '중간고사',
        subject: '국어',
        grade: '고2',
        score: '93점 배출'
      },
      {
        semester: '24-1학기',
        exam: '중간고사',
        subject: '수학',
        grade: '고2',
        score: '4등급 → 3등급 상승'
      }
    ],
    features: [
      '부천고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '부천고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 부천고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 부천고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 부천고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '계남고': {
    name: '계남고',
    fullName: '계남고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '계남고는 서술형과 문장 구조 문제가 변별력을 만듭니다.',
    achievements: [
      {
        semester: '25-1학기',
        exam: '확률과통계',
        subject: '수학',
        grade: '고3',
        score: '5등급 → 전교 9등'
      },
      {
        semester: '24-1학기',
        exam: '중간고사',
        subject: '수학',
        grade: '고3',
        score: '3등급 → 1등급 상승'
      },
      {
        semester: '24-1학기',
        exam: '합산',
        subject: '수학',
        grade: '고3',
        score: '2등급 달성'
      },
      {
        semester: '24-1학기',
        exam: '중간고사',
        subject: '수학',
        grade: '고3',
        score: '90점 배출'
      }
    ],
    features: [
      '계남고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '계남고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 계남고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 계남고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 계남고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '소명여고': {
    name: '소명여고',
    fullName: '소명여자고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '소명여고는 세부 내용 파악과 서술형 대비가 필수입니다.',
    achievements: [
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '30점 이상 상승 (2학년)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '96점 기록 (2학년)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '96.4점 기록 (2학년)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '90점 기록 (3학년)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '100점 기록 (3학년)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '전교 3등 배출 (2학년)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 배출 (2학년)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '국어',
        score: '1등급 배출 (2학년)'
      },
      {
        semester: '25-1학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 배출 (3학년)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '1등급 배출 (2학년)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '21점 상승 (1학년)'
      },
      {
        semester: '25-2학기',
        exam: '(학기 성과)',
        subject: '영어',
        score: '전교 7등 배출 (2학년)'
      }
    ],
    collegeAdmissions: [
      { university: '연세대학교', department: '심리학과' },
      { university: '고려대학교', department: '교육학과' },
      { university: '성균관대학교', department: '사회과학계열' },
      { university: '서강대학교', department: '사회과학부' },
      { university: '중앙대학교', department: '디자인학부' }
    ],
    features: [
      '소명여고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '소명여고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 소명여고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 소명여고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 소명여고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '원미고': {
    name: '원미고',
    fullName: '원미고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '원미고는 고난도 어휘와 변형 문제가 변별력을 만듭니다.',
    achievements: [
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '100점 기록 (3학년)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '99점 기록 (3학년)'
      },
      {
        semester: '24-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '20점 이상 상승 1명 (2학년)'
      },
      {
        semester: '24-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '20점 이상 상승 1명 (2학년)'
      },
      {
        semester: '24-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '96.3점 기록 (2학년)'
      },
      {
        semester: '24-2학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 배출 (2학년)'
      },
      {
        semester: '24-2학기',
        exam: '중간고사',
        subject: '수학',
        score: '1등급 상승 (2학년)'
      },
      {
        semester: '24-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '92.6점 기록 (2학년)'
      },
      {
        semester: '24-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '92점 기록 (2학년)'
      }
    ],
    collegeAdmissions: [
      { university: '충남대학교', department: '약학과' },
      { university: '이화여자대학교', department: '경제학과' },
      { university: '한국외국어대학교', department: '경제학부' },
      { university: '건국대학교', department: '공과대학 자율전공학부' },
      { university: '국민대학교', department: '나노전자물리학과' }
    ],
    features: [
      '원미고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '원미고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 원미고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 원미고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 원미고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '중원고': {
    name: '중원고',
    fullName: '중원고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '중원고는 문법과 독해의 균형 잡힌 학습이 핵심입니다.',
    achievements: [
      {
        semester: '24-1학기',
        exam: '중간고사',
        subject: '영어',
        score: '1등급 배출 (고3)'
      },
      {
        semester: '24-1학기',
        exam: '기말고사',
        subject: '영어',
        score: '98점 달성 (고3)'
      },
      {
        semester: '23-2학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 배출 (고2)'
      },
      {
        semester: '23-1학기',
        exam: '중간고사',
        subject: '국어',
        score: '96.1점 달성 (고1)'
      }
    ],
    features: [
      '중원고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '중원고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 중원고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 중원고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 중원고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '도당고': {
    name: '도당고',
    fullName: '도당고등학교',
    description: '부천 지역 내신 대비 학교',
    keyPoint: '도당고는 종합적 사고력과 응용 문제가 성적을 결정합니다.',
    achievements: [
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '1등급 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '3등급 → 1등급 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        score: '2등급 3명 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '수학',
        score: '22점 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '수학',
        score: '90.8점 기록 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '1등급 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '수강생 4명 중 3명 \'전교 11등 이내\' (고2)'
      },
      {
        semester: '25-2학기',
        exam: '합산',
        subject: '영어',
        score: '1등급 2명 배출 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '14점 상승 (고2)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        score: '18점 상승 (고2)'
      }
    ],
    features: [
      '도당고 전용 내신 대비반 운영',
      '고난이도 문항·변형 문제 대비 실력 향상 프로그램',
      '서술형·논술형 대비: 과목별 출제 유형 맞춤',
      '수행평가 1:1 코칭 및 첨삭 시스템 - 과목별 수행평가 유형에 맞춘 작성 구조 설계, 핵심 내용 정리, 문장/표현 첨삭',
      '수행평가 결과물 완성도 관리: 보고서/발표/탐구/독서활동 등 평가 요소에 맞춰 평가 기준 반영, 감점 포인트 최소화 집중 케어',
      '도당고 내신 1등급 다수 배출 (검증된 시스템)',
      '학교별 출제 경향 반영: 3~4회차 실전 모의고사 - 실제 도당고 선생님들의 출제 스타일과 빈출 포인트를 반영해 다수의 적중 문항 구성',
      '시험 종료 후 도당고 시험 분석 리포트 제공: 매 시험의 난이도/변별 문항/출제 흐름 정리 및 블로그 업로드',
      '내신 진도 진행 시 도당고 맞춤 추가 자료 제공: 단원별 빈출 포인트 기반 추가 교재 + 실전 문제를 수업 중 배부해 완성도 강화'
    ]
  },
  '부천중': {
    name: '부천중',
    fullName: '부천중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '90점대 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '80점대 이상 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중1',
        score: '학기 합산 만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중1',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중1',
        score: '99점 배출 + 90점대 배출'
      }
    ],
    features: [
      '부천중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '부천중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 부천중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '부천중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '중흥중': {
    name: '중흥중',
    fullName: '중흥중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중2',
        score: '만점(100점) 2명 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중2',
        score: '수강생 전원 만점(100점)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중3',
        score: '학기 합산 만점(100점) 다수 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '수강생 10명 중 7명 만점(100점)'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '수강생 전원 90점 이상'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중1',
        score: '만점(100점) 2명 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중2',
        score: '만점(100점) 3명 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '최대 25점 상승'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '만점(100점) 다수 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '70점대 → 100점 상승'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '95점대 다수 배출'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        grade: '중2',
        score: '수강생 전원 90점 이상'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '만점(100점) 배출 (중흥중1·2)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        score: '90점 이상 6명 배출 (중흥중 전체)'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '수학',
        grade: '중2',
        score: '만점(100점) 2명 배출'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중2',
        score: '만점(100점) 2명 배출'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '수학',
        score: '만점(100점) 배출 (중흥중2·3)'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        grade: '중2',
        score: '만점(100점) 4명 배출'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        grade: '중2',
        score: '90점 이상 6명 배출'
      }
    ],
    features: [
      '중흥중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '중흥중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 중흥중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '중흥중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '부흥중': {
    name: '부흥중',
    fullName: '부흥중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중3',
        score: '학기 합산 만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '10점 이상 상승'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '90점대 배출'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        grade: '중2',
        score: '20점 상승'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        grade: '중2',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        grade: '중2',
        score: '신규 원생 전원 성적 상승'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중2',
        score: '30점 이상 상승'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '수학',
        grade: '중3',
        score: '90점 이상 배출'
      }
    ],
    features: [
      '부흥중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '부흥중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 부흥중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '부흥중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '계남중': {
    name: '계남중',
    fullName: '계남중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중1',
        score: '성취도 A 기록'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중1',
        score: '80점대 이상 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중1',
        score: '90점대 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '학기 합산 만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      }
    ],
    features: [
      '계남중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '계남중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 계남중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '계남중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '중원중': {
    name: '중원중',
    fullName: '중원중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '학기 합산 만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '학기 합산 만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중2',
        score: '95점대 배출'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중2',
        score: '90점 이상 배출'
      },
      {
        semester: '25-1학기',
        exam: '중간고사',
        subject: '영어',
        grade: '중3',
        score: '90점 이상 배출'
      }
    ],
    features: [
      '중원중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '중원중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 중원중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '중원중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '심원중': {
    name: '심원중',
    fullName: '심원중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '10점 이상 상승 사례 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '14점 상승 사례 배출'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '국어',
        grade: '중3',
        score: '수강생 90점 이상'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        grade: '중3',
        score: '신규 원생 전원 성적 상승'
      },
      {
        semester: '25-2학기',
        exam: '중간고사',
        subject: '영어',
        grade: '중3',
        score: '최대 17점 상승 사례 배출'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '90점 이상 배출'
      }
    ],
    features: [
      '심원중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '심원중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 심원중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '심원중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '부천여중': {
    name: '부천여중',
    fullName: '부천여자중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '국어',
        grade: '중3',
        score: '학기 합산 만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '10점 이상 상승 사례 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '학기 합산 만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '만점(100점) 배출'
      }
    ],
    features: [
      '부천여중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '부천여중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 부천여중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '부천여중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '까치울중': {
    name: '까치울중',
    fullName: '까치울중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '12점 상승 사례 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '90점대 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '90점대 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '수학',
        grade: '중3',
        score: '만점(100점) 배출'
      }
    ],
    features: [
      '까치울중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '까치울중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 까치울중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '까치울중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '성주중': {
    name: '성주중',
    fullName: '성주중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '학기 합산 만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-1학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 2명 배출'
      }
    ],
    features: [
      '성주중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '성주중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 성주중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '성주중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
    ]
  },
  '부명중': {
    name: '부명중',
    fullName: '부명중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '만점(100점) 배출'
      },
      {
        semester: '25-2학기',
        exam: '기말고사',
        subject: '영어',
        grade: '중3',
        score: '90점대 배출'
      }
    ],
    features: [
      '부명중 내신대비반 완전 분리 운영 (범위/난이도/출제스타일 맞춤)',
      '부명중 기출·변형·서술형까지 반영한 자체교재 제작/수업 적용',
      '등원 시마다 시험범위 데일리테스트 진행 (실수 패턴까지 교정)',
      '단원별 핵심유형 정리 + 실전훈련 루틴화',
      '시험 2~3주 전 부명중 예상문제+모의고사 집중 운영',
      'ICC 관리코칭 (플래너·누적복습·과제·오답까지 통합 관리)',
      '부명중 수행평가 전담 케어 (발표/탐구/서술형 완성도 업)',
      '1:1 질문/보강으로 그날 약점 그날 해결'
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
      <PageTitle>LEVEL ME UP {school.name} 맞춤 커리큘럼</PageTitle>
      
      {/* 3. Subtitle - Only for Middle Schools */}
      {!isHighSchool && (
        <PageSubtitle>학교 이름을 클릭하면 해당 학교의 내신 대비 흐름을 확인하실 수 있습니다.</PageSubtitle>
      )}

      {/* 4.4. 대학 합격 현황 - Only for High Schools */}
      {isHighSchool && school.collegeAdmissions && school.collegeAdmissions.length > 0 && (
        <CollegeAdmissionsSection>
          <SectionTitle>최근 {school.name} 재원생 주요 입결</SectionTitle>
          <CollegeNote>
            📌 <strong>최근 입시 실적(24~26학년도 기준 대표 성과)</strong>로 정리한 주요 합격 라인업입니다.
          </CollegeNote>
          <CollegeGrid>
            {school.collegeAdmissions.map((admission, index) => (
              <CollegeCard key={index}>
                <UniversityName>{admission.university}</UniversityName>
                <DepartmentName>{admission.department}</DepartmentName>
              </CollegeCard>
            ))}
          </CollegeGrid>
        </CollegeAdmissionsSection>
      )}

      {/* 4.5. 최근 내신 결과 - Only for High Schools (moved before Learning Flow) */}
      {school.achievements.length > 0 && isHighSchool && (
        <Section className="latest-score-section">
          <SectionTitle>최신 내신 성과</SectionTitle>
          <AchievementTable>
            <thead>
              <tr>
                <th>학기</th>
                <th>시험</th>
                <th>과목</th>
                <th>학년</th>
                <th>결과</th>
              </tr>
            </thead>
            <tbody>
              {school.achievements.map((achievement, index) => {
                // Use achievement.grade if available, otherwise extract from score
                let grade = '-';
                let cleanScore = achievement.score;
                
                if (achievement.grade) {
                  // If grade field exists, use it directly
                  grade = achievement.grade;
                } else {
                  // Extract grade from score (e.g., "(고1)", "(고2)", "(1학년)")
                  const gradeMatch = achievement.score.match(/\((고\d|[123]학년)\)/);
                  grade = gradeMatch ? gradeMatch[1].replace('학년', '') : '-';
                  // Remove grade from score display
                  cleanScore = achievement.score.replace(/\s*\((고\d|[123]학년)\)\s*/g, '').trim();
                }
                
                return (
                  <tr key={index} className={achievement.score.includes('100점') ? 'highlight' : ''}>
                    <td>{achievement.semester}</td>
                    <td>{achievement.exam}</td>
                    <td>{achievement.subject}</td>
                    <td>{grade}</td>
                    <td className="score">{cleanScore}</td>
                  </tr>
                );
              })}
            </tbody>
          </AchievementTable>
        </Section>
      )}

      {/* 4.6. Curriculum Section - Before Learning Flow (High Schools Only) */}
      {isHighSchool && (
        <Section>
          <SectionTitle>{school.fullName} 맞춤 LEVEL ME UP 커리큘럼</SectionTitle>
          <InfoBox>
            <h3>{school.name} 맞춤 LEVEL ME UP 프로그램</h3>
            {school.features.map((feature, index) => (
              <p key={index}>✓ {feature}</p>
            ))}
          </InfoBox>
        </Section>
      )}

      {/* 5. Learning Flow Infographic - Only for High Schools */}
      {isHighSchool && (
        <LearningFlowSection>
          <FlowTitle>레벨미업 내신 대비 프로세스</FlowTitle>
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
              <StepDescription>1차·2차·3차Final로 점수 확정</StepDescription>
            </FlowStep>
          </FlowContainer>
        </LearningFlowSection>
      )}

      {/* Middle School Curriculum Features - Before Process Flow */}
      {!isHighSchool && (
        <Section>
          <SectionTitle>{school.fullName} 맞춤 LEVEL ME UP 커리큘럼</SectionTitle>
          <InfoBox>
            <h3>{school.name} 맞춤 LEVEL ME UP 프로그램</h3>
            {school.features.map((feature, index) => (
              <p key={index}>✓ {feature}</p>
            ))}
          </InfoBox>
        </Section>
      )}

      {/* Middle School Curriculum - Only for Middle Schools */}
      {!isHighSchool && (
        <MiddleCurriculumSection>
          <CurriculumTitle>중등부 국/영/수 통합 커리큘럼</CurriculumTitle>
          <CurriculumSubtitle>
            체계적인 6단계 학습 프로세스로 내신 완성
          </CurriculumSubtitle>
          
          <ProcessFlow>
            <ProcessStep>
              <MiddleStepIcon>1</MiddleStepIcon>
              <MiddleStepTitle>주 2회 정규 진도수업<br/>+ Daily TEST</MiddleStepTitle>
            </ProcessStep>
            
            <ProcessStep>
              <MiddleStepIcon>2</MiddleStepIcon>
              <MiddleStepTitle>Weekly TEST<br/>(실전/변형)</MiddleStepTitle>
            </ProcessStep>
            
            <ProcessStep>
              <MiddleStepIcon>3</MiddleStepIcon>
              <MiddleStepTitle>내신 대비 집중<br/>(시험범위 Daily TEST<br/>+ 단어 TEST)</MiddleStepTitle>
            </ProcessStep>
            
            <ProcessStep>
              <MiddleStepIcon>4</MiddleStepIcon>
              <MiddleStepTitle>학교별 맞춤<br/>자체제작 교재</MiddleStepTitle>
            </ProcessStep>
            
            <ProcessStep>
              <MiddleStepIcon>5</MiddleStepIcon>
              <MiddleStepTitle>실전 모의시험<br/>(최종 점검)</MiddleStepTitle>
            </ProcessStep>
            
            <ProcessStep>
              <MiddleStepIcon>6</MiddleStepIcon>
              <MiddleStepTitle>ICC<br/>개별 학습지도</MiddleStepTitle>
            </ProcessStep>
          </ProcessFlow>
          
          <CurriculumDescription>
            중등부는 학습 습관이 성적을 만듭니다. 레벨미업은 Daily/Weekly TEST로 학습을 점검하고, 내신 기간에는 시험범위·단어 테스트와 학교별 맞춤 교재로 대비합니다. 마지막은 실전 모의시험과 ICC 개별 지도로 완성합니다.
          </CurriculumDescription>
        </MiddleCurriculumSection>
      )}

      {/* 최근 내신 결과 - Only for Middle Schools */}
      {school.achievements.length > 0 && !isHighSchool && (
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

      {/* 7. Brand Closing - For All Schools */}
      <BrandClosing>
        <h3>Slow and steady wins the race.</h3>
        <p>흔들리지 않는 실력의 리듬을 만들어드립니다</p>
      </BrandClosing>

      <Section>
        <SectionTitle>수강 신청 및 상담</SectionTitle>
        <InfoBox>
          <h3>레벨미업 학원</h3>
          <p>📍 주소: 경기도 부천시 길주로 275</p>
          <p>📞 전화: 032-322-0592 / 010-2406-0591</p>
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
