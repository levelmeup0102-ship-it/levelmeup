import React from 'react';
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
    background: linear-gradient(135deg, #1a5f3d 0%, #2d8659 100%);
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
    color: #1a5f3d;
  }
  
  .score {
    color: #ff8c42;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 30px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #1a5f3d 0%, #ff8c42 100%);
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
  border-left: 5px solid #1a5f3d;
  margin-bottom: 30px;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #1a5f3d;
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
    features: [
      '학교별 맞춤 교재 제작',
      '기출 문제 철저 분석',
      '서술형 문항 집중 대비',
      '시험 범위 완벽 정리',
      '소규모 그룹 수업'
    ]
  },
  '정명고': {
    name: '정명고',
    fullName: '정명고등학교',
    description: '부천 지역 최상위권 학교로, 레벨미업 학원에서 가장 많은 재원생이 다니는 학교입니다.',
    achievements: [
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
    features: [
      '정명고 전용 내신 대비반 운영',
      '역대 기출 문제 DB 구축',
      '고난이도 어휘 집중 학습',
      '외부지문 대비 실력 향상',
      '내신 1등급 다수 배출'
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
            무료 상담 신청하기
          </Link>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default SchoolDetail;
