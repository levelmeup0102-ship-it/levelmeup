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

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
  border: 3px solid ${props => props.active ? '#1a5f3d' : '#ddd'};
  background: ${props => props.active ? 'linear-gradient(135deg, #1a5f3d 0%, #2d8659 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(26, 95, 61, 0.3);
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
  transition: all 0.3s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

const ImagePlaceholder = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 250px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent);
    background-size: 50px 50px;
  }
`;

const CardContent = styled.div`
  padding: 25px;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #1a1a1a;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
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
  const [activeTab, setActiveTab] = useState<'facility' | 'class' | 'event'>('facility');

  const facilityImages = [
    {
      title: 'Level ME Up 본관',
      description: '8개의 쾌적한 강의실에서 소규모 맞춤 수업이 진행됩니다. 빈 강의실은 자습 시 이용 가능합니다.',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: '본관 강의실'
    },
    {
      title: 'Pre ME Up 자습관',
      description: '35석 규모의 독립된 자습 공간입니다. 스터디카페 스타일로 조용하고 집중하기 좋은 환경을 제공합니다.',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: '자습관'
    },
    {
      title: '멘토링 룸',
      description: '개별 질문이나 1:1 멘토링을 위한 독립된 상담 공간입니다.',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      category: '상담실'
    },
    {
      title: '로비 & 휴게 공간',
      description: '수업 전후 여유로운 시간을 보낼 수 있는 편안한 공간입니다.',
      bgColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      category: '로비'
    },
    {
      title: '강의 시설',
      description: '프로젝터, 화이트보드 등 최신 교육 장비를 갖춘 강의실입니다.',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      category: '강의실'
    },
    {
      title: '쾌적한 환경',
      description: '청결한 화장실과 정기적인 환기로 쾌적한 학습 환경을 유지합니다.',
      bgColor: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      category: '학습환경'
    }
  ];

  const classImages = [
    {
      title: '국어 수업',
      description: '비문학, 문학, 문법 영역별 집중 학습으로 내신과 수능을 동시에 대비합니다.',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: '국어'
    },
    {
      title: '영어 수업',
      description: 'I.C.C. 시스템으로 학생 개개인의 학습 진도를 세심하게 관리합니다.',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: '영어'
    },
    {
      title: '수학 수업',
      description: '개념 이해부터 심화 문제까지 단계별 맞춤 수업을 진행합니다.',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      category: '수학'
    },
    {
      title: '과학 수업',
      description: '물리, 화학, 생명과학 등 과목별 전문 선생님의 체계적인 수업입니다.',
      bgColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      category: '과학'
    }
  ];

  const eventImages = [
    {
      title: 'MOVIE DAY 극장 대관',
      description: '재원생 전원을 초대하는 특별한 영화 관람 이벤트입니다.',
      bgColor: 'linear-gradient(135deg, #1a5f3d 0%, #ff8c42 100%)',
      category: '특별행사'
    },
    {
      title: '할로윈 이벤트',
      description: '학생들과 함께하는 즐거운 할로윈 포토존 이벤트입니다.',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      category: '계절행사'
    },
    {
      title: '성적 우수 시상식',
      description: '열심히 노력한 학생들을 위한 시상식 및 격려 행사입니다.',
      bgColor: 'linear-gradient(135deg, #ffd700 0%, #ff8c42 100%)',
      category: '시상식'
    },
    {
      title: '여름/겨울방학 특강',
      description: '방학 기간 동안 진행되는 집중 특강 프로그램입니다.',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: '특강'
    }
  ];

  const getCurrentImages = () => {
    switch (activeTab) {
      case 'facility':
        return facilityImages;
      case 'class':
        return classImages;
      case 'event':
        return eventImages;
      default:
        return facilityImages;
    }
  };

  return (
    <PageWrapper>
      <PageTitle>갤러리</PageTitle>
      <PageSubtitle>레벨미업 학원의 시설과 수업 모습을 소개합니다</PageSubtitle>

      <TabContainer>
        <Tab active={activeTab === 'facility'} onClick={() => setActiveTab('facility')}>
          학원 시설
        </Tab>
        <Tab active={activeTab === 'class'} onClick={() => setActiveTab('class')}>
          수업 모습
        </Tab>
        <Tab active={activeTab === 'event'} onClick={() => setActiveTab('event')}>
          이벤트
        </Tab>
      </TabContainer>

      <GalleryGrid>
        {getCurrentImages().map((image, index) => (
          <GalleryCard key={index}>
            <ImagePlaceholder bgColor={image.bgColor}>
              <div style={{position: 'relative', zIndex: 1, fontSize: '2rem', fontWeight: 'bold', color: 'white'}}>
                {image.category}
              </div>
            </ImagePlaceholder>
            <CardContent>
              <CardTitle>{image.title}</CardTitle>
              <CardDescription>{image.description}</CardDescription>
            </CardContent>
          </GalleryCard>
        ))}
      </GalleryGrid>

      <InfoSection>
        <SectionTitle>학원 시설 정보</SectionTitle>
        <FeatureList>
          <FeatureItem>본관 8개 강의실 (소규모 맞춤 수업)</FeatureItem>
          <FeatureItem>자습관 35석 (스터디카페 스타일)</FeatureItem>
          <FeatureItem>멘토링 룸 (1:1 상담 공간)</FeatureItem>
          <FeatureItem>청결한 화장실 및 휴게 공간</FeatureItem>
          <FeatureItem>최신 교육 장비 (프로젝터, 화이트보드)</FeatureItem>
          <FeatureItem>쾌적한 학습 환경 (정기 환기)</FeatureItem>
        </FeatureList>
      </InfoSection>

      <InfoSection>
        <SectionTitle>찾아오시는 길</SectionTitle>
        <div style={{padding: '20px', background: '#f8f9fa', borderRadius: '10px'}}>
          <p style={{fontSize: '1.1rem', marginBottom: '15px', color: '#1a1a1a'}}>
            <strong>📍 주소:</strong> 경기도 부천시 길주로 275 중동프라자 6층
          </p>
          <p style={{fontSize: '1.1rem', marginBottom: '15px', color: '#1a1a1a'}}>
            <strong>🚇 교통:</strong> 신중동역 4번 출구 방향
          </p>
          <p style={{fontSize: '1.1rem', color: '#1a1a1a'}}>
            <strong>📞 문의:</strong> 032-322-0592 / 010-2406-0591
          </p>
        </div>
      </InfoSection>

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
          Instagram 바로가기
        </a>
      </div>
    </PageWrapper>
  );
};

export default Gallery;
