import React, { useState } from 'react';
import styled from '@emotion/styled';

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
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 20px auto;
    border-radius: 2px;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 60px;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const EventCard = styled.div<{ featured?: boolean }>`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  border: ${props => props.featured ? '3px solid #667eea' : 'none'};
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff6b6b;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  z-index: 1;
`;

const EventImage = styled.div<{ bgColor: string }>`
  height: 220px;
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  position: relative;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent);
    background-size: 30px 30px;
  }
`;

const EventDate = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  opacity: 0.9;
`;

const EventContent = styled.div`
  padding: 30px;
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

const EventDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const EventDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  
  li {
    padding: 8px 0;
    color: #444;
    display: flex;
    align-items: center;
    gap: 10px;
    
    &::before {
      content: '✓';
      color: #667eea;
      font-weight: bold;
    }
  }
`;

const EventButton = styled.a`
  display: block;
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
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
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  z-index: 10;
  transition: all 0.3s;
  
  &:hover {
    background: #f0f0f0;
    transform: scale(1.1);
  }
`;

const VideoSection = styled.div`
  padding: 60px 40px 20px;
  text-align: center;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #1a1a1a;
  }
  
  video {
    width: 100%;
    max-width: 800px;
    border-radius: 15px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

const GallerySection = styled.div`
  padding: 40px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #1a1a1a;
    text-align: center;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const PhotoCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }
  
  p {
    padding: 15px;
    text-align: center;
    font-weight: bold;
    color: #444;
    background: #f8f9fa;
  }
`;

const Events: React.FC = () => {
  const [showMovieDayModal, setShowMovieDayModal] = useState(false);
  
  const events = [
    {
      featured: true,
      title: 'MOVIE DAY 극장 대관 이벤트 🎬',
      emoji: '🎥',
      date: '2025년 1월 학기 Moving Day',
      bgColor: 'linear-gradient(135deg, #1a5f3d 0%, #ff8c42 100%)',
      description: '레벨미업 학생들을 위한 특별한 극장 대관 이벤트! 영화 관람과 함께하는 특별한 하루.',
      details: [
        '레벨미업 재원생 전원 초대',
        '인기 신작 영화 단독 상영',
        '팝콘·음료 무료 제공',
        '명예의 전당 시상식',
        '학원 우수 학생 14명 영화 100% 관람'
      ],
      hasModal: true
    },
    {
      featured: true,
      title: '2024 겨울방학 특강',
      emoji: '❄️',
      date: '2024.12.23 - 2025.02.28',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: '겨울방학 동안 집중적으로 실력을 향상시킬 수 있는 특별 프로그램입니다.',
      details: [
        '전 과목 8주 완성 커리큘럼',
        '매일 학습 관리 및 테스트',
        '소규모 맞춤형 수업',
        '조기 등록 시 20% 할인'
      ],
      link: '/consulting'
    },
    {
      featured: true,
      title: '신규 등록 이벤트',
      emoji: '🎁',
      date: '상시 진행',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: '레벨미업에 처음 등록하시는 분들을 위한 특별 혜택!',
      details: [
        '첫 달 수강료 30% 할인',
        '교재비 무료 제공',
        '무료 레벨테스트',
        '1:1 맞춤 학습 컨설팅'
      ],
      link: '/consulting'
    },
    {
      featured: false,
      title: '친구 초대 이벤트',
      emoji: '👫',
      date: '2024.12.01 - 2024.12.31',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: '친구를 초대하고 함께 공부하면 더 많은 혜택을!',
      details: [
        '친구 1명 초대 시 스타벅스 기프티콘',
        '친구 2명 이상 초대 시 추가 할인',
        '함께 등록 시 각 15% 할인',
        '그룹 스터디룸 무료 제공'
      ]
    },
    {
      featured: false,
      title: '성적 향상 챌린지',
      emoji: '🚀',
      date: '매 학기 진행',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: '성적 향상 목표를 달성한 학생들에게 드리는 보상!',
      details: [
        '2등급 향상 시 다음 달 50% 할인',
        '1등급 달성 시 특별 상품',
        '만점 달성 시 전액 환급',
        '우수 학생 시상식'
      ]
    },
    {
      featured: false,
      title: '무료 학습 상담',
      emoji: '💬',
      date: '상시 진행',
      bgColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      description: '학습 고민이 있으신가요? 무료로 상담해드립니다.',
      details: [
        '1:1 맞춤 학습 계획 수립',
        '과목별 학습 전략 상담',
        '진학 상담 및 정보 제공',
        '학부모 상담 가능'
      ]
    },
    {
      featured: false,
      title: '모의고사 무료 응시',
      emoji: '📝',
      date: '매월 마지막 주 토요일',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: '실전처럼 모의고사를 풀고 상세한 분석 리포트를 받으세요.',
      details: [
        '실전 모의고사 무료 응시',
        '상세한 성적 분석 리포트',
        '취약 영역 파악 및 보완',
        '비회원도 참여 가능'
      ]
    }
  ];

  return (
    <PageWrapper>
      <PageTitle>이벤트</PageTitle>
      <PageSubtitle>레벨미업 학원의 다양한 이벤트와 혜택을 놓치지 마세요!</PageSubtitle>

      <EventGrid>
        {events.map((event, index) => (
          <EventCard key={index} featured={event.featured}>
            {event.featured && <FeaturedBadge>HOT 🔥</FeaturedBadge>}
            <EventImage bgColor={event.bgColor}>
              <div>{event.emoji}</div>
              <EventDate>{event.date}</EventDate>
            </EventImage>
            <EventContent>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
              <EventDetails>
                {event.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </EventDetails>
              {event.hasModal ? (
                <EventButton 
                  as="button"
                  onClick={() => setShowMovieDayModal(true)}
                  style={{border: 'none', width: '100%'}}
                >
                  영상·사진 보기 🎬 →
                </EventButton>
              ) : event.link ? (
                event.link.startsWith('http') ? (
                  <EventButton href={event.link} target="_blank" rel="noopener noreferrer">
                    자세히 보기 →
                  </EventButton>
                ) : (
                  <EventButton href={event.link}>
                    상담 신청하기 →
                  </EventButton>
                )
              ) : null}
            </EventContent>
          </EventCard>
        ))}
      </EventGrid>

      {showMovieDayModal && (
        <ModalOverlay onClick={() => setShowMovieDayModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowMovieDayModal(false)}>×</CloseButton>
            
            <VideoSection>
              <h2>🎬 2025년 1월 MOVIE DAY</h2>
              <video controls autoPlay>
                <source src="/videos/movie-day-2025.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoSection>

            <GallerySection>
              <h3>📸 Moving Day 현장 사진</h3>
              <PhotoGrid>
                <PhotoCard>
                  <img src="https://www.genspark.ai/api/files/s/nypjg1sZ" alt="MOVIE DAY 스크린" />
                  <p>2025년 1학기 Moving Day 오프닝</p>
                </PhotoCard>
                <PhotoCard>
                  <img src="https://www.genspark.ai/api/files/s/deqlPDQ5" alt="명예의 전당" />
                  <p>25-1학기 레벨미업학원 학업최우수상 14명</p>
                </PhotoCard>
              </PhotoGrid>
              
              <div style={{marginTop: '40px', textAlign: 'center', paddingBottom: '20px'}}>
                <a 
                  href="https://www.instagram.com/levelme__up/"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  📷 Instagram에서 더 많은 사진 보기
                </a>
              </div>
            </GallerySection>
          </ModalContent>
        </ModalOverlay>
      )}

      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>
          궁금한 점이 있으신가요?
        </h2>
        <p style={{fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9}}>
          전화 또는 온라인으로 문의하시면 친절하게 안내해드립니다.
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button style={{
            background: 'white',
            color: '#667eea',
            padding: '15px 40px',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}>
            📞 전화 상담: 032-322-0592
          </button>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: '2px solid white',
            cursor: 'pointer'
          }}>
            💬 온라인 상담 신청
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Events;
