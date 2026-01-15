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
  background: linear-gradient(135deg, #4CAF50 0%, #FF6D00 100%);
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
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
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

const VideoSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 60px;
  
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

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  
  video {
    width: 100%;
    display: block;
  }
`;

const VideoControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const ControlButton = styled.button<{ primary?: boolean }>`
  background: ${props => props.primary 
    ? 'linear-gradient(135deg, #4CAF50 0%, #FF6D00 100%)' 
    : 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)'};
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const PhotoSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const PhotoCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  background: #f8f9fa;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const PhotoCaption = styled.div`
  padding: 20px;
  text-align: center;
  
  h4 {
    font-size: 1.2rem;
    color: #1a1a1a;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
  }
`;

const HighlightSection = styled.div`
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  border-radius: 20px;
  padding: 50px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  
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
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  
  p {
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const InstagramButton = styled.a`
  display: inline-block;
  background: white;
  color: #4CAF50;
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

const MovieDay: React.FC = () => {
  const [showFullVideo, setShowFullVideo] = React.useState(false);

  return (
    <PageWrapper>
      <HeroSection>
        <BackButton to="/events">← 이벤트 목록</BackButton>
        <HeroTitle>🎬 MOVIE DAY 2025</HeroTitle>
        <HeroSubtitle>
          레벨미업 재원생들과 함께한 특별한 하루<br />
          극장 대관 이벤트 & 명예의 전당 시상식
        </HeroSubtitle>
      </HeroSection>

      <ContentWrapper>
        {/* 30초 하이라이트 영상 */}
        <VideoSection>
          <SectionTitle>🎥 30초 하이라이트</SectionTitle>
          <SectionSubtitle>
            2025년 1월 학기 Moving Day의 핵심 순간들을 담았습니다
          </SectionSubtitle>
          
          <VideoContainer>
            <video controls autoPlay muted loop>
              <source src="/videos/movie-day-highlight-30s.mp4" type="video/mp4" />
              브라우저가 비디오 재생을 지원하지 않습니다.
            </video>
          </VideoContainer>
          
          <VideoControls>
            <ControlButton primary onClick={() => setShowFullVideo(!showFullVideo)}>
              {showFullVideo ? '📹 30초 버전 보기' : '📹 전체 영상 보기 (4분)'}
            </ControlButton>
          </VideoControls>
        </VideoSection>

        {/* 전체 영상 (토글) */}
        {showFullVideo && (
          <VideoSection>
            <SectionTitle>🎬 전체 영상 (4분 7초)</SectionTitle>
            <SectionSubtitle>
              MOVIE DAY의 모든 순간을 감상하세요
            </SectionSubtitle>
            
            <VideoContainer>
              <video controls>
                <source src="/videos/movie-day-2025.mp4" type="video/mp4" />
                브라우저가 비디오 재생을 지원하지 않습니다.
              </video>
            </VideoContainer>
          </VideoSection>
        )}

        {/* 사진 갤러리 */}
        <PhotoSection>
          <SectionTitle>📸 Moving Day 현장</SectionTitle>
          <SectionSubtitle>
            학생들의 행복한 순간들을 포착했습니다
          </SectionSubtitle>
          
          <PhotoGrid>
            <PhotoCard>
              <img src="https://www.genspark.ai/api/files/s/nypjg1sZ" alt="MOVIE DAY 오프닝" />
              <PhotoCaption>
                <h4>🎬 극장 오프닝</h4>
                <p>2025년 1학기 Moving Day 시작!</p>
              </PhotoCaption>
            </PhotoCard>
            
            <PhotoCard>
              <img src="https://www.genspark.ai/api/files/s/deqlPDQ5" alt="명예의 전당 시상식" />
              <PhotoCaption>
                <h4>🏆 명예의 전당 시상식</h4>
                <p>25-1학기 학업최우수상 수상자 14명</p>
              </PhotoCaption>
            </PhotoCard>
          </PhotoGrid>
        </PhotoSection>

        {/* 하이라이트 */}
        <HighlightSection>
          <SectionTitle style={{ color: 'white' }}>✨ MOVIE DAY 하이라이트</SectionTitle>
          <SectionSubtitle style={{ color: 'rgba(255,255,255,0.9)' }}>
            레벨미업만의 특별한 이벤트
          </SectionSubtitle>
          
          <HighlightGrid>
            <HighlightCard>
              <div className="icon">🎥</div>
              <h3>극장 대관</h3>
              <p>레벨미업 재원생 전원 초대<br />인기 신작 영화 단독 상영</p>
            </HighlightCard>
            
            <HighlightCard>
              <div className="icon">🏆</div>
              <h3>명예의 전당 시상</h3>
              <p>25-1학기 학업최우수상<br />14명 수상자 시상식</p>
            </HighlightCard>
            
            <HighlightCard>
              <div className="icon">🍿</div>
              <h3>특별 혜택</h3>
              <p>팝콘·음료 무료 제공<br />즐거운 간식 타임</p>
            </HighlightCard>
            
            <HighlightCard>
              <div className="icon">📚</div>
              <h3>학습 동기부여</h3>
              <p>우수 학생 격려<br />학습 의욕 고취</p>
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

export default MovieDay;
