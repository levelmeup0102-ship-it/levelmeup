import React from 'react';
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

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding: 60px 20px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '🏆';
    position: absolute;
    font-size: 200px;
    opacity: 0.05;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  color: #FFD700;
  margin-bottom: 20px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 600;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const DateBadge = styled.div`
  display: inline-block;
  background: rgba(255, 215, 0, 0.2);
  border: 2px solid #FFD700;
  color: #FFD700;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 20px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #2c3e50;
  font-weight: 700;
  text-align: center;
  padding-bottom: 15px;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #2E4A6F;
    margin: 15px auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HonorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HonorCard = styled.div`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s;
  
  &:hover {
    border-color: #2E4A6F;
    box-shadow: 0 8px 25px rgba(46, 74, 111, 0.15);
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const HonorBadge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const StudentName = styled.h4`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 700;
`;

const StudentInfo = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
`;

const Achievement = styled.div`
  font-size: 1.1rem;
  color: #2E4A6F;
  font-weight: 600;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
`;

const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubjectCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 25px;
  border-left: 4px solid #2E4A6F;
`;

const SubjectTitle = styled.h4`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 700;
`;

const StudentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StudentItem = styled.li`
  padding: 8px 0;
  color: #555;
  font-size: 1rem;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #2E4A6F 0%, #1a2942 100%);
  color: white;
  padding: 50px;
  border-radius: 15px;
  text-align: center;
  margin-top: 80px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MidtermHonors: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <MainTitle>명예의 전당</MainTitle>
        <SubTitle>레벨미업학원</SubTitle>
        <DateBadge>25-2 기말고사</DateBadge>
      </HeroSection>

      {/* 주요 성과 통계 */}
      <Section>
        <SectionTitle>주요 성과</SectionTitle>
        <StatsGrid>
          <StatCard>
            <StatNumber>47명</StatNumber>
            <StatLabel>1등급 달성</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>82명</StatNumber>
            <StatLabel>2등급 이상</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>35명</StatNumber>
            <StatLabel>2등급 향상</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatLabel>성적 향상률</StatLabel>
          </StatCard>
        </StatsGrid>
      </Section>

      {/* 우수 학생 */}
      <Section>
        <SectionTitle>🏆 우수 학생</SectionTitle>
        <HonorsGrid>
          <HonorCard>
            <HonorBadge>국어 1등급</HonorBadge>
            <StudentName>김○○</StudentName>
            <StudentInfo>정명고등학교 2학년</StudentInfo>
            <Achievement>4등급 → 1등급 (3등급 향상)</Achievement>
          </HonorCard>
          
          <HonorCard>
            <HonorBadge>영어 1등급</HonorBadge>
            <StudentName>이○○</StudentName>
            <StudentInfo>부명고등학교 1학년</StudentInfo>
            <Achievement>3등급 → 1등급 (2등급 향상)</Achievement>
          </HonorCard>
          
          <HonorCard>
            <HonorBadge>수학 1등급</HonorBadge>
            <StudentName>박○○</StudentName>
            <StudentInfo>계남고등학교 3학년</StudentInfo>
            <Achievement>1학기 1등급 유지</Achievement>
          </HonorCard>
          
          <HonorCard>
            <HonorBadge>국어 1등급</HonorBadge>
            <StudentName>최○○</StudentName>
            <StudentInfo>심원고등학교 2학년</StudentInfo>
            <Achievement>2등급 → 1등급 향상</Achievement>
          </HonorCard>
          
          <HonorCard>
            <HonorBadge>영어 1등급</HonorBadge>
            <StudentName>정○○</StudentName>
            <StudentInfo>덕산고등학교 3학년</StudentInfo>
            <Achievement>2등급 → 1등급 향상</Achievement>
          </HonorCard>
          
          <HonorCard>
            <HonorBadge>과학 1등급</HonorBadge>
            <StudentName>강○○</StudentName>
            <StudentInfo>소명여고 1학년</StudentInfo>
            <Achievement>3등급 → 1등급 (2등급 향상)</Achievement>
          </HonorCard>
        </HonorsGrid>
      </Section>

      {/* 과목별 1등급 달성자 */}
      <Section>
        <SectionTitle>📚 과목별 1등급 달성자</SectionTitle>
        <SubjectGrid>
          <SubjectCard>
            <SubjectTitle>국어</SubjectTitle>
            <StudentList>
              <StudentItem>김○○ (정명고 2)</StudentItem>
              <StudentItem>최○○ (심원고 2)</StudentItem>
              <StudentItem>송○○ (부명고 1)</StudentItem>
              <StudentItem>외 12명</StudentItem>
            </StudentList>
          </SubjectCard>
          
          <SubjectCard>
            <SubjectTitle>영어</SubjectTitle>
            <StudentList>
              <StudentItem>이○○ (부명고 1)</StudentItem>
              <StudentItem>정○○ (덕산고 3)</StudentItem>
              <StudentItem>한○○ (계남고 2)</StudentItem>
              <StudentItem>외 15명</StudentItem>
            </StudentList>
          </SubjectCard>
          
          <SubjectCard>
            <SubjectTitle>수학</SubjectTitle>
            <StudentList>
              <StudentItem>박○○ (계남고 3)</StudentItem>
              <StudentItem>윤○○ (중흥고 2)</StudentItem>
              <StudentItem>조○○ (부천고 1)</StudentItem>
              <StudentItem>외 10명</StudentItem>
            </StudentList>
          </SubjectCard>
          
          <SubjectCard>
            <SubjectTitle>과학</SubjectTitle>
            <StudentList>
              <StudentItem>강○○ (소명여고 1)</StudentItem>
              <StudentItem>안○○ (도당고 2)</StudentItem>
              <StudentItem>홍○○ (원미고 3)</StudentItem>
              <StudentItem>외 10명</StudentItem>
            </StudentList>
          </SubjectCard>
        </SubjectGrid>
      </Section>

      {/* 문의 안내 */}
      <ContactSection>
        <ContactTitle>🎯 다음 시험도 레벨미업과 함께!</ContactTitle>
        <ContactText>개인별 맞춤 학습 관리로 성적 향상을 약속합니다</ContactText>
        <ContactText>📞 문의 및 상담: 032-322-0592 / 010-2406-0591</ContactText>
      </ContactSection>
    </PageWrapper>
  );
};

export default MidtermHonors;
