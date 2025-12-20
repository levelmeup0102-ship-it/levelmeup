import React from 'react';
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

const PromotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const PromotionCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

const PromotionImage = styled.div<{ bgColor: string }>`
  height: 200px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent);
    background-size: 30px 30px;
  }
`;

const PromotionContent = styled.div`
  padding: 30px;
`;

const PromotionTag = styled.span`
  display: inline-block;
  background: #ff6b6b;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const PromotionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

const PromotionDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const PromotionDetails = styled.ul`
  list-style: none;
  padding: 0;
  
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

const Promotions: React.FC = () => {
  const promotions = [
    {
      tag: '신규등록',
      title: '첫 수강 할인 이벤트',
      emoji: '🎉',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: '레벨미업 학원을 처음 등록하시는 학생들을 위한 특별 할인 혜택!',
      details: [
        '정규반 등록 시 첫 달 수강료 30% 할인',
        '교재비 무료 제공',
        '무료 레벨테스트 및 학습 컨설팅',
        '친구 추천 시 추가 할인 혜택'
      ]
    },
    {
      tag: '성적우수',
      title: '성적 향상 장학금',
      emoji: '🏆',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: '성적이 크게 향상된 학생들에게 드리는 특별 장학금 제도',
      details: [
        '등급 2단계 이상 향상 시 다음 달 수강료 50% 할인',
        '전교 등수 100등 이상 상승 시 특별 장학금',
        '모의고사 1등급 달성 시 축하 선물',
        '수능 만점자 전액 장학금'
      ]
    },
    {
      tag: '여름특강',
      title: '2024 여름방학 특강',
      emoji: '☀️',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: '여름방학 동안 집중적으로 실력을 키울 수 있는 특별 프로그램',
      details: [
        '4주 완성 집중 커리큘럼',
        '소규모 맞춤형 수업',
        '매일 학습 관리 및 피드백',
        '조기 등록 시 10% 추가 할인'
      ]
    },
    {
      tag: '그룹할인',
      title: '친구와 함께 등록',
      emoji: '👥',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: '친구들과 함께 등록하면 더 큰 혜택을 드립니다',
      details: [
        '2명 등록 시 각 15% 할인',
        '3명 이상 등록 시 각 20% 할인',
        '같은 반 배정으로 함께 학습',
        '그룹 스터디룸 무료 제공'
      ]
    },
    {
      tag: '내신대비',
      title: '내신 만점 프로젝트',
      emoji: '📝',
      bgColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      description: '학교 시험 기간에 맞춘 집중 내신 대비 프로그램',
      details: [
        '학교별 맞춤 시험 대비',
        '기출문제 분석 및 예상문제 제공',
        '시험 2주 전 무료 특강',
        '1:1 질의응답 무제한'
      ]
    },
    {
      tag: '수능대비',
      title: '수능 완성 패키지',
      emoji: '🎯',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: '수능 만점을 위한 체계적인 마스터 플랜',
      details: [
        '수능 출제 경향 완벽 분석',
        '주 3회 실전 모의고사',
        '취약 영역 집중 관리',
        '수능 D-100 특별 프로그램'
      ]
    }
  ];

  return (
    <PageWrapper>
      <PageTitle>주요 홍보사항</PageTitle>
      <PageSubtitle>레벨미업 학원의 다양한 프로그램과 혜택을 만나보세요</PageSubtitle>

      <PromotionGrid>
        {promotions.map((promo, index) => (
          <PromotionCard key={index}>
            <PromotionImage bgColor={promo.bgColor}>
              {promo.emoji}
            </PromotionImage>
            <PromotionContent>
              <PromotionTag>{promo.tag}</PromotionTag>
              <PromotionTitle>{promo.title}</PromotionTitle>
              <PromotionDescription>{promo.description}</PromotionDescription>
              <PromotionDetails>
                {promo.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </PromotionDetails>
            </PromotionContent>
          </PromotionCard>
        ))}
      </PromotionGrid>
    </PageWrapper>
  );
};

export default Promotions;
