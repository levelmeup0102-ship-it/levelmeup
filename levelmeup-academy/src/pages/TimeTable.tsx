import React, { useState } from 'react';
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
    background: #2E4A6F;
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
  border: 2px solid ${props => props.active ? '#2E4A6F' : '#ddd'};
  background: ${props => props.active ? '#2E4A6F' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 74, 111, 0.2);
  }
`;

const SubTabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

const SubTab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid ${props => props.active ? '#2E4A6F' : '#e0e0e0'};
  background: ${props => props.active ? '#2E4A6F' : 'white'};
  color: ${props => props.active ? 'white' : '#555'};
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(46, 74, 111, 0.15);
  }
`;

const ContentSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    padding: 20px 16px;
    overflow: visible !important;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #1a1a1a;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
`;

const TableWrapper = styled.div`
  width: 100%;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 0 -16px;
    padding: 0 16px;
    
    /* 스크롤바 스타일 */
    &::-webkit-scrollbar {
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #2E4A6F;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: #1E3A5F;
    }
  }
`;

const ScrollHint = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    background: linear-gradient(135deg, rgba(46, 74, 111, 0.1), rgba(46, 74, 111, 0.05));
    border: 1px solid rgba(46, 74, 111, 0.2);
    border-radius: 8px;
    margin-bottom: 12px;
    font-size: 0.85rem;
    color: #2E4A6F;
    animation: pulse 2s ease-in-out infinite;
    
    &::before {
      content: '←';
      font-size: 1.2rem;
      animation: slideLeft 1.5s ease-in-out infinite;
    }
    
    &::after {
      content: '→';
      font-size: 1.2rem;
      animation: slideRight 1.5s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.8;
      }
      50% {
        opacity: 1;
      }
    }
    
    @keyframes slideLeft {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-4px);
      }
    }
    
    @keyframes slideRight {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(4px);
      }
    }
  }
`;

const ClassTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  
  thead {
    background: #2E4A6F;
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
    min-width: 640px;
    font-size: 11px;
    
    thead th {
      padding: 8px 6px;
      font-size: 11px;
    }
    
    tbody td {
      padding: 8px 6px;
      font-size: 11px;
    }
  }
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg, rgba(46, 74, 111, 0.05) 0%, rgba(62, 90, 127, 0.05) 100%);
  padding: 25px 30px;
  border-radius: 12px;
  margin-top: 50px;
  border-left: 4px solid #2E4A6F;
  
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
      color: #2E4A6F;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-right: 8px;
    }
  }
