import React from 'react';
import { colors, gradients } from '../theme';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
`;

const HeroSection = styled.div`
  position: relative;
  padding: 80px 20px 60px;
  text-align: center;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff6b35 100%);
  color: white;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-5px);
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  opacity: 0.95;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const EventSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 15px;
  color: #1a1a1a;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const EventCard = styled.div`
  background: linear-gradient(135deg, #fff5f0 0%, #ffe8d6 100%);
  border-radius: 15px;
  padding: 35px;
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.15);
  transition: all 0.3s;
  border: 2px solid #ff6b35;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 12px 35px rgba(255, 107, 53, 0.25);
  }
`;

const EventIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  text-align: center;
  filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.1));
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ff6b35;
  text-align: center;
  font-weight: bold;
`;

const EventDescription = styled.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: center;
`;

const EventDetails = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding: 10px 0;
    color: #444;
    display: flex;
    align-items: center;
    gap: 10px;
    
    &::before {
      content: '🎃';
      font-size: 1.2rem;
    }
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const PhotoCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  background: #fff;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
  }
  
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;

const PhotoCaption = styled.div`
  padding: 25px;
  text-align: center;
  
  h4 {
    font-size: 1.3rem;
    color: #ff6b35;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

const HighlightSection = styled.div`
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  border-radius: 20px;
  padding: 50px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 40px rgba(255, 107, 53, 0.3);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const HighlightCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s;
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  
  p {
    opacity: 0.95;
    line-height: 1.6;
  }
`;

const InstagramButton = styled.a`
  display: inline-block;
  background: white;
  color: #ff6b35;
  padding: 18px 45px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 30px;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }
`;

const HalloweenEvent: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <BackButton to="/events">← 이벤트 목록</BackButton>
        <HeroTitle>🎃 할로윈 이벤트 2024</HeroTitle>
        <HeroSubtitle>
          레벨미업 학생들과 함께한 특별한 할로윈 축제<br />
          포토존, 3행시, 퀴즈 챌린지!
        </HeroSubtitle>
      </HeroSection>

      <ContentWrapper>
        {/* 이벤트 소개 */}
        <EventSection>
          <SectionTitle>🎪 할로윈 이벤트 프로그램</SectionTitle>
          <SectionSubtitle>
            3가지 특별한 이벤트로 학생들과 즐거운 시간을 보냈습니다
          </SectionSubtitle>
          
          <EventGrid>
            <EventCard>
              <EventIcon>📸</EventIcon>
              <EventTitle>포토존 이벤트</EventTitle>
              <EventDescription>
                LEVEL ME UP 할로윈 포토존에서 예쁜 인증샷 남기기
              </EventDescription>
              <EventDetails>
                <li>포토존에서 사진 찍기</li>
                <li>학원 계정 @levelme__up 태그</li>
                <li>스토리에 업로드</li>
                <li>추첨을 통한 경품 제공</li>
              </EventDetails>
            </EventCard>
            
            <EventCard>
              <EventIcon>✏️</EventIcon>
              <EventTitle>3행시 챌린지</EventTitle>
              <EventDescription>
                '할로윈' 3행시로 재치와 센스를 뽐내보세요
              </EventDescription>
              <EventDetails>
                <li>창의적인 3행시 작성</li>
                <li>유머와 재치 발휘</li>
                <li>최우수작 선정 및 시상</li>
                <li>학원 게시판에 전시</li>
              </EventDetails>
            </EventCard>
            
            <EventCard>
              <EventIcon>🧩</EventIcon>
              <EventTitle>할로윈 퀴즈</EventTitle>
              <EventDescription>
                할로윈 관련 퀴즈를 풀고 선물 받기!
              </EventDescription>
              <EventDetails>
                <li>재미있는 할로윈 퀴즈</li>
                <li>빠른 정답 맞히기</li>
                <li>선착순 경품 증정</li>
                <li>인스타 스토리로 진행</li>
              </EventDetails>
            </EventCard>
          </EventGrid>
        </EventSection>

        {/* 현장 사진 */}
        <EventSection>
          <SectionTitle>📸 할로윈 현장 스케치</SectionTitle>
          <SectionSubtitle>
            학생들의 즐거운 순간들을 담았습니다
          </SectionSubtitle>
          
          <PhotoGrid>
            <PhotoCard>
              <img src="https://www.genspark.ai/api/files/s/nypjg1sZ" alt="할로윈 포토존" />
              <PhotoCaption>
                <h4>🎃 할로윈 포토존</h4>
                <p>귀엽고 무섭게 꾸민 포토존에서<br />학생들의 행복한 웃음</p>
              </PhotoCaption>
            </PhotoCard>
            
            <PhotoCard>
              <img src="https://www.genspark.ai/api/files/s/deqlPDQ5" alt="이벤트 참여 학생들" />
              <PhotoCaption>
                <h4>👻 이벤트 참여 현장</h4>
                <p>3행시, 퀴즈, 포토존<br />모든 이벤트에 열정적으로 참여!</p>
              </PhotoCaption>
            </PhotoCard>
          </PhotoGrid>
        </EventSection>

        {/* 하이라이트 */}
        <HighlightSection>
          <SectionTitle style={{ color: 'white' }}>✨ 할로윈 이벤트 하이라이트</SectionTitle>
          <SectionSubtitle style={{ color: 'rgba(255,255,255,0.9)' }}>
            레벨미업만의 특별한 학생 문화 만들기
          </SectionSubtitle>
          
          <HighlightGrid>
            <HighlightCard>
              <div className="icon">🎨</div>
              <h3>창의력 UP</h3>
              <p>3행시로 표현력과<br />창의력을 키워요</p>
            </HighlightCard>
            
            <HighlightCard>
              <div className="icon">🤝</div>
              <h3>소통의 장</h3>
              <p>학생들 간 친목 도모<br />학원 문화 형성</p>
            </HighlightCard>
            
            <HighlightCard>
              <div className="icon">🎁</div>
              <h3>경품 증정</h3>
              <p>우수 참가자에게<br />풍성한 선물 제공</p>
            </HighlightCard>
            
            <HighlightCard>
              <div className="icon">📱</div>
              <h3>SNS 공유</h3>
              <p>인스타그램을 통한<br />추억 공유</p>
            </HighlightCard>
          </HighlightGrid>
          
          <InstagramButton 
            href="https://www.instagram.com/levelme__up/"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram에서 더 많은 사진 보기
          </InstagramButton>
        </HighlightSection>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default HalloweenEvent;
