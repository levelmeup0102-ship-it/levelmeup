import React, { useState } from 'react';
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
    border-color: #2E4A6F;
    color: #2E4A6F;
    transform: translateX(-5px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroCard = styled.div`
  background: linear-gradient(135deg, #2E4A6F 0%, #3E5A7F 100%);
  border-radius: 16px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #E8F5E9;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 500;
  
  strong {
    color: white;
    font-weight: 700;
  }
`;

const TabContainer = styled.div`
  margin: 40px 0;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 14px 28px;
  background: ${props => props.$active ? '#2E4A6F' : 'white'};
  color: ${props => props.$active ? 'white' : '#666'};
  border: 2px solid ${props => props.$active ? '#2E4A6F' : '#e0e0e0'};
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 74, 111, 0.2);
  }
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 25px;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 3px solid #2E4A6F;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`;

const ClassTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  thead {
    background: #2E4A6F;
    color: white;
    
    th {
      padding: 15px 12px;
      text-align: center;
      font-weight: 700;
      font-size: 1rem;
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
    }
    
    td {
      padding: 14px 12px;
      text-align: center;
      font-size: 0.95rem;
      color: #1a1a1a;
      border-right: 1px solid #f0f0f0;
      
      &:last-child {
        border-right: none;
      }
      
      &:first-of-type {
        font-weight: 600;
      }
    }
  }
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg, rgba(46, 74, 111, 0.05) 0%, rgba(62, 90, 127, 0.05) 100%);
  padding: 30px;
  border-radius: 12px;
  margin-top: 40px;
  border-left: 4px solid #2E4A6F;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #1a1a1a;
    font-weight: 700;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 12px 0;
    color: #555;
    font-size: 1rem;
    line-height: 1.7;
    
    &:before {
      content: '✓';
      color: #2E4A6F;
      font-weight: bold;
      display: inline-block;
      width: 1.5em;
      margin-right: 8px;
      font-size: 1.2rem;
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
  box-shadow: 0 4px 15px rgba(46, 74, 111, 0.3);
  margin-top: 30px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(46, 74, 111, 0.4);
    background: #1E3A5F;
  }
