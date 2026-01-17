import React from 'react';
import { colors } from '../theme';
import styled from '@emotion/styled';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #1a1a1a;
  font-weight: 700;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 5px;
    background: #17B7A6;
    margin: 20px auto;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 60px;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

const SummarySection = styled.section`
  margin-bottom: 80px;
`;

const SummaryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #2c3e50;
  font-weight: 600;
  padding-bottom: 15px;
  border-bottom: 2px solid #e0e0e0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SummaryCard = styled.div`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    background: #f5f5f5;
    border-color: #d0d0d0;
  }
`;

const CardYear = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #34495e;
  margin-bottom: 15px;
`;

const CardLabel = styled.div`
  font-size: 0.95rem;
  color: #95a5a6;
  margin-bottom: 10px;
`;

const CardValue = styled.div`
  font-size: 1.1rem;
  color: #7f8c8d;
  font-style: italic;
`;

const SchoolBreakdown = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
  text-align: left;
`;

const SchoolItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 0.9rem;
  color: #555;
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const SchoolName = styled.span`
  font-weight: 600;
  color: #2c3e50;
`;

const SchoolCount = styled.span`
  font-weight: 700;
  color: ${colors.green.primary};
  font-size: 1rem;
`;

const YearSection = styled.section`
  margin-bottom: 80px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const YearTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 3px solid #34495e;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const YearDescription = styled.p`
  font-size: 1.05rem;
  color: #7f8c8d;
  margin-bottom: 30px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const RecordTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  
  thead {
    background: #34495e;
    color: white;
  }
  
  th {
    padding: 18px 15px;
    text-align: center;
    font-weight: 600;
    font-size: 1.05rem;
    border-right: 1px solid rgba(255,255,255,0.1);
    
    &:last-child {
      border-right: none;
    }
  }
  
  tbody tr {
    border-bottom: 1px solid #e0e0e0;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background: #fafafa;
    }
  }
  
  td {
    padding: 16px 15px;
    text-align: center;
    font-size: 1rem;
    color: #2c3e50;
    border-right: 1px solid #f0f0f0;
    
    &:last-child {
      border-right: none;
    }
  }
  
  @media (max-width: 768px) {
    th, td {
      padding: 12px 8px;
      font-size: 0.9rem;
    }
  }
`;

const EmptyMessage = styled.tr`
  td {
    padding: 60px 20px !important;
    text-align: center;
    color: #95a5a6;
    font-style: italic;
    font-size: 1.05rem;
  }
