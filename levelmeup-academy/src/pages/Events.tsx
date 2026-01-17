import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { colors } from '../theme';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
    background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
    margin: 20px auto;
    border-radius: 2px;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  border-bottom: 2px solid #e0e0e0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    border-bottom: none;
  }
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 15px 30px;
  background: ${props => props.active ? 'white' : 'transparent'};
  border: none;
  border-bottom: 3px solid ${props => props.active ? colors.green.primary : 'transparent'};
  font-size: 1.1rem;
  font-weight: ${props => props.active ? '700' : '500'};
  color: ${props => props.active ? colors.green.primary : '#666'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: ${colors.green.primary};
    background: #fafafa;
  }
  
  @media (max-width: 768px) {
    border-bottom: 1px solid #e0e0e0;
    border-left: 3px solid ${props => props.active ? colors.green.primary : 'transparent'};
    text-align: left;
    padding: 12px 20px;
  }
`;

const TabContent = styled.div`
  animation: fadeIn 0.3s ease-in;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 109, 0, 0.05) 100%);
  padding: 25px 30px;
  border-radius: 12px;
  border-left: 4px solid ${colors.green.primary};
  margin-bottom: 40px;
  text-align: center;
  
  p {
    color: #555;
    line-height: 1.8;
    font-size: 1rem;
    margin: 0;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  }
`;

const CardHeader = styled.div<{ bgColor: string }>`
  background: ${props => props.bgColor};
  color: #2c3e50;
  padding: 25px;
  text-align: center;
`;

const CardDate = styled.div`
  font-size: 0.95rem;
  opacity: 0.75;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  font-weight: 600;
  color: #1a1a1a;
`;

const CardContent = styled.div`
  padding: 30px;
`;

const CardDescription = styled.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 0.98rem;
`;

const CardDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  
  li {
    padding: 8px 0;
    color: #444;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.95rem;
    line-height: 1.6;
    
    &::before {
      content: '•';
      color: ${colors.green.primary};
      font-weight: bold;
      font-size: 1.2rem;
      margin-top: -2px;
    }
  }
