import React from 'react';
import { colors } from '../theme';
import styled from '@emotion/styled';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
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
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
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
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;
  }
  
  @media (max-width: 480px) {
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
  min-width: 0;
  box-sizing: border-box;
  
  &:hover {
    background: #f5f5f5;
    border-color: #d0d0d0;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
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
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: left;
`;

const SchoolItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  word-break: keep-all;
`;

const SchoolName = styled.span`
  font-weight: 700;
  color: #17B7A6;
  white-space: nowrap;
  margin-right: 0;
  flex-shrink: 0;
`;

const SchoolCount = styled.span`
  font-weight: 400;
  color: #888;
  font-size: 0.9em;
  flex-shrink: 0;
  
  &::before {
    content: '· ';
    margin: 0 4px;
    color: #ddd;
  }
`;

const TestimonialSection = styled.section`
  margin: 80px 0;
  padding: 60px 0;
  background: linear-gradient(135deg, rgba(23, 183, 166, 0.05) 0%, rgba(52, 73, 94, 0.05) 100%);
  border-radius: 20px;
`;

const TestimonialTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 50px;
  color: #2c3e50;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 30px;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 280px;
  
  &:hover {
    transform: translateY(-8px);
    border-color: #17B7A6;
    box-shadow: 0 12px 35px rgba(23, 183, 166, 0.15);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f5f5f5;
`;

const UniversityLogo = styled.div<{ $logoUrl?: string }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${props => props.$logoUrl ? `url(${props.$logoUrl}) center/cover` : 'linear-gradient(135deg, #17B7A6 0%, #0E8F86 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialYear = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #666;
  letter-spacing: -0.02em;
`;

const UniversityInfo = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.4;
  margin-bottom: 4px;
  word-break: keep-all;
  
  span {
    color: #888;
    font-weight: 400;
    margin: 0 6px;
  }
`;

const StudentInfo = styled.div`
  font-size: 0.88rem;
  color: #888;
  margin-bottom: 8px;
  font-weight: 500;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 0.95rem;
  line-height: 1.65;
  color: #555;
  margin: 0;
  position: relative;
  padding-left: 20px;
  word-break: keep-all;
  flex: 1;
  
  &::before {
    content: '"';
    position: absolute;
    left: 0;
    top: -5px;
    font-size: 2.5rem;
    color: #17B7A6;
    font-family: Georgia, serif;
    line-height: 1;
    opacity: 0.5;
  }
`;

const TestimonialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 18px;
  background: transparent;
  color: #17B7A6;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.88rem;
  transition: all 0.25s ease;
  margin-top: auto;
  
  &:hover {
    background: #17B7A6;
    color: white;
    border-color: #17B7A6;
    transform: translateX(3px);
  }
  
  &::after {
    content: '→';
    font-size: 1rem;
    transition: transform 0.25s ease;
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
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
        -<br/>
        <span style={{display: 'block', marginTop: '15px', fontSize: '1rem', color: '#888', fontStyle: 'italic'}}>
          "성적보다 과정을, 결과보다 성장을 중시한<br/>
          레벨미업 학생들의 실제 진학 기록입니다."
        </span>
      </PageSubtitle>

      {/* 최근 5개년 대학 진학 성과 요약 */}
      <SummarySection>
        <SummaryTitle>LEVEL ME UP 최근 5개년 주요대학 합격 현황</SummaryTitle>
        <SummaryGrid>
          <SummaryCard>
            <CardYear>26학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>27명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>서울대학교</SchoolName>
                <SchoolCount>기계공학부</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>신소재공학부</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>사학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount style={{fontSize: '0.8em'}}>건축사회환경공학부</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>사학과</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
            <CardLabel style={{marginTop: '15px', fontSize: '0.85rem', color: '#95a5a6'}}>현재 집계중</CardLabel>
          </SummaryCard>
          <SummaryCard>
            <CardYear>25학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>27명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>화공생명공학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>의예과</SchoolName>
                <SchoolCount>가천대학교</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>약학과</SchoolName>
                <SchoolCount>충남대학교</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>서강대학교</SchoolName>
                <SchoolCount>인공지능학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>서강대학교</SchoolName>
                <SchoolCount>사학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>성균관대학교</SchoolName>
                <SchoolCount>사회과학계열</SchoolCount>
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
                <SchoolCount>자유전공학부</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>경영학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>심리학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>약학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>교육학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>경영학과</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
          </SummaryCard>
          <SummaryCard>
            <CardYear>23학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>37명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>서울대학교</SchoolName>
                <SchoolCount>재료공학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>서울대학교</SchoolName>
                <SchoolCount>경제학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>포스텍</SchoolName>
                <SchoolCount>무은재학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>한의예과</SchoolName>
                <SchoolCount>상지대학교</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>경제학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>영어영문학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount>신소재공학과</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
          </SummaryCard>
          <SummaryCard>
            <CardYear>21학년도</CardYear>
            <CardLabel>주요대학 합격 결과</CardLabel>
            <CardValue style={{fontSize: '2rem', color: '#1a1a1a', fontWeight: '700', fontStyle: 'normal'}}>30명</CardValue>
            <SchoolBreakdown>
              <SchoolItem>
                <SchoolName>서울대학교</SchoolName>
                <SchoolCount>국사학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>연세대학교</SchoolName>
                <SchoolCount>중어중문학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>고려대학교</SchoolName>
                <SchoolCount style={{fontSize: '0.8em'}}>식품자원경제학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>서강대학교</SchoolName>
                <SchoolCount>사학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>성균관대학교</SchoolName>
                <SchoolCount>인문과학계열</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>성균관대학교</SchoolName>
                <SchoolCount>스포츠과학과</SchoolCount>
              </SchoolItem>
              <SchoolItem>
                <SchoolName>성균관대학교</SchoolName>
                <SchoolCount>사회과학계열</SchoolCount>
              </SchoolItem>
            </SchoolBreakdown>
          </SummaryCard>
        </SummaryGrid>
      </SummarySection>

      {/* 합격 수기 하이라이트 */}
      <TestimonialSection>
        <TestimonialTitle>합격 수기 하이라이트</TestimonialTitle>
        <TestimonialGrid>
          <TestimonialCard>
            <TestimonialHeader>
              <UniversityLogo>
                <img src="/images/universities/snu.png" alt="서울대학교" />
              </UniversityLogo>
              <TestimonialYear>26학년도</TestimonialYear>
            </TestimonialHeader>
            <UniversityInfo>
              서울대학교<span>·</span>기계공학부
            </UniversityInfo>
            <StudentInfo>이*헌 (정명고)</StudentInfo>
            <TestimonialQuote>
              단어 반복 학습 덕분에 난이도 높은 수능 어휘에 효과적으로 대비할 수 있었습니다.
              또한 기출·사설 모의고사 실전 훈련이 큰 도움이 됐습니다.
            </TestimonialQuote>
            <TestimonialButton href="https://m.blog.naver.com/PostView.naver?blogId=levelmeup&logNo=224113299666&referrerCode=0&searchKeyword=%ED%95%A9%EA%B2%A9%EC%88%98%EA%B8%B0" target="_blank" rel="noopener noreferrer">
              합격 수기 보기
            </TestimonialButton>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialHeader>
              <UniversityLogo>
                <img src="/images/universities/skku.png" alt="성균관대학교" />
              </UniversityLogo>
              <TestimonialYear>25학년도</TestimonialYear>
            </TestimonialHeader>
            <UniversityInfo>
              성균관대학교<span>·</span>사회과학계열
            </UniversityInfo>
            <StudentInfo>김*원 (정명고)</StudentInfo>
            <TestimonialQuote>
              겨울방학 특강에서 정리한 문법 기초가 3년 내내 큰 기반이 되었습니다.
              질문이 추상적이어도 핵심 포인트를 정확히 짚어주는 피드백이 좋았습니다.
            </TestimonialQuote>
            <TestimonialButton href="https://m.blog.naver.com/PostView.naver?blogId=levelmeup&logNo=223724458746&referrerCode=0&searchKeyword=%EA%B9%80*%EC%9B%90" target="_blank" rel="noopener noreferrer">
              합격 수기 보기
            </TestimonialButton>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialHeader>
              <UniversityLogo>
                <img src="/images/universities/yonsei.png" alt="연세대학교" />
              </UniversityLogo>
              <TestimonialYear>24학년도</TestimonialYear>
            </TestimonialHeader>
            <UniversityInfo>
              연세대학교<span>·</span>경영학과
            </UniversityInfo>
            <StudentInfo>함*아 (정명고)</StudentInfo>
            <TestimonialQuote>
              열정적인 수업과 응원·격려 덕분에 꾸준히 동기부여를 받을 수 있었습니다.
              철저한 숙제 관리와 체계적인 시스템, 자습관까지 있어 학습 환경이 좋았습니다.
            </TestimonialQuote>
            <TestimonialButton href="https://m.blog.naver.com/PostView.naver?blogId=levelmeup&logNo=223348491159&referrerCode=0&searchKeyword=%EA%B2%BD%EC%98%81%ED%95%99%EA%B3%BC" target="_blank" rel="noopener noreferrer">
              합격 수기 보기
            </TestimonialButton>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialHeader>
              <UniversityLogo>
                <img src="/images/universities/snu.png" alt="서울대학교" />
              </UniversityLogo>
              <TestimonialYear>23학년도</TestimonialYear>
            </TestimonialHeader>
            <UniversityInfo>
              서울대학교<span>·</span>경제학부
            </UniversityInfo>
            <StudentInfo>장*정 (정명고)</StudentInfo>
            <TestimonialQuote>
              문법이 약했지만 문법특강과 복습을 통해 문법 실력이 확실히 잡혔습니다.
              내신 기간에는 꼼꼼한 지문 분석과 충분한 과제로 시험 준비에 큰 도움이 됐습니다.
            </TestimonialQuote>
            <TestimonialButton href="https://m.blog.naver.com/PostView.naver?blogId=levelmeup&logNo=223020666894&referrerCode=0&searchKeyword=%EA%B2%BD%EC%A0%9C%ED%95%99%EB%B6%80" target="_blank" rel="noopener noreferrer">
              합격 수기 보기
            </TestimonialButton>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialHeader>
              <UniversityLogo>
                <img src="/images/universities/snu.png" alt="서울대학교" />
              </UniversityLogo>
              <TestimonialYear>21학년도</TestimonialYear>
            </TestimonialHeader>
            <UniversityInfo>
              서울대학교<span>·</span>국사학과
            </UniversityInfo>
            <StudentInfo>오*쁨 (소명여고)</StudentInfo>
            <TestimonialQuote>
              문법·독해·내신 등 영역별 수업이 체계적으로 구성되어 학습 효율이 높았습니다.
              자습실이 있어 별도 독서실 없이도 꾸준히 공부할 수 있었습니다.
            </TestimonialQuote>
            <TestimonialButton href="https://m.blog.naver.com/PostView.naver?blogId=levelmeup&logNo=222208454612&referrerCode=0&searchKeyword=%EA%B5%AD%EC%82%AC%ED%95%99%EA%B3%BC" target="_blank" rel="noopener noreferrer">
              합격 수기 보기
            </TestimonialButton>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialSection>

      {/* 26학년도 합격 실적 */}
      <YearSection>
        <YearTitle>26학년도 대학 합격 실적</YearTitle>
        <YearDescription>
          2026학년도 대학입시 합격 결과입니다. 현재 집계중입니다.
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
          2025학년도 대학입시 합격 결과입니다.
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
          2024학년도 대학입시 합격 결과입니다.
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
              <td>상지대학교</td>
              <td>한의예과</td>
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

      {/* 21학년도 합격 실적 */}
      <YearSection>
        <YearTitle>21학년도 대학 합격 실적</YearTitle>
        <YearDescription>
          2021학년도 대학입시 합격 결과입니다.
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