`;

const HallOfFame: React.FC = () => {
  return (
    <PageWrapper>
      <PageTitle>합격 이야기</PageTitle>
      <PageSubtitle>
        명예의 전당<br/>
        -<br/>
        레벨미업에서 함께 만들어 온<br/>
        최근 5개년 대학 합격 성과<br/>
        <span style={{display: 'block', marginTop: '15px', fontSize: '1rem', color: '#888', fontStyle: 'italic'}}>
          "성적보다 과정을, 결과보다 성장을 중시한<br/>
          레벨미업 학생들의 실제 진학 기록입니다."
        </span>
      </PageSubtitle>

      {/* 최근 5개년 대학 진학 성과 요약 */}
      <SummarySection>
        <SummaryTitle>LEVEL ME UP 최근 5개년 주요대학 합격 결과</SummaryTitle>
        <SummaryGrid>
          <SummaryCard>
            <CardYear>26학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>27명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>서울대학교</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>2명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>2명</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
            <CardLabel style={{marginTop: '15px', fontSize: '0.85rem', color: '#95a5a6'}}>현재 집계중</CardLabel>
          </SummaryCard>
          <SummaryCard>
            <CardYear>25학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>26명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>약학과</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
          </SummaryCard>
          <SummaryCard>
            <CardYear>24학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>38명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>서울대학교</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>3명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>2명</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
          </SummaryCard>
          <SummaryCard>
            <CardYear>23학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>37명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>한의예과</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>서울대학교</SchoolName>
                <SchoolCount>2명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>포스텍</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>2명</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
          </SummaryCard>
          <SummaryCard>
            <CardYear>22학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>30명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>서울대학교</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>1명</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
          </SummaryCard>
        </SummaryGrid>
      </SummarySection>

      {/* 26학년도 합격 실적 */}
      <YearSection>
        <YearTitle>26학년도 대학 합격 실적</YearTitle>
        <YearDescription>
          2026학년도 대학입시 합격 결과입니다. 집계가 완료되는 대로 업데이트됩니다.
        </YearDescription>
        <RecordTable>
          <thead>
            <tr>
              <th>출신 고등학교</th>
              <th>합격 대학</th>
              <th>합격 학과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>정명고등학교</td>
              <td>서울대학교</td>
              <td>기계공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>연세대학교</td>
              <td>신소재공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>KENTECH</td>
              <td>에너지공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>고려대학교</td>
              <td>건축사회환경공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>연세대학교</td>
              <td>사학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>고려대학교</td>
              <td>사학과</td>
            </tr>
            <tr>
              <td>부천북고등학교</td>
              <td>성균관대학교</td>
              <td>전자전기공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>성균관대학교</td>
              <td>전자전기공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>중앙대학교</td>
              <td>기계공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>경희대학교</td>
              <td>기계공학부</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>경희대학교</td>
              <td>응용화학과</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>이화여자대학교</td>
              <td>경제학과</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>한국외국어대학교</td>
              <td>경제학부</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>한국외국어대학교</td>
              <td>독일어과</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>건국대학교</td>
              <td>공과대학 자율전공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>공군사관학교</td>
              <td>-</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>동국대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>중흥고등학교</td>
              <td>동국대학교</td>
              <td>전자전기공학부</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>숙명여자대학교</td>
              <td>-</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>숭실대학교</td>
              <td>경영학부</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>세종대학교</td>
              <td>호텔관광외식경영학과</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>성신여자대학교</td>
              <td>-</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>인하대학교</td>
              <td>화학공학과</td>
            </tr>
            <tr>
              <td>부천북고등학교</td>
              <td>명지대학교</td>
              <td>신소재공학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>가톨릭대학교</td>
              <td>수학과</td>
            </tr>
            <tr>
              <td>부천북고등학교</td>
              <td>가천대학교</td>
              <td>신소재공학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>순천향대학교</td>
              <td>정보통신학과</td>
            </tr>
          </tbody>
        </RecordTable>
      </YearSection>

      {/* 25학년도 합격 실적 */}
      <YearSection>
        <YearTitle>25학년도 대학 합격 실적</YearTitle>
        <YearDescription>
          2025학년도 대학입시 합격 결과입니다. 집계가 완료되는 대로 업데이트됩니다.
        </YearDescription>
        <RecordTable>
          <thead>
            <tr>
              <th>출신 고등학교</th>
              <th>합격 대학</th>
              <th>합격 학과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>정명고등학교</td>
              <td>가천대학교</td>
              <td>의예과</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>충남대학교</td>
              <td>약학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>고려대학교</td>
              <td>화공생명공학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>서강대학교</td>
              <td>인공지능학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>서강대학교</td>
              <td>사학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>성균관대학교</td>
              <td>사회계열</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한양대학교</td>
              <td>사학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한양대학교</td>
              <td>사회학과</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>이화여자대학교</td>
              <td>인공지능데이터사이언스학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한국외국어대학교</td>
              <td>경영학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한국외국어대학교</td>
              <td>일본언어문화학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한국외국어대학교</td>
              <td>상경대학</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한국외국어대학교</td>
              <td>중국어교육학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>서울시립대학교</td>
              <td>자유전공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>숙명여자대학교</td>
              <td>기계시스템학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>숙명여자대학교</td>
              <td>르꼬르동블루외식경영학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>성신여자대학교</td>
              <td>수리통계데이터사이언스학부</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>성신여자대학교</td>
              <td>영어영문학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인하대학교</td>
              <td>기계공학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인하대학교</td>
              <td>아태물류학과</td>
            </tr>
            <tr>
              <td>덕산고등학교</td>
              <td>인하대학교</td>
              <td>기계공학과</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>인하대학교</td>
              <td>생명과학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>홍익대학교</td>
              <td>기계시스템디자인공학과</td>
            </tr>
            <tr>
              <td>덕산고등학교</td>
              <td>홍익대학교</td>
              <td>기계시스템디자인공학과</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>국민대학교</td>
              <td>영어영문학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>단국대학교</td>
              <td>전자전기공학과</td>
            </tr>
            <tr>
              <td>중원고등학교</td>
              <td>수원대학교</td>
              <td>경영학과</td>
            </tr>
          </tbody>
        </RecordTable>
      </YearSection>

      {/* 24학년도 합격 실적 */}
      <YearSection>
        <YearTitle>24학년도 대학 합격 실적</YearTitle>
        <YearDescription>
          2024학년도 대학입시 합격 결과입니다. 집계가 완료되는 대로 업데이트됩니다.
        </YearDescription>
        <RecordTable>
          <thead>
            <tr>
              <th>출신 고등학교</th>
              <th>합격 대학</th>
              <th>합격 학과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>정명고등학교</td>
              <td>서울대학교</td>
              <td>자유전공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>연세대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>연세대학교</td>
              <td>심리학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>연세대학교</td>
              <td>약학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>고려대학교</td>
              <td>교육학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>고려대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>성균관대학교</td>
              <td>사회과학계열</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>서강대학교</td>
              <td>사회과학부</td>
            </tr>
            <tr>
              <td>계남고등학교</td>
              <td>한양대학교</td>
              <td>기계공학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>한양대학교</td>
              <td>교육공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>서울시립대학교</td>
              <td>경영학부</td>
            </tr>
            <tr>
              <td>중흥고등학교</td>
              <td>서울시립대학교</td>
              <td>도시사회학과</td>
            </tr>
            <tr>
              <td>수원외국어고등학교</td>
              <td>서울시립대학교</td>
              <td>-</td>
            </tr>
            <tr>
              <td>부천여자고등학교</td>
              <td>숙명여자대학교</td>
              <td>중어중문학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>숙명여자대학교</td>
              <td>중어중문학과</td>
            </tr>
            <tr>
              <td>중흥고등학교</td>
              <td>숙명여자대학교</td>
              <td>경제학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한국외국어대학교</td>
              <td>터키아제르바이잔어과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>중앙대학교</td>
              <td>디자인학부</td>
            </tr>
            <tr>
              <td>김포외국어고등학교</td>
              <td>경희대학교</td>
              <td>-</td>
            </tr>
            <tr>
              <td>부천여자고등학교</td>
              <td>경희대학교</td>
              <td>건축학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>동국대학교</td>
              <td>회계학과</td>
            </tr>
            <tr>
              <td>계남고등학교</td>
              <td>동국대학교</td>
              <td>-</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>홍익대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>중흥고등학교</td>
              <td>홍익대학교</td>
              <td>영어영문학과</td>
            </tr>
            <tr>
              <td>부명고등학교</td>
              <td>인하대학교</td>
              <td>기계공학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>인하대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인하대학교</td>
              <td>문화콘텐츠문화경영학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>숭실대학교</td>
              <td>일어일문학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>아주대학교</td>
              <td>e-비즈니스학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>인천대학교</td>
              <td>나노바이오공학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>인천대학교</td>
              <td>건축학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인천대학교</td>
              <td>-</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>광운대학교</td>
              <td>국문학과</td>
            </tr>
            <tr>
              <td>경기예술고등학교</td>
              <td>세종대학교</td>
              <td>만화애니메이션과</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>서경대학교</td>
              <td>군사학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>가천대학교</td>
              <td>-</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>수원대학교</td>
              <td>디자인학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>부천대학교</td>
              <td>치위생학과</td>
            </tr>
          </tbody>
        </RecordTable>
      </YearSection>

      {/* 23학년도 합격 실적 */}
      <YearSection>
        <YearTitle>23학년도 대학 합격 실적</YearTitle>
        <YearDescription>
          2023학년도 대학입시 합격 결과입니다.
        </YearDescription>
        <RecordTable>
          <thead>
            <tr>
              <th>출신 고등학교</th>
              <th>합격 대학</th>
              <th>학과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>정명고등학교</td>
              <td>상지대학교</td>
              <td>한의예과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>서울대학교</td>
              <td>재료공학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>서울대학교</td>
              <td>경제학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>포스텍(포항공과대학교)</td>
              <td>무은재학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>연세대학교</td>
              <td>경제학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>고려대학교</td>
              <td>영어영문학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>고려대학교</td>
              <td>신소재공학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>성균관대학교</td>
              <td>공학계열</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>건국대학교</td>
              <td>생명과학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>동국대학교</td>
              <td>기계로봇에너지공학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>홍익대학교</td>
              <td>건설환경공학과</td>
            </tr>
            <tr>
              <td>계남고등학교</td>
              <td>한국외국어대학교</td>
              <td>프랑스어학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인하대학교</td>
              <td>정보통신공학과</td>
            </tr>
            <tr>
              <td>부명고등학교</td>
              <td>인하대학교</td>
              <td>건축학과</td>
            </tr>
            <tr>
              <td>소사고등학교</td>
              <td>아주대학교</td>
              <td>미디어학과</td>
            </tr>
            <tr>
              <td>중흥고등학교</td>
              <td>성신여자대학교</td>
              <td>사회복지학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>가톨릭대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>가톨릭대학교</td>
              <td>식품영양학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>가톨릭대학교</td>
              <td>어문계열</td>
            </tr>
            <tr>
              <td>소사고등학교</td>
              <td>상명대학교</td>
              <td>소프트웨어학과</td>
            </tr>
            <tr>
              <td>소사고등학교</td>
              <td>상명대학교</td>
              <td>소프트웨어학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인천대학교</td>
              <td>생명과학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한국외국어대학교 글로벌캠퍼스</td>
              <td>언어인지학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>단국대학교 천안캠퍼스</td>
              <td>보건행정학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>경기대학교</td>
              <td>산업경영정보공학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>수원대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한성대학교</td>
              <td>IT공과학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>성결대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한서대학교</td>
              <td>치위생학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>협성대학교</td>
              <td>세무회계학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>협성대학교</td>
              <td>중국어문화학과</td>
            </tr>
            <tr>
              <td>중원고등학교</td>
              <td>한국공학대학교</td>
              <td>IT경영학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>한국공학대학교</td>
              <td>IT경영학과</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>한국공학대학교</td>
              <td>경영학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>경인여자대학교</td>
              <td>간호학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>삼육보건대학교</td>
              <td>간호학과</td>
            </tr>
            <tr>
              <td>부명고등학교</td>
              <td>서울과학기술대학교</td>
              <td>건축학과</td>
            </tr>
          </tbody>
        </RecordTable>
      </YearSection>

      {/* 22학년도 합격 실적 */}
      <YearSection>
        <YearTitle>22학년도 대학 합격 실적</YearTitle>
        <YearDescription>
          2022학년도 대학입시 합격 결과입니다.
        </YearDescription>
        <RecordTable>
          <thead>
            <tr>
              <th>출신 고등학교</th>
              <th>합격 대학</th>
              <th>학과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>소명여자고등학교</td>
              <td>서울대학교</td>
              <td>국사학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>연세대학교</td>
              <td>중어중문학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>고려대학교</td>
              <td>식품자원경제학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>서강대학교</td>
              <td>사학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>성균관대학교</td>
              <td>인문과학계열</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>성균관대학교</td>
              <td>스포츠과학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>성균관대학교</td>
              <td>사회과학계열</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한양대학교</td>
              <td>정책학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>중앙대학교</td>
              <td>체육교육학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>경희대학교</td>
              <td>정보전자신소재공학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>경희대학교</td>
              <td>체육학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>서울시립대학교</td>
              <td>행정학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한국외국어대학교</td>
              <td>ELLT학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>한국외국어대학교</td>
              <td>프랑스어학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>건국대학교</td>
              <td>체육교육과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>홍익대학교</td>
              <td>전기전자공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>홍익대학교</td>
              <td>건설환경공학과</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>국민대학교</td>
              <td>나노전자물리학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>숭실대학교</td>
              <td>융합특화자유전공학부</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인하대학교</td>
              <td>신소재공학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인하대학교</td>
              <td>영어영문학과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>인하대학교</td>
              <td>체육교육과</td>
            </tr>
            <tr>
              <td>소명여자고등학교</td>
              <td>인하대학교</td>
              <td>영어교육과</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>세종대학교</td>
              <td>생명시스템학부</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>광운대학교</td>
              <td>전자공학과</td>
            </tr>
            <tr>
              <td>원미고등학교</td>
              <td>명지대학교</td>
              <td>아랍지역학과</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>인천대학교</td>
              <td>불어불문학과</td>
            </tr>
            <tr>
              <td>정명고등학교</td>
              <td>인천대학교</td>
              <td>해양학과</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>인천대학교</td>
              <td>독어독문학과</td>
            </tr>
            <tr>
              <td>심원고등학교</td>
              <td>가천대학교</td>
              <td>유럽어문학과</td>
            </tr>
          </tbody>
        </RecordTable>
      </YearSection>
    </PageWrapper>
  );
};

export default HallOfFame;
