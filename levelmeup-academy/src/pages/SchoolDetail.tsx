import React from 'react';
import { colors, gradients } from '../theme';
import { useParams, Link } from 'react-router-dom';
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
    background: linear-gradient(135deg, #4CAF50 0%, #FF6D00 100%);
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

const Section = styled.section`
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
`;

const AchievementTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
  
  thead {
    background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
    color: white;
  }
  
  th, td {
    padding: 18px 15px;
    text-align: center;
    border-bottom: 1px solid #e9ecef;
  }
  
  th {
    font-weight: bold;
    font-size: 1.05rem;
  }
  
  tbody tr {
    transition: background 0.3s;
    
    &:hover {
      background: #f8f9fa;
    }
    
    &:last-child td {
      border-bottom: none;
    }
  }
  
  td {
    font-size: 1rem;
    color: #333;
  }
  
  .highlight {
    background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
    font-weight: bold;
    color: #4CAF50;
  }
  
  .score {
    color: #FF6D00;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 30px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #4CAF50 0%, #FF6D00 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(26, 95, 61, 0.3);
  }
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border-left: 5px solid #4CAF50;
  margin-bottom: 30px;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #4CAF50;
  }
  
  p {
    line-height: 1.8;
    color: #444;
    margin-bottom: 10px;
  }
