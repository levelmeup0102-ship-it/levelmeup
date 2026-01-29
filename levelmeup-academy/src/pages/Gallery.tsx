import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

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
    background: #17B7A6;
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

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

interface TabProps {
  $active: boolean;
}

const Tab = styled('button', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== '$active',
})<TabProps>`
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 3px solid ${(props) => props.$active ? '#17B7A6' : '#ddd'};
  background: ${(props) => props.$active ? '#17B7A6' : 'white'};
  color: ${(props) => props.$active ? 'white' : '#666'};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(23, 183, 166, 0.3);
    border-color: #17B7A6;
    background: ${(props) => props.$active 
      ? '#17B7A6' 
      : 'rgba(23, 183, 166, 0.1)'};
    color: ${(props) => props.$active ? 'white' : '#17B7A6'};
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const GalleryCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #17B7A6;
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(26, 95, 61, 0.25);
    
    &::before {
      transform: scaleX(1);
    }
    
    h3 {
      color: #1a5f3d;
    }
    
    p {
      color: #333;
      font-weight: 500;
    }
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 280px;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 25px;
  
  h3 {
    transition: color 0.3s ease;
  }
  
  p {
    transition: color 0.3s ease;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #1a1a1a;
  transition: color 0.3s ease;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  transition: color 0.3s ease;
`;

const InfoSection = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const FeatureItem = styled.li`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #1a5f3d;
  
  &::before {
    content: '✓';
    color: #1a5f3d;
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;

const Gallery: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'class' | 'event'>('event');
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'system') {
      setActiveTab('class');
    } else if (tab === 'event') {
      setActiveTab('event');
    }
  }, [location]);

  const classImages = [
    {
      title: 'I.C.C (Intensive Care Class)',
      description: '과제·테스트 결과를 즉시 점검해 미흡한 학습을 그날 바로 보완하는 집중 관리 클래스',
      imageUrl: '/images/gallery-icc.jpg'
    },
    {
      title: 'Weekly 모의고사',
      description: '실전과 동일한 환경에서 매주 응시하고, 수업 시간에 리뷰와 랭킹까지 관리하는 주간 모의고사 시스템',
      imageUrl: '/images/gallery-mock-test.jpg'
    },
    {
      title: '학부모·학생 설명회',
      description: '학생에게는 학습 전략을, 학부모에게는 부천 지역 내신·입시 흐름을 제공하는 정기 설명회',
      imageUrl: '/images/gallery-class.jpg'
    },
    {
      title: '시험기간 코어자습제',
      description: '시험 기간 동안 의무 자습과 출결 관리로 면학 분위기를 조성하는 집중 학습 프로그램',
      imageUrl: '/images/gallery-core-study.jpg'
    },
    {
      title: '명예의 전당',
      description: '내신 기간 우수 성적 및 성적 향상 학생을 게시하고 보상하여 학습 동기를 높이는 성취 관리 시스템',
      imageUrl: '/images/gallery-hall-of-fame.jpg'
    }
  ];

  const eventImages = [
    {
      title: '우수학생 시상식',
      description: '내신 기간 우수 성적 및 성적 향상 학생을 공식적으로 시상하여 성취 경험을 강화하는 동기 부여 프로그램',
      imageUrl: '/images/event-award-ceremony.jpg'
    },
    {
      title: '무빙데이',
      description: '한 학기 성취를 함께 축하하며, 다음 도약을 위한 동기를 채우는 레벨미업 학습 리워드 이벤트',
      imageUrl: '/images/event-moving-day.jpg'
    },
    {
      title: '할로윈데이 퀴즈 이벤트',
      description: '학습 내용을 퀴즈로 즐기며 참여와 몰입을 높이는 시즌 한정 학습 이벤트',
      imageUrl: '/images/event-halloween-quiz.jpg'
    }
  ];

  const getCurrentImages = () => {
    switch (activeTab) {
      case 'class':
        return classImages;
      case 'event':
        return eventImages;
      default:
        return classImages;
    }
  };

  return (
    <PageWrapper>
      <PageTitle>갤러리</PageTitle>
      <PageSubtitle>레벨미업 학원의 수업과 학습과정을 소개합니다</PageSubtitle>

      <TabContainer>
        <Tab $active={activeTab === 'event'} onClick={() => setActiveTab('event')}>
          학습 이벤트
        </Tab>
        <Tab $active={activeTab === 'class'} onClick={() => setActiveTab('class')}>
          학습시스템
        </Tab>
      </TabContainer>

      <GalleryGrid>
        {getCurrentImages()
          .filter(image => image.imageUrl) // 이미지가 있는 카드만 표시
          .map((image, index) => (
            <GalleryCard key={index}>
              <ImagePlaceholder>
                <img src={image.imageUrl} alt={image.title} />
              </ImagePlaceholder>
              <CardContent>
                <CardTitle>{image.title}</CardTitle>
                <CardDescription>{image.description}</CardDescription>
              </CardContent>
            </GalleryCard>
          ))}
      </GalleryGrid>

      <div style={{textAlign: 'center', marginTop: '60px'}}>
        <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '20px'}}>
          더 많은 학원 소식은 Instagram에서 확인하세요!
        </p>
        <a
          href="https://www.instagram.com/levelme__up/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#17B7A6',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(26, 95, 61, 0.3)',
            transition: 'all 0.3s'
          }}
        >
          Instagram 바로가기
        </a>
      </div>
    </PageWrapper>
  );
};

export default Gallery;
