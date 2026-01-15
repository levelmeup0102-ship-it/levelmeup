import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '../theme';

const PageWrapper = styled.div`
  max-width: 1000px;
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
    background: linear-gradient(135deg, ${colors.green.primary} 0%, #66BB6A 100%);
    margin: 20px auto;
    border-radius: 3px;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.05rem;
  color: #666;
  margin-bottom: 50px;
  line-height: 1.6;
`;

const MainTabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const MainTab = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  border: 2px solid ${props => props.active ? colors.green.primary : '#ddd'};
  background: ${props => props.active ? colors.green.primary : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
  }
`;

const SubTabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const SubTab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  border: 1.5px solid ${props => props.active ? colors.green.primary : '#ddd'};
  background: ${props => props.active ? 'rgba(76, 175, 80, 0.1)' : 'white'};
  color: ${props => props.active ? colors.green.primary : '#666'};
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  
  &:hover {
    border-color: ${colors.green.primary};
    color: ${colors.green.primary};
  }
`;

const ContentSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #1a1a1a;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
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
      font-weight: 700;
      font-size: 0.95rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
  
  tbody {
    tr {
      border-bottom: 1px solid #e0e0e0;
      transition: background-color 0.2s;
      
      &:hover {
        background-color: #f9f9f9;
      }
      
      &:last-child {
        border-bottom: none;
      }
    }
    
    td {
      padding: 14px 12px;
      text-align: center;
      font-size: 0.9rem;
      color: #1a1a1a;
      border-right: 1px solid #f0f0f0;
      
      &:last-child {
        border-right: none;
      }
      
      &:first-of-type {
        font-weight: 600;
        color: #2d2d2d;
      }
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    
    thead th, tbody td {
      padding: 10px 8px;
    }
  }
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(102, 187, 106, 0.05) 100%);
  padding: 25px 30px;
  border-radius: 12px;
  margin-top: 50px;
  border-left: 4px solid ${colors.green.primary};
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #1a1a1a;
    font-weight: 700;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 10px 0;
    color: #555;
    font-size: 0.95rem;
    line-height: 1.7;
    
    &:before {
      content: '•';
      color: ${colors.green.primary};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-right: 8px;
    }
  }
