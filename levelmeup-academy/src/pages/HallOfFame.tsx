import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
    background: linear-gradient(135deg, #1a5f3d 0%, #ff8c42 100%);
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

const StatsSection = styled.section`
  background: linear-gradient(135deg, #1a5f3d 0%, #2d8659 50%, #ff8c42 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 20px;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
`;

const StatItem = styled.div``;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const CategorySection = styled.section`
  margin-bottom: 60px;
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UniversitySection = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
`;

const UniversityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const UniversityBadge = styled.div`
  background: linear-gradient(135deg, #1a5f3d 0%, #2d8659 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  border: 3px solid #ff8c42;
  box-shadow: 0 4px 15px rgba(26, 95, 61, 0.3);
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
    background: linear-gradient(135deg, #1a5f3d 0%, #2d8659 100%);
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
    background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
    font-weight: bold;
    color: #1a5f3d;
  }
  
  .school {
    color: #666;
    font-weight: 500;
  }
  
  .score {
    color: #ff8c42;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const HallOfFame: React.FC = () => {
  return (
    <PageWrapper>
      <PageTitle>명예의 전당</PageTitle>
      <PageSubtitle>레벨미업과 함께 꿈을 이룬 학생들의 자랑스러운 성과</PageSubtitle>

      <StatsSection>
        <h2 style={{textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', position: 'relative', zIndex: 1}}>
          레벨미업 15년 실적 통계
        </h2>
        <StatsGrid style={{position: 'relative', zIndex: 1}}>
          <StatItem>
            <StatNumber>5년 연속</StatNumber>
            <StatLabel>서울대 합격생 배출</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50명+</StatNumber>
            <StatLabel>여름방학 1등급 달성</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>13명</StatNumber>
            <StatLabel>전교 3등 이내 배출</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>다수</StatNumber>
            <StatLabel>전교 1등 배출</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>300명+</StatNumber>
            <StatLabel>재원생 (중고등)</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>15년</StatNumber>
            <StatLabel>부천 지역 전통</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <CategorySection>
        <CategoryTitle>2023학년도 대학 합격 실적</CategoryTitle>
        <p style={{color: '#666', marginBottom: '20px', fontSize: '1.1rem'}}>
          서울대 경제학과 합격을 포함한 2023년 정시전형 최종 합격 결과입니다
        </p>
        <AchievementTable>
          <thead>
            <tr>
              <th>학생</th>
              <th>출신 고등학교</th>
              <th>합격 대학</th>
              <th>합격 학과</th>
              <th>전형</th>
            </tr>
          </thead>
          <tbody>
            <tr className="highlight">
              <td>장*정</td>
              <td className="school">정명고등학교</td>
              <td className="score">서울대학교</td>
              <td>경제학과</td>
              <td>정시</td>
            </tr>
            <tr>
              <td>장*정</td>
              <td className="school">정명고등학교</td>
              <td className="score">연세대학교</td>
              <td>경제학과</td>
              <td>정시</td>
            </tr>
            <tr>
              <td>장*정</td>
              <td className="school">정명고등학교</td>
              <td className="score">상지대학교</td>
              <td>한의예과</td>
              <td>정시</td>
            </tr>
            <tr>
              <td>하*진</td>
              <td className="school">정명고등학교</td>
              <td>인천대학교</td>
              <td>생명과학과</td>
              <td>정시</td>
            </tr>
            <tr>
              <td>하*진</td>
              <td className="school">정명고등학교</td>
              <td>가톨릭대학교</td>
              <td>어문계열</td>
              <td>정시</td>
            </tr>
          </tbody>
        </AchievementTable>
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <a 
            href="https://m.blog.naver.com/levelmeup/223055871967" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #1a5f3d 0%, #ff8c42 100%)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '25px',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(26, 95, 61, 0.3)',
              transition: 'all 0.3s'
            }}
          >
            블로그에서 합격 스토리 보기
          </a>
        </div>
      </CategorySection>

      <CategorySection>
        <CategoryTitle>2023년 1학기 국어 만점자 (중간고사)</CategoryTitle>
        <AchievementTable>
          <thead>
            <tr>
              <th>학생</th>
              <th>학교</th>
              <th>학년</th>
              <th>과목</th>
              <th>점수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>김*민</td>
              <td className="school">중흥고등학교</td>
              <td>1학년</td>
              <td>국어</td>
              <td className="score">100점</td>
            </tr>
            <tr>
              <td>김*현</td>
              <td className="school">심원고등학교</td>
              <td>1학년</td>
              <td>국어</td>
              <td className="score">100점</td>
            </tr>
            <tr>
              <td>박*민</td>
              <td className="school">부천북고등학교</td>
              <td>1학년</td>
              <td>국어</td>
              <td className="score">100점</td>
            </tr>
            <tr>
              <td>김*원</td>
              <td className="school">정명고등학교</td>
              <td>2학년</td>
              <td>국어</td>
              <td className="score">100점</td>
            </tr>
          </tbody>
        </AchievementTable>
      </CategorySection>

      <CategorySection>
        <CategoryTitle>2024년 영어 만점자 성과</CategoryTitle>
        <AchievementTable>
          <thead>
            <tr>
              <th>시험</th>
              <th>학교</th>
              <th>학년</th>
              <th>과목</th>
              <th>성과</th>
            </tr>
          </thead>
          <tbody>
            <tr className="highlight">
              <td>2024-1학기 중간</td>
              <td className="school">정명고등학교</td>
              <td>3학년</td>
              <td>영어</td>
              <td className="score">100점 7명 중 4명 배출</td>
            </tr>
            <tr className="highlight">
              <td>2024-2학기 기말</td>
              <td className="school">심원고등학교</td>
              <td>1학년</td>
              <td>영어</td>
              <td className="score">100점 4명 배출</td>
            </tr>
          </tbody>
        </AchievementTable>
      </CategorySection>

      <UniversitySection>
        <CategoryTitle>주요 내신 대비 학교 (12개교)</CategoryTitle>
        <p style={{color: '#666', marginBottom: '20px', fontSize: '1.05rem'}}>
          레벨미업 학원에서 내신 대비를 진행하는 부천 지역 주요 중·고등학교입니다
        </p>
        <UniversityGrid>
          {['덕산고', '부명고', '부천고', '부천북고', '상일고', '소명여고', 
            '심원고', '원미고', '정명고', '중원고', '중흥고', '심원중'].map((school, index) => (
            <UniversityBadge key={index}>
              {school}
            </UniversityBadge>
          ))}
        </UniversityGrid>
      </UniversitySection>

      <div style={{textAlign: 'center', marginTop: '60px', padding: '40px', background: '#f8f9fa', borderRadius: '15px'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '20px', color: '#1a1a1a'}}>
          더 많은 학원 소식이 궁금하신가요?
        </h3>
        <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '30px'}}>
          학원 시설, 수업 모습, 이벤트 사진을 갤러리에서 확인하세요!
        </p>
        <Link
          to="/gallery"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #1a5f3d 0%, #ff8c42 100%)',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(26, 95, 61, 0.3)',
            transition: 'all 0.3s'
          }}
        >
          갤러리 바로가기
        </Link>
      </div>
    </PageWrapper>
  );
};

export default HallOfFame;