`;

type GradeType = '고1' | '고2' | '고3';

interface ClassInfo {
  name: string;
  startDate: string;
  schedule: string;
  note?: string;
}

const timetableData: Record<GradeType, ClassInfo[]> = {
  '고1': [
    // 국어
    { name: '[계남고] 국어', startDate: '3/2(월) 개강', schedule: '주 2회 (월/금)' },
    { name: '[덕산고] 국어', startDate: '3/6(금) 개강', schedule: '주 1회 (금)' },
    { name: '[부천고] 국어', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '[심원고] 국어', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '[정명고] 국어', startDate: '3/8(일) 개강', schedule: '주 1회 (일)' },
    { name: '[중흥고] 국어', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    // 영어
    { name: '[경기에고] 영어', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '[계남고] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[덕산고] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[부명고] 영어', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' },
    { name: '[부천고] 영어', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' },
    { name: '[부천여고] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[상동고] 영어', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' },
    { name: '[소명여고] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/토)' },
    { name: '[심원고] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[원미고] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/토)' },
    { name: '[원종고] 영어', startDate: '3/2(월) 개강', schedule: '주 2회 (월/토)' },
    { name: '[정명고] 영어', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' },
    { name: '[중흥고] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/목)' },
    // 수학
    { name: '[공통수학 A] 수학', startDate: '3/2(월) 개강', schedule: '주 3회 (월/수/토)' },
    { name: '[공통수학 B] 수학', startDate: '3/3(화) 개강', schedule: '주 3회 (화/목/일)' },
    // 과학
    { name: '[통합과학 A] 과학', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '[통합과학 B] 과학', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' }
  ],
  '고2': [
    // 국어
    { name: '[심원고2] 국어', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '[중흥고2] 국어', startDate: '3/8(일) 개강', schedule: '주 1회 (일)' },
    // 수학
    { name: '[대수A] 수학', startDate: '3/4(수) 개강', schedule: '주 3회 (수/금/토)' },
    { name: '[대수B] 수학', startDate: '3/3(화) 개강', schedule: '주 3회 (화/목/일)' },
    // 영어
    { name: '[정명고2 S] 영어', startDate: '3/7(토) 개강', schedule: '주 2회 (토/일)' },
    { name: '[정명고2 A] 영어', startDate: '3/4(수) 개강', schedule: '주 2회 (수/일)' },
    { name: '[정명고2 B] 영어', startDate: '3/2(월) 개강', schedule: '주 2회 (월/토)' },
    { name: '[부명고2] 영어', startDate: '3/2(월) 개강', schedule: '주 2회 (월/수)' },
    { name: '[심원고2] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[중흥고2 A] 영어', startDate: '3/5(목) 개강', schedule: '주 2회 (목/일)' },
    { name: '[중흥고2 B] 영어', startDate: '3/2(월) 개강', schedule: '주 2회 (월/금)' },
    { name: '[소명여고2] 영어', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' }
  ],
  '고3': [
    // 국어
    { name: '[부천북고3] 국어', startDate: '3/3(화) 개강', schedule: '주 1회 (화)', note: '확립과 작문' },
    { name: '[도당고3] 국어', startDate: '3/7(토) 개강', schedule: '주 1회 (토)', note: '확립과 작문' },
    { name: '[덕산고3] 국어', startDate: '3/8(일) 개강', schedule: '주 1회 (일)', note: '확립과 작문' },
    { name: '[심원고3] 국어', startDate: '3/7(토) 개강', schedule: '주 1회 (토)', note: '확립과 작문' },
    { name: '[심원고3] 국어', startDate: '3/8(일) 개강', schedule: '주 1회 (일)', note: '언어와 매체' },
    { name: '[정명고3] 국어', startDate: '3/8(일) 개강', schedule: '주 1회 (일)', note: '언어와 매체' },
    // 수학
    { name: '[미적분] 수학', startDate: '3/2(월) 개강', schedule: '주 3회 (월/수/금)' },
    { name: '[확률과통계] 수학', startDate: '3/3(화) 개강', schedule: '주 3회 (화/목/토)' },
    // 영어
    { name: '[도당고3] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[부명고3] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[소명여고3] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[중흥고3] 영어', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '[정명고3 S] 영어', startDate: '3/7(토) 개강', schedule: '주 2회 (토/일)' },
    { name: '[정명고3 A] 영어', startDate: '3/5(목) 개강', schedule: '주 2회 (목/일)' },
    { name: '[정명고3 C] 영어', startDate: '3/2(월) 개강', schedule: '주 2회 (월/토)' },
    { name: '[심원고3] 영어', startDate: '3/2(월) 개강', schedule: '주 2회 (월/금)' },
    { name: '[덕산고3] 영어', startDate: '3/4(수) 개강', schedule: '주 2회 (수/금)' }
  ]
};

const WinterSchool: React.FC = () => {
  const [activeGrade, setActiveGrade] = useState<GradeType>('고1');

  return (
    <PageWrapper>
      <Container>
        <BackButton to="/">← 홈으로</BackButton>
        
        <HeroCard>
          <HeroTitle>2026학년도 1학기 고등부 내신대비 개강</HeroTitle>
          <HeroSubtitle>
            <strong>3월 2일(월)부터</strong> 학교별·과목별 정규 수업이 시작됩니다.<br />
            학교 내신에 최적화된 맞춤형 커리큘럼으로 새 학기를 준비하세요.
          </HeroSubtitle>
        </HeroCard>

        <TabContainer>
          <Tab $active={activeGrade === '고1'} onClick={() => setActiveGrade('고1')}>고1</Tab>
          <Tab $active={activeGrade === '고2'} onClick={() => setActiveGrade('고2')}>고2</Tab>
          <Tab $active={activeGrade === '고3'} onClick={() => setActiveGrade('고3')}>고3</Tab>
        </TabContainer>

        <ContentCard>
          <SectionTitle>{activeGrade} 개설 수업</SectionTitle>
          <TableWrapper>
            <ClassTable>
              <thead>
                <tr>
                  <th>개설반</th>
                  <th>개강일</th>
                  <th>수업 요일</th>
                  {activeGrade === '고3' && <th>비고</th>}
                </tr>
              </thead>
              <tbody>
                {timetableData[activeGrade].map((classInfo, index) => (
                  <tr key={index}>
                    <td>{classInfo.name}</td>
                    <td>{classInfo.startDate}</td>
                    <td>{classInfo.schedule}</td>
                    {activeGrade === '고3' && <td>{classInfo.note || '-'}</td>}
                  </tr>
                ))}
              </tbody>
            </ClassTable>
          </TableWrapper>
        </ContentCard>

        <InfoBox>
          <h3>수업 안내</h3>
          <ul>
            <li>학교별 내신 범위와 난이도에 맞춘 맞춤형 수업</li>
            <li>과목별 전문 강사진의 체계적인 지도</li>
            <li>정규 수업과 연계된 자습관 운영</li>
            <li>학교별 시험 일정에 맞춘 내신 대비 특강</li>
            <li>개인별 학습 상담 및 관리 시스템</li>
          </ul>
        </InfoBox>

        <div style={{ textAlign: 'center' }}>
          <CTAButton to="/timetable">전체 시간표 보기</CTAButton>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default WinterSchool;