`;

interface ClassInfo {
  name: string;
  grade: string;
  content: string;
  days: string;
}

interface SubjectData {
  title: string;
  classes: ClassInfo[];
}

type GradeTab = '중학생' | '고1' | '고2' | '고3';
type SubjectTab = 'korean' | 'english' | 'math' | 'science';

const classData: Record<GradeTab, Record<SubjectTab, SubjectData | null>> = {
  '중학생': {
    korean: {
      title: '중등 국어',
      classes: [
        { name: '중등 기초', grade: '중1', content: '중등 기초 어휘/문법/이론 학습', days: '금' },
        { name: '중등 심화', grade: '중2, 중3', content: '중등 심화 어휘/문법/이론 학습', days: '금' },
        { name: '모의고사 리뷰', grade: '중1, 중2, 중3', content: '모의고사 오답 분석 및 보완', days: '토 / 일' }
      ]
    },
    english: {
      title: '중등 영어',
      classes: [
        { name: 'Starter 1', grade: '중1', content: '중1 수준 단어/문법/독해 학습', days: '주 2회 + ICC' },
        { name: 'Starter 2', grade: '중1', content: '중1 수준 단어/문법/독해 학습', days: '주 2회 + ICC' },
        { name: 'Intermediate 1', grade: '중2', content: '중 2~3 수준 단어/문법/독해 학습', days: '주 2회 + ICC' },
        { name: 'Intermediate 2', grade: '중2', content: '중 2~3 수준 단어/문법/독해 학습', days: '주 2회 + ICC' },
        { name: 'Advanced 1', grade: '중3', content: '고1 모의고사 preview', days: '주 2회 + ICC' },
        { name: 'Advanced 2', grade: '중3', content: '고1 모의고사 preview', days: '주 2회 + ICC' }
      ]
    },
    math: {
      title: '중등 수학',
      classes: [
        { name: '중 1-1 B', grade: '중1', content: '중1 1학기 선행 개념 학습 및 유형문풀', days: '주 3회 + ICC' },
        { name: '중 2-1 A', grade: '중2', content: '중2 1학기 기말~중2 2학기', days: '주 3회 + ICC' },
        { name: '중 2-1 B', grade: '중2', content: '중2 1학기 선행 개념 학습 및 유형 문풀', days: '주 3회 + ICC' },
        { name: '중 3-1 A', grade: '중3', content: '중3 1학기 선행 개념 학습 및 유형 문풀', days: '주 3회 + ICC' },
        { name: '중 3-1 B', grade: '중3', content: '중3 1학기 선행 개념 학습 및 유형 문풀', days: '주 3회 + ICC' }
      ]
    },
    science: null
  },
  '고1': {
    korean: {
      title: '고1 국어',
      classes: [
        { name: '고1 A', grade: '고1', content: '고1 교과 선행(문법/문학/비문학)', days: '주 1회 + 클리닉' },
        { name: '고1 B', grade: '고1', content: '고1 교과 선행(문법/문학/비문학)', days: '주 1회 + 클리닉' },
        { name: 'weekly 모의', grade: '고1 전체', content: 'weekly 모의 풀이 및 리뷰', days: '주말' }
      ]
    },
    english: {
      title: '고1 영어',
      classes: [
        { name: '고1 S', grade: '고1', content: 'Intensive READING + 미리 중간고사', days: '주 2회 + ICC' },
        { name: '고1 A1', grade: '고1', content: 'Intensive READING + 미리 중간고사', days: '주 2회 + ICC' },
        { name: '고1 A2', grade: '고1', content: 'Intensive READING + 미리 중간고사', days: '주 2회 + ICC' },
        { name: '고1 B1', grade: '고1', content: 'Intensive READING + 미리 중간고사', days: '주 2회 + ICC' },
        { name: '고1 B2', grade: '고1', content: 'Intensive READING + 미리 중간고사', days: '주 2회 + ICC' }
      ]
    },
    math: {
      title: '고1 수학',
      classes: [
        { name: '공통수학1 A반', grade: '고1', content: '공통수학 선행 진도 + 유형 문풀', days: '주 3회 + ICC' },
        { name: '공통수학1 B1반', grade: '고1', content: '공통수학 선행 진도 + 유형 문풀', days: '주 3회 + ICC' },
        { name: '공통수학1 B2반', grade: '고1', content: '공통수학 선행 진도 + 유형 문풀', days: '주 3회 + ICC' }
      ]
    },
    science: {
      title: '고1 과학',
      classes: [
        { name: '통합과학', grade: '고1', content: '통합과학 개념·탐구', days: '토' }
      ]
    }
  },
  '고2': {
    korean: {
      title: '고2 국어',
      classes: [
        { name: '고2 A반', grade: '고2', content: '고2 내신/모의 기출 문학 작품 분석', days: '주 1회 + 클리닉' },
        { name: '고2 B반', grade: '고2', content: '고2 내신/모의 기출 문학 작품 분석', days: '주 1회 + 클리닉' },
        { name: 'weekly 모의', grade: '고2', content: 'weekly 모의고사 풀이 및 리뷰', days: '주말' }
      ]
    },
    english: {
      title: '고2 영어',
      classes: [
        { name: '고2 A1', grade: '고2', content: '중간고사 및 기말고사 대비', days: '주 2회' },
        { name: '고2 A2', grade: '고2', content: '중간고사 및 기말고사 대비', days: '주 2회' },
        { name: '고2 A3', grade: '고2', content: '중간고사 및 기말고사 대비', days: '주 2회' },
        { name: '고2 B1', grade: '고2', content: '중간고사 및 기말고사 대비', days: '주 2회' },
        { name: '고2 B2', grade: '고2', content: '중간고사 및 기말고사 대비', days: '주 2회' },
        { name: '고2 B3', grade: '고2', content: '중간고사 및 기말고사 대비', days: '주 2회' },
        { name: 'WEEKLY 모의', grade: '고2', content: 'weekly 모의고사 풀이 및 리뷰', days: '주 1회' }
      ]
    },
    math: {
      title: '고2 수학',
      classes: [
        { name: '대수 A반', grade: '고2', content: '수학I·II 개념 및 문제풀이', days: '월 / 수 / 금' },
        { name: '대수 B반', grade: '고2', content: '수학I·II 개념 및 문제풀이', days: '화 / 목 / 토' }
      ]
    },
    science: {
      title: '고2 과학',
      classes: [
        { name: '물리학', grade: '고2', content: '물리학 선택과목', days: '상담 후 안내' },
        { name: '화학', grade: '고2', content: '화학 선택과목', days: '상담 후 안내' },
        { name: '생명과학', grade: '고2', content: '생명과학 선택과목', days: '상담 후 안내' },
        { name: '지구과학', grade: '고2', content: '지구과학 선택과목', days: '상담 후 안내' }
      ]
    }
  },
  '고3': {
    korean: {
      title: '고3 국어',
      classes: [
        { name: '고3 A반', grade: '고3', content: '수능 국어 전 영역 실전 대비', days: '토 / 일' },
        { name: '고3 B반', grade: '고3', content: '수능 국어 전 영역 실전 대비', days: '일' },
        { name: '고3 C반', grade: '고3', content: '수능 국어 전 영역 실전 대비', days: '일' },
        { name: '언어와매체', grade: '고3', content: '언어와매체 선택과목', days: '개설예정' }
      ]
    },
    english: {
      title: '고3 영어',
      classes: [
        { name: '고3 S', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 A1', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 A2', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 A3', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 A4', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 B1', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 B2', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 B3', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 B4', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: '고3 C', grade: '고3', content: '수능 영어 수준별 분반', days: '주 2회' },
        { name: 'WEEKLY 모의고사', grade: '고3', content: '수능 기출 및 모의고사 풀이 및 리뷰', days: '주 1회' }
      ]
    },
    math: {
      title: '고3 수학',
      classes: [
        { name: '미적분', grade: '고3', content: '미적분 심화 및 수능 대비', days: '월 / 수 / 금' },
        { name: '확률과통계', grade: '고3', content: '확률과통계 심화 및 수능 대비', days: '화 / 목 / 토' }
      ]
    },
    science: null
  }
};

const TimeTablePage: React.FC = () => {
  const [activeGrade, setActiveGrade] = useState<GradeTab>('중학생');
  const [activeSubject, setActiveSubject] = useState<SubjectTab>('korean');

  const subjectData = classData[activeGrade][activeSubject];

  return (
    <PageWrapper>
      <PageTitle>개설 반 안내</PageTitle>
      <PageSubtitle>학년별·과목별로 운영되는 수업 반 구성을 확인하세요</PageSubtitle>

      <MainTabContainer>
        <MainTab active={activeGrade === '중학생'} onClick={() => setActiveGrade('중학생')}>
          중등
        </MainTab>
        <MainTab active={activeGrade === '고1'} onClick={() => setActiveGrade('고1')}>
          고1
        </MainTab>
        <MainTab active={activeGrade === '고2'} onClick={() => setActiveGrade('고2')}>
          고2
        </MainTab>
        <MainTab active={activeGrade === '고3'} onClick={() => setActiveGrade('고3')}>
          고3
        </MainTab>
      </MainTabContainer>

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
        {(activeGrade === '고1' || activeGrade === '고2') && (
          <SubTab active={activeSubject === 'science'} onClick={() => setActiveSubject('science')}>
            과학
          </SubTab>
        )}
      </SubTabContainer>

      {subjectData && (
        <ContentSection>
          <SectionTitle>{subjectData.title}</SectionTitle>
          <ClassTable>
            <thead>
              <tr>
                <th>개설반</th>
                <th>대상 학년</th>
                <th>수업 내용</th>
                <th>수업 요일</th>
              </tr>
            </thead>
            <tbody>
              {subjectData.classes.map((classInfo, index) => (
                <tr key={index}>
                  <td>{classInfo.name}</td>
                  <td>{classInfo.grade}</td>
                  <td>{classInfo.content}</td>
                  <td>{classInfo.days}</td>
                </tr>
              ))}
            </tbody>
          </ClassTable>
        </ContentSection>
      )}

      <InfoBox>
        <h3>수업 운영 안내</h3>
        <ul>
          <li>수업 시간은 100분 수업 기준으로 운영됩니다.</li>
          <li>소규모 반 편성으로 맞춤형 관리가 가능합니다.</li>
          <li>학교별 시험 일정에 맞춰 내신 대비 특강이 진행됩니다.</li>
          <li>학원 자습관은 수업 전후 자유롭게 이용 가능합니다.</li>
          <li>정확한 수업 시간 및 반 배정은 상담을 통해 안내해드립니다.</li>
        </ul>
      </InfoBox>
    </PageWrapper>
  );
};

export default TimeTablePage;
