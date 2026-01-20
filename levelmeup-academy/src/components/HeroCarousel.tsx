import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a2332;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20%;
    z-index: 10;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, 
      #1a2332 0%, 
      rgba(26, 35, 50, 0.9) 20%,
      rgba(26, 35, 50, 0.6) 40%,
      rgba(26, 35, 50, 0.3) 60%,
      transparent 100%);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, 
      #1a2332 0%, 
      rgba(26, 35, 50, 0.9) 20%,
      rgba(26, 35, 50, 0.6) 40%,
      rgba(26, 35, 50, 0.3) 60%,
      transparent 100%);
  }
  
  @media (max-width: 1023px) {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    height: 0;
    padding-bottom: 125%; /* 4:5 ratio = 5/4 = 125% */
    min-height: unset;
    max-height: unset;
    background: transparent;
    overflow: hidden;
    
    &::before,
    &::after {
      display: none;
    }
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  
  @media (max-width: 1023px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Slide = styled.div<{ active: boolean; backgroundColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.8s ease-in-out;
  animation: ${props => props.active ? fadeIn : 'none'} 0.8s ease-in-out;
  background: ${props => props.backgroundColor || '#1a2332'};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  
  &:first-of-type {
    position: relative;
  }
  
  @media (max-width: 1023px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: unset;
    background: transparent;
    overflow: hidden;
    
    &:first-of-type {
      position: absolute;
    }
  }
`;

const SlideImage = styled.img`
  max-width: 100%;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
  
  @media (min-width: 1921px) {
    max-width: 1920px;
  }
  
  @media (max-width: 1023px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, 
    rgba(0,0,0,0.3) 0%, 
    rgba(0,0,0,0.1) 50%, 
    rgba(0,0,0,0.3) 100%);
`;

const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 50%;' : 'right: 50%;'}
  ${props => props.direction === 'left' ? 'margin-left: -550px;' : 'margin-right: -550px;'}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #333;
  transition: all 0.3s;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (max-width: 1200px) {
    ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
    margin-left: 0;
    margin-right: 0;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 100;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.active ? 'white' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.2);
    background: white;
  }
`;

interface Slide {
  image: string;
  mobileImage: string;
  alt: string;
  backgroundColor?: string;
}

const slides: Slide[] = [
  {
    image: '/images/slide1.jpg',
    mobileImage: '/images/slide1-mobile.jpg',
    alt: '국영수과 입시학원 LEVEL ME UP - 개념 기출까지 잡는 내신 집중! 관리 - 전교 1등 12명 달성 - 실원고·정명고·중흥고·부천북고·부명고·원미고 등 - 2025학년도 1~2학기 고등부 중간기말고사 누적 기준',
    backgroundColor: '#0a1a2a'
  },
  {
    image: '/images/slide2.jpg',
    mobileImage: '/images/slide2-mobile.jpg',
    alt: '학교 맞춤 내신대비 레벨미업 커리큘럼 - 전교 3등 이내 1등급 50명 이상, 90점 이상 160명 이상 배출 - 중흥중·실원중·계남중·성주중·중원중·부흥중·부천중·부산중·까치울중·부천이중·부곡중 정명고·중흥고·계남고·부명고·중원고·덕산고·원미고·심원고·도당고·부천북고·원종고·소명여고 등',
    backgroundColor: '#1a0a0a'
  },
  {
    image: '/images/slide3.jpg',
    mobileImage: '/images/slide3-mobile.jpg',
    alt: '고3 집중 공략 내신·수능 병행 시스템 - SKY 포함 주요소재 대학 재원생 25명 이상 배출 - 수준별 맞춤 분반, 고3 전용반 과목별 다수 운영 - 부천 내신 수능 대비 국영수/과 선문 입시학원 LEVEL ME UP',
    backgroundColor: '#1a3d3d'
  },
  {
    image: '/images/slide4.jpg',
    mobileImage: '/images/slide4-mobile.jpg',
    alt: '2025년, 결과로 다시 한 번 증명 - 심원고 전학년 전교 1등 동시 배출 - 정명고 전교 1,2등 동시 배출 - 국영수과 전 과목 입시대비 학원',
    backgroundColor: '#1a1a1a'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <CarouselContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <SlideWrapper>
        {slides.map((slide, index) => (
          <Slide key={index} active={currentSlide === index} backgroundColor={slide.backgroundColor}>
            <SlideImage 
              src={isMobile ? slide.mobileImage : slide.image} 
              alt={slide.alt} 
            />
            <SlideOverlay />
          </Slide>
        ))}
      </SlideWrapper>

      <ArrowButton direction="left" onClick={prevSlide} aria-label="이전 슬라이드">
        ‹
      </ArrowButton>
      <ArrowButton direction="right" onClick={nextSlide} aria-label="다음 슬라이드">
        ›
      </ArrowButton>

      <IndicatorContainer>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
};

export default HeroCarousel;
