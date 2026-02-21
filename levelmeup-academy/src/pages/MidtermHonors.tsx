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
  padding: 50px 20px;
  background: linear-gradient(135deg, #2E4A6F 0%, #1a3a52 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(46, 74, 111, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    top: -100px;
    right: -100px;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
    bottom: -50px;
    left: -50px;
    border-radius: 50%;
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const MainTitle = styled.h1`
  font-size: 2.8rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 800;
  position: relative;
  z-index: 1;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 12px;
  font-weight: 600;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const DateBadge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  padding: 10px 35px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 20px;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 25px;
  }
`;

const ContentSection = styled.section`
  max-width: 900px;
  margin: 0 auto 60px;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 15px;
  border-left: 5px solid #2E4A6F;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: #2c3e50;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background: #2E4A6F;
    margin-top: 10px;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const HighlightBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  margin: 30px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const HighlightTitle = styled.h4`
  font-size: 1.4rem;
  color: #2E4A6F;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AchievementItem = styled.li`
  font-size: 1.1rem;
  color: #444;
  padding: 12px 0;
  padding-left: 30px;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #2E4A6F;
    font-weight: bold;
    font-size: 1.3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 0 10px 25px;
  }
`;

const BlogLinkSection = styled.div`
  text-align: center;
  margin: 60px 0;
`;

const BlogButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #2E4A6F 0%, #1a2942 100%);
  color: white;
  padding: 20px 50px;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(46, 74, 111, 0.3);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(46, 74, 111, 0.4);
    background: linear-gradient(135deg, #1a2942 0%, #2E4A6F 100%);
  }
  
  @media (max-width: 768px) {
    padding: 18px 40px;
    font-size: 1.1rem;
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #2E4A6F 0%, #1a2942 100%);
  color: white;
  padding: 50px;
  border-radius: 15px;
  text-align: center;
  margin-top: 60px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactText = styled.p`
  font-size: 1.15rem;
  margin-bottom: 10px;
  color: #ffffff;
  line-height: 1.8;
  
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

      <ContentSection>
        <SectionTitle>🏆 레벨미업학원 명예의 전당이란?</SectionTitle>
        <DescriptionText>
          레벨미업학원의 명예의 전당은 시험에서 우수한 성적을 거둔 학생들과 
          눈부신 성적 향상을 이룬 학생들을 칭찬하고 격려하기 위한 공간입니다.
        </DescriptionText>
        <DescriptionText>
          매 학기 중간고사와 기말고사를 통해 뛰어난 성과를 보인 학생들의 
          노력과 열정을 기록하고 있습니다.
        </DescriptionText>
      </ContentSection>

      <HighlightBox>
        <HighlightTitle>📚 25-2 기말고사 주요 성과</HighlightTitle>
        <AchievementList>
          <AchievementItem><strong>중등부</strong>: 100점 36명, 90점 이상 31명</AchievementItem>
          <AchievementItem><strong>고등부</strong>: 전교권(10등 이내) 21명, 100점 6명, 90점 이상 53명</AchievementItem>
          <AchievementItem><strong>학업도약</strong>: 수강과목 30점 이상 상승 학생 2명</AchievementItem>
        </AchievementList>
      </HighlightBox>

      <BlogLinkSection>
        <BlogButton 
          href="https://m.blog.naver.com/PostView.naver?blogId=levelmeup&logNo=224150084140&navType=by" 
          target="_blank"
          rel="noopener noreferrer"
        >
          📖 자세한 명예의 전당 보러가기
        </BlogButton>
      </BlogLinkSection>

      <ContactSection>
        <ContactTitle>상담 및 문의</ContactTitle>
        <ContactText>부천 중동 레벨미업학원</ContactText>
        <ContactText>📞 032-322-0592 / 010-2406-0591</ContactText>
        <ContactText style={{ marginTop: '15px', fontSize: '1rem', opacity: 0.85 }}>
          경기도 부천시 원미구 길주로 275 중동프라자 609호
        </ContactText>
      </ContactSection>
    </PageWrapper>
  );
};

export default MidtermHonors;