`;

const CardButton = styled(Link)`
  display: block;
  width: 100%;
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
`;

const ExternalButton = styled.a`
  display: block;
  width: 100%;
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
`;

const Events: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'study' | 'insights' | 'programs' | 'management'>('study');
  
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'study') {
      setActiveTab('study');
    } else if (hash === 'analysis' || hash === 'insights') {
      setActiveTab('insights');
    } else if (hash === 'programs') {
      setActiveTab('programs');
    } else if (hash === 'management') {
      setActiveTab('management');
    }
    
    // 탭 전환 후 스크롤
    if (hash) {
      setTimeout(() => {
        const tabContainer = document.querySelector('[data-tab-container]');
        if (tabContainer) {
          tabContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  // 자습 프로그램 콘텐츠
  const studyProgramsContent = [
    {
      title: 'WINTERM SCHOOL',
      subtitle: '겨울방학',
      bgColor: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
      description: '겨울방학 집중 자습·학습 설계 프로그램',
      mainText: '겨울방학 동안 학습 흐름이 끊기지 않도록 자습 관리 + 학습 루틴 형성을 함께 진행합니다.',
      details: [
        '레벨미업 졸업생 출신 멘토와 1:1 대화를 통해 학생의 수준과 목표에 맞는 맞춤 학습 계획을 설계하고, 실행까지 관리합니다.',
        '멘토가 실제 경험을 바탕으로 학교별 내신 정보와 공부 포인트까지 함께 안내해 "무작정 공부"가 아니라 방향 있는 학습이 가능해집니다.'
      ]
    },
    {
      title: 'SUMMARIZE',
      subtitle: '여름방학',
      bgColor: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
      description: '여름방학 맞춤 자습·성적 점프 프로그램',
      mainText: '여름방학은 2학기 성적을 좌우하는 중요한 시기입니다.',
      details: [
        'SUMMARIZE는 방학 동안 자습 관리 + 취약 파트 정리 + 실전 대비 학습을 중심으로 진행됩니다.',
        '특히 졸업생 멘토와의 1:1 맞춤 상담을 통해 학생 본인의 상황에 맞는 현실적인 계획을 세우고 꾸준히 점검합니다.',
        '"혼자 하면 흔들리는 방학 공부"를 끝까지 끌고 가는 시스템으로 만들어드립니다.'
      ]
    },
    {
      title: '코어 자습제',
      subtitle: '내신 기간 신청제 / 무료',
      bgColor: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
      description: '내신 기간 무료 자습 지원 프로그램',
      mainText: '코어 자습제는 내신 기간에 신청제로 운영되는 무료 프로그램입니다.',
      details: [
        '시험 직전, 혼자 공부하다 막히는 부분을 줄이기 위해 자습 환경 제공 + 학습 관리 + 내신 대비 집중 지원을 진행합니다.',
        '학교별 시험 범위에 맞춰 내신 대비 흐름이 흔들리지 않도록 끝까지 밀어드립니다.',
        '"내신 기간에 공부가 안 되는 학생"이 아니라 내신 기간에 공부가 되는 학생으로 바뀌게 하는 실전형 관리입니다.'
      ]
    }
  ];

  // 내신 인사이트 콘텐츠
  const insightsContent = [
    {
      title: '25년 2학기 내신 결과 분석',
      date: '',
      bgColor: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
      description: '학교별 내신 시험 경향과 레벨미업 재원생들의 성적 향상 결과를 상세히 분석하여 다음 내신 대비 커리큘럼을 수립합니다.',
      details: [
        '부천 중고등학교 내신 분석 및 대비 전략',
        '1등급, 만점 등 우수 성적 게재',
        '재원생 평균 1,2 등급 향상 성과'
      ],
      link: 'https://blog.naver.com/levelmeup'
    },
    {
      title: '고등학교별 내신 출제 경향',
      date: '정기 업데이트',
      bgColor: 'linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%)',
      description: '부천 지역 주요 고등학교의 내신 출제 유형과 난이도를 지속적으로 분석하여 공유합니다.',
      details: [
        '학교별 출제 패턴 분석',
        '과목별 난이도 및 변별력 정리',
        '효과적인 내신 대비 방법 제시'
      ],
      link: 'https://blog.naver.com/levelmeup'
    },
    {
      title: '월간 학습 성과 리포트',
      date: '매월 발행',
      bgColor: 'linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 100%)',
      description: '재원생들의 학습 진도와 성적 변화를 정기적으로 분석하여 학부모님께 안내드립니다.',
      details: [
        '개별 학생 성적 추이 분석',
        '학습 목표 대비 달성도 점검',
        '다음 달 학습 계획 수립'
      ],
      link: 'https://blog.naver.com/levelmeup'
    }
  ];

  // 특강·프로그램 콘텐츠
  const programsContent = [
    {
      title: '수학 CLASS UP 특강',
      target: '중1 ~ 고2',
      date: '1차 개강 2026년 1월 4일 (일)',
      schedule: '주 1회 일요일',
      bgColor: 'linear-gradient(135deg, #F1F8E9 0%, #DCEDC8 100%)',
      description: '고등 교과학습을 위한 연계개념 총정리 및 문제풀이 특강입니다.',
      details: [
        '고등 교과학습 연계개념 총정리',
        '체계적인 문제풀이 훈련',
        '학년별 맞춤 커리큘럼',
        '개념 이해부터 응용까지 단계별 학습'
      ],
      link: '/consulting'
    },
    {
      title: '수학 기하 특강',
      target: '고등부 (고1 ~ 고2)',
      date: '2026년 1월 2일 (금) 개강',
      schedule: '주 1회 금요일',
      bgColor: 'linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)',
      description: '선택과목 기하 선행 개념 강의 및 유형 문제풀이 특강입니다.',
      details: [
        '기하 선행 개념 완성',
        '유형별 문제풀이 집중 훈련',
        '고난도 문제 대비',
        '내신 및 수능 대비 학습'
      ],
      link: '/consulting'
    },
    {
      title: '영어 Sentence UP 특강',
      target: '중등부 (중1 ~ 중3)',
      date: '2026년 1월 16일 (금) 개강',
      schedule: '주 1회 금요일',
      bgColor: 'linear-gradient(135deg, #FFF9C4 0%, #FFF59D 100%)',
      description: '중등 기초 문법 정리 및 서술형 문항 연습 특강입니다.',
      details: [
        '중등 기초 문법 체계적 정리',
        '서술형 문항 집중 연습',
        '문장 구조 분석 훈련',
        '영작 및 독해 실력 향상'
      ],
      link: '/consulting'
    },
    {
      title: '영어 Intensive GRAMMAR 특강',
      target: '고등부 (고1 ~ 고3)',
      date: '2026년 1월 16일 (금) 개강',
      schedule: '주 1회 금요일',
      bgColor: 'linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%)',
      description: '고등 핵심 문법 구조화 및 서술형 문항 연습 특강입니다.',
      details: [
        '고등 핵심 문법 체계적 구조화',
        '서술형 문항 집중 연습',
        '문법 개념 완성 및 응용',
        '내신 대비 문법 완벽 정리'
      ],
      link: '/consulting'
    },
    {
      title: '레벨미업 윈텀스쿨',
      target: '중1 ~ 고3',
      date: '2026년 1월 5일 (월) 개강',
      schedule: '월 ~ 금 09:00 ~ 17:00',
      bgColor: 'linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 100%)',
      description: '겨울방학 자습 지도 및 학습 개인 관리 프로그램입니다.',
      details: [
        '입시상담 - 진학 목표 설계 및 전략 수립',
        '자습 관리 - 평일 의무자습 및 출결 관리',
        '학습 코칭 - 주간 학습계획 작성 및 점검',
        '멘토의 학습 피드백 및 비교과 활동 설계'
      ],
      link: '/winter-school'
    }
  ];

  // 학습 관리 시스템 콘텐츠
  const managementContent = [
    {
      title: 'Weekly 모의고사',
      date: '매주 주말',
      bgColor: 'linear-gradient(135deg, #EDE7F6 0%, #D1C4E9 100%)',
      description: '실전과 동일한 환경에서 모의고사를 응시하고, 현재 학습 수준을 정확히 파악할 수 있습니다.',
      details: [
        '실전 모의고사를 통한 현재 수준 점검',
        '상세한 성적 분석 및 취약 영역 파악',
        '개별 맞춤 학습 방향 제시'
      ]
    },
    {
      title: '성적 향상 챌린지',
      date: '매 학기 진행',
      bgColor: 'linear-gradient(135deg, #FFF9C4 0%, #FFF59D 100%)',
      description: '목표 설정부터 과정 관리, 결과 확인까지 체계적인 학습 동기 부여 시스템입니다.',
      details: [
        '학기 초 개인별 목표 등급 설정',
        '주간 학습 진도 점검 및 피드백',
        '목표 달성 시 학습 동기 부여 혜택',
        '꾸준한 관리를 통한 실질적 성적 향상'
      ]
    }
  ];

  return (
    <PageWrapper>
      <PageTitle>학원소식</PageTitle>
      <PageSubtitle>레벨미업 학원의 다양한 소식과 학습 관리 시스템을 확인하세요</PageSubtitle>

      <TabContainer data-tab-container>
        <Tab active={activeTab === 'study'} onClick={() => setActiveTab('study')}>
          자습 프로그램
        </Tab>
        <Tab active={activeTab === 'insights'} onClick={() => setActiveTab('insights')}>
          내신 인사이트
        </Tab>
        <Tab active={activeTab === 'programs'} onClick={() => setActiveTab('programs')}>
          특강·프로그램 안내
        </Tab>
        <Tab active={activeTab === 'management'} onClick={() => setActiveTab('management')}>
          학습 관리 시스템
        </Tab>
      </TabContainer>

      {activeTab === 'study' && (
        <TabContent>
          <InfoBox>
            <p>
              <strong>✅ 레벨미업 자습 프로그램 공통 강점</strong><br /><br />
              레벨미업의 자습 프로그램은 <strong>졸업생 출신 멘토와 1:1 소통</strong>을 중심으로 운영됩니다.<br />
              학생과 나이 차이가 크지 않은 멘토가 직접 함께하며,<br />
              실제 경험 기반의 현실적인 학습 조언과 맞춤 상담이 가능합니다.<br /><br />
              또한 멘토가 <strong>해당 학교의 내신 구조</strong>, <strong>시험 경향과 공부 포인트</strong>, <strong>학기별 준비 전략</strong>을<br />
              함께 공유해, 자기 학교에 맞는 실질적인 내신 정보까지 얻을 수 있습니다.<br /><br />
              단순 관리가 아니라 <strong>이해되는 설명 · 공감되는 조언 · 실행 가능한 계획</strong>으로<br />
              학생이 스스로 공부 방향을 잡을 수 있도록 돕습니다.
            </p>
          </InfoBox>
          <ContentGrid>
            {studyProgramsContent.map((content, index) => (
              <ContentCard key={index}>
                <CardHeader bgColor={content.bgColor}>
                  <CardTitle>{content.title}</CardTitle>
                  <CardDate>{content.subtitle}</CardDate>
                </CardHeader>
                <CardContent>
                  <CardDescription style={{fontWeight: 600, color: '#2c3e50', marginBottom: '15px'}}>
                    {content.description}
                  </CardDescription>
                  <CardDescription style={{marginBottom: '20px'}}>
                    {content.mainText}
                  </CardDescription>
                  <CardDetails>
                    {content.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </CardDetails>
                </CardContent>
              </ContentCard>
            ))}
          </ContentGrid>
        </TabContent>
      )}

      {activeTab === 'insights' && (
        <TabContent>
          <InfoBox>
            <p>
              학교별 내신 분석과 실제 성적 결과는<br />
              레벨미업 공식 블로그를 통해 정기적으로 공유하고 있습니다.
            </p>
          </InfoBox>
          <ContentGrid>
            {insightsContent.map((content, index) => (
              <ContentCard key={index}>
                <CardHeader bgColor={content.bgColor}>
                  <CardDate>{content.date}</CardDate>
                  <CardTitle>{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{content.description}</CardDescription>
                  <CardDetails>
                    {content.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </CardDetails>
                  <ExternalButton href={content.link} target="_blank" rel="noopener noreferrer">
                    블로그에서 자세히 보기 →
                  </ExternalButton>
                </CardContent>
              </ContentCard>
            ))}
          </ContentGrid>
        </TabContent>
      )}

      {activeTab === 'programs' && (
        <TabContent>
          <ContentGrid>
            {programsContent.map((content, index) => (
              <ContentCard key={index}>
                <CardHeader bgColor={content.bgColor}>
                  <CardTitle>{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDetails style={{marginBottom: '15px', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px'}}>
                    <li><strong>대상:</strong> {content.target}</li>
                    <li><strong>개강시기:</strong> {content.date}</li>
                    <li><strong>시간표:</strong> {content.schedule}</li>
                  </CardDetails>
                  <CardDescription>{content.description}</CardDescription>
                  <CardDetails>
                    {content.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </CardDetails>
                  <CardButton to={content.link}>
                    자세히 보기 →
                  </CardButton>
                </CardContent>
              </ContentCard>
            ))}
          </ContentGrid>
        </TabContent>
      )}

      {activeTab === 'management' && (
        <TabContent>
          <ContentGrid>
            {managementContent.map((content, index) => (
              <ContentCard key={index}>
                <CardHeader bgColor={content.bgColor}>
                  <CardDate>{content.date}</CardDate>
                  <CardTitle>{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{content.description}</CardDescription>
                  <CardDetails>
                    {content.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </CardDetails>
                </CardContent>
              </ContentCard>
            ))}
          </ContentGrid>
        </TabContent>
      )}
    </PageWrapper>
  );
};

export default Events;
