import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { colors } from '../theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  min-height: 70vh;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 30px;
  transition: all 0.3s;
  
  &:hover {
    color: var(--primary-hover);
    transform: translateX(-5px);
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const FacilityNumber = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  background: #17B7A6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(23, 183, 166, 0.25);
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 60px;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ImageCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  aspect-ratio: 4/3;
  background: #e0e0e0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background: transparent;
  }
`;



const Lightbox = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  
  &:hover {
    background: #f0f0f0;
  }
  
  &:first-of-type {
    left: 20px;
  }
  
  &:last-of-type {
    right: 20px;
  }
`;



const DetailSection = styled.div`
  background: #f9f9f9;
  border-radius: 15px;
  padding: 40px;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out 0.4s backwards;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const DetailTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  border-left: 4px solid var(--primary);
  padding-left: 15px;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.8;
    margin-bottom: 15px;
    padding-left: 30px;
    position: relative;
    
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
`;

interface FacilityData {
  number: number;
  name: string;
  description: string;
  images: Array<{
    src: string;
    title: string;
    caption: string;
  }>;
  features: string[];
  details: string;
}

const facilitiesData: { [key: string]: FacilityData } = {
  'classroom': {
    number: 1,
    name: '강의실',
    description: '국어·영어·수학·과학 과목별 전용 강의실로 구성되어, 과목 특성에 맞는 수업 환경을 제공합니다',
    images: Array.from({ length: 18 }, (_, i) => ({
      src: `/images/classroom/${i + 1}.png`,
      title: `강의실 ${i + 1}`,
      caption: `강의실 사진 ${i + 1}`
    })),
    features: [
      '국어·영어·수학·과학 과목별 전용 강의실',
      '최신 멀티미디어 교육 시설 완비',
      '소음 차단 시설로 집중력 극대화',
      '쾌적한 냉난방 시스템',
      '각 강의실마다 화이트보드 및 프로젝터 설치'
    ],
    details: '강의실은 과목별 특성을 고려하여 설계된 전용 수업 공간입니다. 국어·영어·수학·과학 각 과목의 학습 환경을 최적화하여 학생들의 학업 성취도를 극대화합니다.'
  },
  'study-room': {
    number: 2,
    name: '자습관',
    description: '빈 시간에 자유롭게 이용하는 스터디카페형 자습 공간',
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `/images/studyroom/${i + 1}.png`,
      title: `자습실 ${i + 1}`,
      caption: `자습실 사진 ${i + 1}`
    })),
    features: [
      '1인 1좌석 독립 공간',
      '개인 스탠드 조명 완비',
      '책상 수납공간 제공',
      '조용하고 집중도 높은 분위기',
      '수업 전후 자유롭게 이용 가능'
    ],
    details: '자습관은 수업이 없는 시간에도 학원에서 자습할 수 있도록 마련된 공간입니다. 스터디카페처럼 쾌적하고 집중하기 좋은 환경을 제공하여 효율적인 자기주도 학습을 지원합니다.'
  },
  'test-room': {
    number: 3,
    name: '테스트실',
    description: '모의고사, 데일리 테스트, ICC를 진행하는 집중 평가 공간',
    images: Array.from({ length: 4 }, (_, i) => ({
      src: `/images/testroom/${i + 1}.png`,
      title: `테스트실 ${i + 1}`,
      caption: `테스트실 사진 ${i + 1}`
    })),
    features: [
      '실제 시험과 동일한 환경 구성',
      '개인별 독립 책상 배치',
      '시계 및 타이머 설치',
      'OMR 카드 마킹 연습 가능',
      '정숙하고 긴장감 있는 분위기'
    ],
    details: '테스트실은 모의고사, 주간 테스트, I.C.C(Intensive Care Class) 등 다양한 평가를 실시하는 전용 공간입니다. 실제 수능장과 유사한 환경을 조성하여 학생들이 시험에 익숙해질 수 있도록 돕습니다.'
  },
  'lounge': {
    number: 4,
    name: '라운지',
    description: '휴식과 자유 학습이 모두 가능한 공용 공간',
    images: Array.from({ length: 7 }, (_, i) => ({
      src: `/images/lounge/${i + 1}.png`,
      title: `라운지 ${i + 1}`,
      caption: `라운지 사진 ${i + 1}`
    })),
    features: [
      '넓고 쾌적한 휴식 공간',
      '정수기, 간단한 스낵 바 운영',
      '편안한 소파와 테이블 비치',
      '그룹 스터디 가능한 원형 테이블',
      '무료 Wi-Fi 제공'
    ],
    details: '라운지는 수업 전후 학생들이 편안하게 휴식하거나 친구들과 자유롭게 학습할 수 있는 공간입니다. 긴장을 풀고 재충전할 수 있는 아늑한 분위기를 제공합니다.'
  },
  'lobby': {
    number: 5,
    name: '로비',
    description: '학원의 첫인상이자 주요 안내와 성과를 확인할 수 있는 공간',
    images: Array.from({ length: 20 }, (_, i) => ({
      src: `/images/lobby/${i + 1}.png`,
      title: `로비 ${i + 1}`,
      caption: `로비 사진 ${i + 1}`
    })),
    features: [
      '밝고 개방적인 공간 구성',
      '안내 데스크 상시 운영',
      '학부모 대기 공간 마련',
      '학원 안내 자료 비치',
      '쾌적하고 청결한 환경 유지'
    ],
    details: '로비는 학생과 학부모님을 맞이하는 학원의 첫인상입니다. 밝고 쾌적한 환경에서 친절한 상담과 안내 서비스를 제공하며, 편안하게 대기하실 수 있는 공간을 마련했습니다.'
  }
};



const FacilityDetail: React.FC = () => {
  const { facilityId } = useParams<{ facilityId: string }>();
  const facility = facilitiesData[facilityId || ''];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % facility.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + facility.images.length) % facility.images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  if (!facility) {
    return (
      <PageWrapper>
        <BackButton to="/about#facilities">← 학원시설로 돌아가기</BackButton>
        <Header>
          <Title>시설을 찾을 수 없습니다</Title>
        </Header>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <BackButton to="/about#facilities">← 학원시설로 돌아가기</BackButton>
      
      <Header>
        <FacilityNumber>{facility.number}</FacilityNumber>
        <Title>{facility.name}</Title>
        <Description>{facility.description}</Description>
      </Header>

      <ImageGrid>
        {facility.images.map((image, index) => (
          <ImageCard key={index} onClick={() => openLightbox(index)}>
            <img
              src={image.src}
              alt={image.title}
              loading={index < 6 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index < 6 ? "high" : "auto"}
            />
          </ImageCard>
        ))}
      </ImageGrid>

      <Lightbox isOpen={lightboxOpen} onClick={closeLightbox}>
        <CloseButton onClick={closeLightbox}>×</CloseButton>
        <NavButton onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</NavButton>
        <LightboxImage
          src={facility.images[currentImage]?.src}
          alt={facility.images[currentImage]?.title}
          onClick={(e) => e.stopPropagation()}
        />
        <NavButton onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</NavButton>
      </Lightbox>

      <DetailSection>
        <DetailTitle>시설 특징</DetailTitle>
        <DetailList>
          {facility.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </DetailList>
      </DetailSection>

      <DetailSection>
        <DetailTitle>상세 설명</DetailTitle>
        <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.8' }}>
          {facility.details}
        </p>
      </DetailSection>
    </PageWrapper>
  );
};

export default FacilityDetail;