`;

interface SchoolData {
  name: string;
  fullName: string;
  description: string;
  achievements: Array<{
    year: string;
    semester: string;
    exam: string;
    subject: string;
    score: string;
    students?: string;
  }>;
  examAnalysis?: {
    title: string;
    difficulty: string;
    keyPoints: string[];
    strategies: string[];
  }[];
  features: string[];
}

const schoolsData: Record<string, SchoolData> = {
  '심원고': {
    name: '심원고',
    fullName: '심원고등학교',
    description: '부천 지역의 우수한 학교로, 레벨미업 학원에서 체계적인 내신 대비를 진행하고 있습니다.',
    achievements: [
      {
        year: '2024',
        semester: '2학기',
        exam: '기말고사',
        subject: '영어',
        score: '100점 4명 배출',
        students: '레벨미업 재원생'
      },
      {
        year: '2024',
        semester: '2학기',
        exam: '중간고사',
        subject: '영어',
        score: '7명 100점 중 7명',
        students: '레벨미업 재원생'
      },
      {
        year: '2024',
        semester: '1학기',
        exam: '기말고사',
        subject: '영어',
        score: '만점 다수',
        students: '내신 대비반'
      },
      {
        year: '2023',
        semester: '1학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점',
        students: '김*현 학생'
      }
    ],
    examAnalysis: [
      {
        title: '심원고1 25년 2학기 기말고사 영어 시험 분석',
        difficulty: '평이한 난이도 - 객관식만 출제, 전형적인 내신형 스타일',
        keyPoints: [
          '모든 문항이 객관식으로 구성 (서술형 없음)',
          '전반적으로 평이한 난이도로 출제',
          '기존 심원고 경향성 유지: 너무 어렵지도 쉽지도 않은 전형적 내신형',
          '함축 의미 유형이 속담 선지로 구성 - 실수 유발',
          '빈칸 유형 오답 선지가 원문과 형태 유사 - 주의 필요',
          '삽입/순서/흐름 유형에서 원문 변형 출제 포인트 활용',
          '어법 유형이 가장 난이도 높게 출제 (가정법, 수일치, 관계사, 자타동사)',
          '레벨미업 적중 문항 24문항 다수 (객관식 1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24번 등)'
        ],
        strategies: [
          '꼼꼼한 지문 숙지 필수 - 빨리 풀고 넘어가면 실수 유발',
          '많은 기출 문제와 변형 문제 풀이로 출제 포인트 파악',
          '실전 감각 늘리는 연습 중요',
          '어법 유형 집중 대비: 가정법, 수일치, 관계사, 자동사/타동사',
          '속담 선지 대비: 함축 의미 유형 숙지',
          '빈칸 유형 대비: 원문과 형태 유사한 오답 선지 주의',
          '레벨미업 심원고 맞춤 커리큘럼: 3회독 + Final Check + 예상 모의시험 1,2차, Final'
        ]
      },
      {
        title: '2024-2학기 기말고사 영어 시험 분석',
        difficulty: '평이한 난이도 - 실수 방지가 핵심',
        keyPoints: [
          '객관식과 서술형 모든 문항의 난이도가 상당히 평이',
          '서술형에서 새로운 유형 출제되었으나 기본 구조 분석 가능하면 해결',
          '2학기 중간/기말고사에서 한 문제라도 오답시 안정적 1등급 어려움',
          '레벨미업 예상모의시험 24문항 중 14문제 적중'
        ],
        strategies: [
          '영어 단어 학습에 더 많은 시간 투자 필요',
          '처음 보는 지문의 해석과 문장구조 해석 연습',
          '모의고사 독해 연습을 통한 실전 대비',
          '심원고 함정 보기 유의 (부정어, 반의어)',
          '논술형은 조건과 어법에 맞춰 기본 문장 영작 연습 필수'
        ]
      },
      {
        title: '2024-2학기 중간고사 영어 시험 분석',
        difficulty: '지난 1학기 기말고사와 비슷한 난이도',
        keyPoints: [
          '비슷한 난이도의 지난 시험에서 100점 7명 나왔던 점 고려',
          '이번 시험에서도 안정적인 고득점 가능',
          '기본 개념과 문법이 탄탄하면 충분히 만점 가능'
        ],
        strategies: [
          '시험범위 지문에 대한 완벽한 숙지',
          '변형 문제 다양하게 풀어보기',
          '서술형 대비 영작 연습'
        ]
      }
    ],
    features: [
      '심원고 전용 내신 대비반 운영',
      '학교별 맞춤 교재 제작 (기출 완벽 분석)',
      '예상모의시험 3회차 진행 (높은 적중률)',
      '서술형 문항 집중 대비',
      '시험 범위 완벽 정리 및 노트 정리 지도',
      '소규모 그룹 수업으로 개별 관리'
    ]
  },
  '정명고': {
    name: '정명고',
    fullName: '정명고등학교',
    description: '부천 지역 최상위권 학교로, 레벨미업 학원에서 가장 많은 재원생이 다니는 학교입니다. 고난이도 시험으로 유명합니다.',
    achievements: [
      {
        year: '2024',
        semester: '2학기',
        exam: '기말고사',
        subject: '영어',
        score: '고3 수준 고난이도',
        students: '변별력 높은 시험'
      },
      {
        year: '2024',
        semester: '2학기',
        exam: '중간고사',
        subject: '영어',
        score: '외부지문 고난이도',
        students: '1등급 변별 문항'
      },
      {
        year: '2024',
        semester: '1학기',
        exam: '중간고사',
        subject: '영어',
        score: '100점 7명 중 4명',
        students: '레벨미업 학생'
      },
      {
        year: '2023',
        semester: '1학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점',
        students: '김*원 학생'
      }
    ],
    examAnalysis: [
      {
        title: '2024-2학기 중간고사 영어 시험 분석',
        difficulty: '고3 수준 독해 + 고난이도 어휘 - 최상위권 변별',
        keyPoints: [
          '객관식 20번: 2018학년도 수능특강 영어 독해연습 지문 (고3 수준)',
          '변형 어휘 "affinity" 등장 - 모의고사에서도 자주 등장하지 않는 난이도 높은 어휘',
          '객관식 22번: 2018학년도 수능특강 외부지문 출제',
          '평소 수능 수준의 단어까지 학습한 학생만 정답 가능',
          '레벨미업 예상모의시험에서 객관식 18번 변형 어휘 보기 적중!'
        ],
        strategies: [
          '고1~고2 수준 빈출 단어 필수 학습',
          '고3 수준의 단어장 학습 병행 (정명고 특성상 필수)',
          '단어 뜻만 암기하지 말고 예문과 함께 어감 파악',
          '꾸준한 모의고사 응시로 빈출 단어 노출 높이기',
          '모르는 단어를 정리하며 복습하는 습관',
          '서술형: 직접 영작해보는 연습 (유형이 매년 변화)',
          '중하위권: 70점 목표로 본문 학습 꼼꼼히'
        ]
      },
      {
        title: '2024-1학기 중간고사 영어 시험 분석 (고3)',
        difficulty: '외부지문 제외하고 매우 평이 - 실수 방지 핵심',
        keyPoints: [
          '외부지문 5문항을 제외하고 모두 평이한 난이도',
          '모든 문제를 실수 없이 완벽히 풀어야 고득점',
          '100점 7명 중 4명이 레벨미업 학생'
        ],
        strategies: [
          '시험범위 본문 완벽 숙지',
          '외부지문 대비 모의고사 독해 연습',
          '실수 방지를 위한 꼼꼼한 검토'
        ]
      }
    ],
    features: [
      '정명고 전용 내신 대비반 운영 (가장 많은 재원생)',
      '역대 기출 문제 DB 구축 및 완벽 분석',
      '고난이도 어휘 집중 학습 (고3 수준 단어)',
      '외부지문 대비 실력 향상 프로그램',
      '서술형 다양한 유형 대비',
      '내신 1등급 다수 배출 (검증된 시스템)'
    ]
  },
  '중흥고': {
    name: '중흥고',
    fullName: '중흥고등학교',
    description: '레벨미업 학원에서 꾸준히 우수한 성과를 내고 있는 학교입니다.',
    achievements: [
      {
        year: '2023',
        semester: '1학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점',
        students: '김*민 학생'
      }
    ],
    features: [
      '중흥고 시험 경향 분석',
      '학교별 맞춤 커리큘럼',
      '내신 성적 향상 프로그램',
      '개별 학습 관리',
      '시험 직전 특강 운영'
    ]
  },
  '부천북고': {
    name: '부천북고',
    fullName: '부천북고등학교',
    description: '레벨미업 학원에서 내신 대비를 진행하는 주요 학교입니다.',
    achievements: [
      {
        year: '2023',
        semester: '1학기',
        exam: '중간고사',
        subject: '국어',
        score: '100점',
        students: '박*민 학생'
      }
    ],
    features: [
      '부천북고 전용 교재',
      '시험 범위별 완벽 정리',
      '서술형 대비 강화',
      '소규모 맞춤 수업',
      '질문 중심 학습법'
    ]
  },
  '덕산고': {
    name: '덕산고',
    fullName: '덕산고등학교',
    description: '부천 지역 내신 대비 학교 - 시험범위 지문 숙지만으로도 높은 점수 가능',
    achievements: [
      {
        year: '2024',
        semester: '1학기',
        exam: '중간고사',
        subject: '영어',
        score: '전반적 난이도 상승',
        students: '1~2문항 변별'
      }
    ],
    examAnalysis: [
      {
        title: '2024-1학기 중간고사 영어 시험 분석',
        difficulty: '작년 대비 난이도 조금 상승 - 시험범위 꼼꼼히 학습 필수',
        keyPoints: [
          '객관식 19번, 논술형 4번에서 많은 오답 예상',
          '하지만 충분히 맞을 수 있는 문제들',
          '레벨미업 예상 모의고사 3회 진행 - 실제 시험과 상당히 유사한 문항 다수 출제',
          '모의중간고사에서 미리 틀린 것 짚고 넘어간 학생들은 전부 정답'
        ],
        strategies: [
          '시험범위 지문 꼼꼼히 숙지 (객관식 2,3,20번 - 반드시 맞춰야)',
          '단어 변형 없는 문제는 절대 실수 금지',
          '시험범위 안의 단어들과 유의어 반드시 외우기',
          '지문 핵심내용 이해 확인 (객관식 9,10,11,14,19번)',
          '다양한 주제문 확인하고 관련 어휘 함께 학습',
          '많은 변형문제 풀이 필요',
          '고1 빈출 단어 반드시 학습',
          '서술형: 빈칸 영작 유형 대비 (어법에 맞게 문장 쓰기 연습)',
          '지문 내 핵심 문장 확인하고 영작 연습'
        ]
      }
    ],
    features: [
      '덕산고 전용 예상 모의고사 3회 진행 (높은 적중률)',
      '학교별 맞춤 교재',
      '기출 문제 완벽 분석',
      '서술형 영작 집중 연습',
      '소규모 수업으로 개별 관리',
      '시험범위 지문 완벽 정리'
    ]
  },
  '부명고': {
    name: '부명고',
    fullName: '부명고등학교',
    description: '부천 지역 내신 대비 학교',
    achievements: [],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '부천고': {
    name: '부천고',
    fullName: '부천고등학교',
    description: '부천 지역 내신 대비 학교',
    achievements: [],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '상일고': {
    name: '상일고',
    fullName: '상일고등학교',
    description: '부천 지역 내신 대비 학교',
    achievements: [],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '소명여고': {
    name: '소명여고',
    fullName: '소명여자고등학교',
    description: '부천 지역 내신 대비 학교',
    achievements: [],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '원미고': {
    name: '원미고',
    fullName: '원미고등학교',
    description: '부천 지역 내신 대비 학교',
    achievements: [],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '중원고': {
    name: '중원고',
    fullName: '중원고등학교',
    description: '부천 지역 내신 대비 학교',
    achievements: [],
    features: [
      '학교별 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  },
  '심원중': {
    name: '심원중',
    fullName: '심원중학교',
    description: '부천 지역 내신 대비 중학교',
    achievements: [],
    features: [
      '중학교 맞춤 교재',
      '기출 문제 분석',
      '내신 성적 관리',
      '소규모 수업',
      '개별 학습 지도'
    ]
  }
};

const SchoolDetail: React.FC = () => {
  const { schoolName } = useParams<{ schoolName: string }>();
  const school = schoolsData[schoolName || ''];

  if (!school) {
    return (
      <PageWrapper>
        <PageTitle>학교 정보를 찾을 수 없습니다</PageTitle>
        <BackButton to="/hall-of-fame">← 명예의 전당으로 돌아가기</BackButton>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <BackButton to="/hall-of-fame">← 명예의 전당으로 돌아가기</BackButton>
      
      <PageTitle>{school.fullName} 내신 대비</PageTitle>
      <PageSubtitle>{school.description}</PageSubtitle>

      <Section>
        <SectionTitle>{school.fullName} 특화 내신 대비 시스템</SectionTitle>
        <InfoBox>
          <h3>레벨미업의 {school.name} 특화 프로그램</h3>
          {school.features.map((feature, index) => (
            <p key={index}>✓ {feature}</p>
          ))}
        </InfoBox>
      </Section>

      {school.achievements.length > 0 && (
        <Section>
          <SectionTitle>최근 내신 성과</SectionTitle>
          <AchievementTable>
            <thead>
              <tr>
                <th>연도</th>
                <th>학기</th>
                <th>시험</th>
                <th>과목</th>
                <th>성과</th>
                <th>학생</th>
              </tr>
            </thead>
            <tbody>
              {school.achievements.map((achievement, index) => (
                <tr key={index} className={achievement.score.includes('100점') ? 'highlight' : ''}>
                  <td>{achievement.year}</td>
                  <td>{achievement.semester}</td>
                  <td>{achievement.exam}</td>
                  <td>{achievement.subject}</td>
                  <td className="score">{achievement.score}</td>
                  <td>{achievement.students}</td>
                </tr>
              ))}
            </tbody>
          </AchievementTable>
        </Section>
      )}

      {school.examAnalysis && school.examAnalysis.length > 0 && (
        <>
          {school.examAnalysis.map((analysis, index) => (
            <Section key={index}>
              <SectionTitle>{analysis.title}</SectionTitle>
              <InfoBox style={{borderLeft: '5px solid #FF6D00'}}>
                <h3>시험 난이도</h3>
                <p><strong>{analysis.difficulty}</strong></p>
              </InfoBox>
              
              <InfoBox>
                <h3>주요 특징</h3>
                {analysis.keyPoints.map((point, idx) => (
                  <p key={idx}>• {point}</p>
                ))}
              </InfoBox>
              
              <InfoBox style={{borderLeft: '5px solid #66BB6A'}}>
                <h3>대비 전략</h3>
                {analysis.strategies.map((strategy, idx) => (
                  <p key={idx}>✓ {strategy}</p>
                ))}
              </InfoBox>
            </Section>
          ))}
        </>
      )}

      <Section>
        <SectionTitle>수강 신청 및 상담</SectionTitle>
        <InfoBox>
          <h3>레벨미업 학원</h3>
          <p>📍 주소: 경기도 부천시 길주로 275</p>
          <p>📞 전화: 032-322-0592 / 010-2406-0591</p>
          <p>⏰ 운영: 월~토 (학년별 상이)</p>
        </InfoBox>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <Link
            to="/consulting"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #4CAF50 0%, #FF6D00 100%)',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(26, 95, 61, 0.3)',
              transition: 'all 0.3s'
            }}
          >
            무료 상담 신청하기
          </Link>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default SchoolDetail;