`;

interface ClassInfo {
  name: string;
  grade?: string;
  time?: string;
  day?: string;
  teacher?: string;
  startDate?: string;
  schedule?: string;
  note?: string;
  status?: string;
}

type MainTab = '고등부' | '중등부';
type HighSchoolGrade = '고1' | '고2' | '고3';
type MiddleSchoolSubject = '수학' | '영어';

// 26-1학기 고등부 시간표 데이터 (2026년 기준)
const highSchoolTimetable: Record<HighSchoolGrade, ClassInfo[]> = {
  '고1': [
    // 국어
    { name: '국어 [개남고]', startDate: '3/2(월) 개강', schedule: '주 2회 (월/금)' },
    { name: '국어 [단산고]', startDate: '3/6(금) 개강', schedule: '주 1회 (금)' },
    { name: '국어 [부천고]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '국어 [심원고]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '국어 [정명고]', startDate: '3/8(일) 개강', schedule: '주 1회 (일)' },
    { name: '국어 [중흥고]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    // 영어
    { name: '영어 [경기에고]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '영어 [개남고]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [덕산고]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [부평고]', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' },
    { name: '영어 [부천고]', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' },
    { name: '영어 [부천여고]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [상동고]', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' },
    { name: '영어 [소명여고]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/토)' },
    { name: '영어 [심원고]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [원미고]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/토)' },
    { name: '영어 [원종고]', startDate: '3/2(월) 개강', schedule: '주 2회 (월/토)' },
    { name: '영어 [정명고]', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' },
    { name: '영어 [중흥고]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/목)' },
    // 수학
    { name: '수학 [공통수학 A]', startDate: '3/2(월) 개강', schedule: '주 3회 (월/수/토)' },
    { name: '수학 [공통수학 B]', startDate: '3/3(화) 개강', schedule: '주 3회 (화/목/일)' },
    // 과학
    { name: '과학 [통합과학 A]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '과학 [통합과학 B]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' }
  ],
  '고2': [
    // 국어
    { name: '국어 [심원고2]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)' },
    { name: '국어 [중흥고2]', startDate: '3/8(일) 개강', schedule: '주 1회 (일)' },
    // 수학
    { name: '수학 [대수A]', startDate: '3/4(수) 개강', schedule: '주 3회 (수/금/토)' },
    { name: '수학 [대수B]', startDate: '3/3(화) 개강', schedule: '주 3회 (화/목/일)' },
    // 영어
    { name: '영어 [정명고2 S]', startDate: '3/7(토) 개강', schedule: '주 2회 (토/일)' },
    { name: '영어 [정명고2 A]', startDate: '3/4(수) 개강', schedule: '주 2회 (수/일)' },
    { name: '영어 [정명고2 B]', startDate: '3/2(월) 개강', schedule: '주 2회 (월/토)' },
    { name: '영어 [부평고2]', startDate: '3/2(월) 개강', schedule: '주 2회 (월/수)' },
    { name: '영어 [심원고2]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [중흥고2 A]', startDate: '3/5(목) 개강', schedule: '주 2회 (목/일)' },
    { name: '영어 [중흥고2 B]', startDate: '3/2(월) 개강', schedule: '주 2회 (월/금)' },
    { name: '영어 [소명여고2]', startDate: '3/4(수) 개강', schedule: '주 2회 (수/토)' }
  ],
  '고3': [
    // 국어
    { name: '국어 [부천북고3]', startDate: '3/3(화) 개강', schedule: '주 1회 (화)', note: '확립과 작문' },
    { name: '국어 [도당고3]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)', note: '확립과 작문' },
    { name: '국어 [덕산고3]', startDate: '3/8(일) 개강', schedule: '주 1회 (일)', note: '확립과 작문' },
    { name: '국어 [심원고3]', startDate: '3/7(토) 개강', schedule: '주 1회 (토)', note: '확립과 작문' },
    { name: '국어 [심원고3]', startDate: '3/8(일) 개강', schedule: '주 1회 (일)', note: '언어와 매체' },
    { name: '국어 [정명고3]', startDate: '3/8(일) 개강', schedule: '주 1회 (일)', note: '언어와 매체' },
    // 수학
    { name: '수학 [미적분]', startDate: '3/2(월) 개강', schedule: '주 3회 (월/수/금)' },
    { name: '수학 [확률과통계]', startDate: '3/3(화) 개강', schedule: '주 3회 (화/목/토)' },
    // 영어
    { name: '영어 [도당고3]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [부평고3]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [소명여고3]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [중흥고3]', startDate: '3/3(화) 개강', schedule: '주 2회 (화/일)' },
    { name: '영어 [정명고3 S]', startDate: '3/7(토) 개강', schedule: '주 2회 (토/일)' },
    { name: '영어 [정명고3 A]', startDate: '3/5(목) 개강', schedule: '주 2회 (목/일)' },
    { name: '영어 [정명고3 C]', startDate: '3/2(월) 개강', schedule: '주 2회 (월/토)' },
    { name: '영어 [심원고3]', startDate: '3/2(월) 개강', schedule: '주 2회 (월/금)' },
    { name: '영어 [덕산고3]', startDate: '3/4(수) 개강', schedule: '주 2회 (수/금)' }
  ]
};

// 중등부 시간표 데이터
const middleSchoolTimetable = {
  '수학': [
    { name: '중1 A반', grade: '중1', day: '월/수/금', time: '19:00-20:30', teacher: '김수학', status: '확정' },
    { name: '중1 B반', grade: '중1', day: '화/목/토', time: '19:00-20:30', teacher: '김수학', status: '확정' },
    { name: '중2 A반', grade: '중2', day: '월/수/금', time: '20:45-22:15', teacher: '이수학', status: '확정' },
    { name: '중2 B반', grade: '중2', day: '화/목/토', time: '20:45-22:15', teacher: '이수학', status: '확정' },
    { name: '중3 A반', grade: '중3', day: '월/수/금', time: '17:00-18:30', teacher: '박수학', status: '확정' },
    { name: '중3 B반', grade: '중3', day: '화/목/토', time: '17:00-18:30', teacher: '박수학', status: '확정' }
  ],
  '영어': [
    { name: 'Starter A반', grade: '중1', day: '화/목', time: '19:00-20:30', teacher: 'Chris', status: '확정' },
    { name: 'Starter B반', grade: '중1', day: '수/금', time: '19:00-20:30', teacher: 'Sarah', status: '확정' },
    { name: 'Intermediate A반', grade: '중2', day: '월/수', time: '19:00-20:30', teacher: 'Michael', status: '확정' },
    { name: 'Intermediate B반', grade: '중2', day: '화/목', time: '20:45-22:15', teacher: 'Jessica', status: '확정' },
    { name: 'Advanced A반', grade: '중3', day: '월/수', time: '20:45-22:15', teacher: 'David', status: '확정' },
    { name: 'Advanced B반', grade: '중3', day: '화/목', time: '17:00-18:30', teacher: 'Emma', status: '확정' }
  ]
};

const TimeTablePage: React.FC = () => {
  const [mainTab, setMainTab] = useState<MainTab>('고등부');
  const [highSchoolGrade, setHighSchoolGrade] = useState<HighSchoolGrade>('고1');
  const [middleSchoolSubject, setMiddleSchoolSubject] = useState<MiddleSchoolSubject>('수학');

  return (
    <PageWrapper>
      <PageTitle>26-1학기 정규 수업 안내</PageTitle>
      <PageSubtitle>2026년 1학기 학교별·과목별 정규 수업 시간표입니다</PageSubtitle>

      {/* 메인 탭: 고등부 / 중등부 */}
      <MainTabContainer>
        <MainTab active={mainTab === '고등부'} onClick={() => setMainTab('고등부')}>
          고등부
        </MainTab>
        <MainTab active={mainTab === '중등부'} onClick={() => setMainTab('중등부')}>
          중등부
        </MainTab>
      </MainTabContainer>

      {/* 고등부 */}
      {mainTab === '고등부' && (
        <>
          <SubTabContainer>
            <SubTab active={highSchoolGrade === '고1'} onClick={() => setHighSchoolGrade('고1')}>
              고1
            </SubTab>
            <SubTab active={highSchoolGrade === '고2'} onClick={() => setHighSchoolGrade('고2')}>
              고2
            </SubTab>
            <SubTab active={highSchoolGrade === '고3'} onClick={() => setHighSchoolGrade('고3')}>
              고3
            </SubTab>
          </SubTabContainer>

          <ContentSection>
            <SectionTitle>{highSchoolGrade} 정규 개설 수업</SectionTitle>
            <ScrollHint>좌우로 스크롤하여 전체 내용을 확인하세요</ScrollHint>
            <TableWrapper>
              <ClassTable>
                <thead>
                  <tr>
                    <th>개설반</th>
                    <th>수업 일정</th>
                    <th>시간표</th>
                    {highSchoolGrade === '고3' && <th>비고</th>}
                  </tr>
                </thead>
                <tbody>
                  {highSchoolTimetable[highSchoolGrade].map((classInfo, index) => (
                    <tr key={index}>
                      <td>{classInfo.name}</td>
                      <td>{classInfo.startDate}</td>
                      <td>{classInfo.schedule}</td>
                      {highSchoolGrade === '고3' && <td>{classInfo.note || '-'}</td>}
                    </tr>
                  ))}
                </tbody>
              </ClassTable>
            </TableWrapper>
          </ContentSection>
        </>
      )}

      {/* 중등부 */}
      {mainTab === '중등부' && (
        <>
          <SubTabContainer>
            <SubTab active={middleSchoolSubject === '수학'} onClick={() => setMiddleSchoolSubject('수학')}>
              수학
            </SubTab>
            <SubTab active={middleSchoolSubject === '영어'} onClick={() => setMiddleSchoolSubject('영어')}>
              영어
            </SubTab>
          </SubTabContainer>

          <ContentSection>
            <SectionTitle>중등 {middleSchoolSubject} 개설 수업</SectionTitle>
            <ScrollHint>좌우로 스크롤하여 전체 내용을 확인하세요</ScrollHint>
            <TableWrapper>
              <ClassTable>
                <thead>
                  <tr>
                    <th>개설반</th>
                    <th>학년</th>
                    <th>요일</th>
                    <th>시간</th>
                    <th>강사</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  {middleSchoolTimetable[middleSchoolSubject].map((classInfo, index) => (
                    <tr key={index}>
                      <td>{classInfo.name}</td>
                      <td>{classInfo.grade}</td>
                      <td>{classInfo.day}</td>
                      <td>{classInfo.time}</td>
                      <td>{classInfo.teacher}</td>
                      <td>{classInfo.status}</td>
                    </tr>
                  ))}
                </tbody>
              </ClassTable>
            </TableWrapper>
          </ContentSection>
        </>
      )}

      <InfoBox>
        <h3>수업 운영 안내</h3>
        <ul>
          <li>수업 일정은 확립 수업 상황에 따라 변동 가능합니다. 수업 관련 문의는 학원으로 연락 부탁드립니다.</li>
          <li>학기 시작 시 학교별 일정에 맞춰 내신 대비 수업이 진행됩니다.</li>
          <li>학교별 반 편성으로 맞춤형 관리가 가능합니다.</li>
          <li>학원 자습관은 신청 시 자유롭게 이용 가능합니다.</li>
          <li>정확한 수업 시간 및 반 배정은 상담을 통해 안내해드립니다.</li>
          <li>문의: 레벨미업학원 032-322-0592</li>
        </ul>
      </InfoBox>
    </PageWrapper>
  );
};

export default TimeTablePage;
