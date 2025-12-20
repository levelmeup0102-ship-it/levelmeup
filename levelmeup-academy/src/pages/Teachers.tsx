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

const TeacherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const TeacherCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

const TeacherImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
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

const TeacherInfo = styled.div`
  padding: 30px;
`;

const TeacherName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #1a1a1a;
`;

const TeacherSubject = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TeacherDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const TeacherHighlights = styled.ul`
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
      font-size: 1.2rem;
    }
  }
`;

const SubjectSection = styled.section`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
`;

const SubjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SubjectContent = styled.div`
  color: #444;
  line-height: 1.8;
  
  p {
    margin-bottom: 15px;
  }
  
  ul {
    margin-left: 20px;
    margin-top: 15px;
  }
  
  li {
    margin-bottom: 10px;
  }
`;

const Teachers: React.FC = () => {
  const teachers = [
    {
      name: '김영수 원장',
      subject: '수학',
      emoji: '👨‍🏫',
      description: '서울대학교 수학교육과 출신으로 15년간 수학 교육에 전념해온 수학 전문가입니다. 복잡한 개념을 쉽게 풀어내는 강의로 학생들의 수학에 대한 흥미를 이끌어냅니다.',
      highlights: [
        '서울대 수학교육과 졸업',
        '15년 교육 경력',
        '수능 수학 만점자 50명 이상 배출',
        '자체 개발 학습 교재 5권 저자'
      ]
    },
    {
      name: '이지은 선생님',
      subject: '영어',
      emoji: '👩‍🏫',
      description: '연세대학교 영문과 출신으로 미국 유학 경험을 바탕으로 한 실용적인 영어 교육을 실천합니다. 듣기, 말하기, 읽기, 쓰기를 통합한 종합적인 영어 실력 향상을 이끕니다.',
      highlights: [
        '연세대 영문과 졸업',
        '미국 UCLA 교환학생',
        '토익 990점, 토플 120점',
        '10년 이상 수능 영어 전문 강의'
      ]
    },
    {
      name: '박준호 선생님',
      subject: '국어',
      emoji: '👨‍💼',
      description: '고려대학교 국어국문학과 출신으로 비문학, 문학, 문법 영역을 아우르는 체계적인 국어 교육을 제공합니다. 논리적 사고력과 독해력 향상에 중점을 둡니다.',
      highlights: [
        '고려대 국어국문학과 졸업',
        '12년 국어 교육 경력',
        '수능 국어 1등급 배출률 85%',
        '논술 지도 전문가'
      ]
    },
    {
      name: '최서연 선생님',
      subject: '과학 (물리/화학)',
      emoji: '👩‍🔬',
      description: '카이스트 화학과 출신으로 과학의 원리를 깊이 있게 이해시키는 교육을 추구합니다. 실험과 이론을 접목한 생동감 있는 수업으로 과학에 대한 흥미를 높입니다.',
      highlights: [
        'KAIST 화학과 졸업',
        '물리/화학 모두 지도 가능',
        '과학 경시대회 입상자 다수 배출',
        '8년 과학 교육 경력'
      ]
    }
  ];

  return (
    <PageWrapper>
      <PageTitle>강사 소개</PageTitle>
      <PageSubtitle>최고의 실력과 열정을 갖춘 레벨미업의 강사진을 소개합니다</PageSubtitle>

      <TeacherGrid>
        {teachers.map((teacher, index) => (
          <TeacherCard key={index}>
            <TeacherImage>
              {teacher.emoji}
            </TeacherImage>
            <TeacherInfo>
              <TeacherName>{teacher.name}</TeacherName>
              <TeacherSubject>{teacher.subject}</TeacherSubject>
              <TeacherDescription>{teacher.description}</TeacherDescription>
              <TeacherHighlights>
                {teacher.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </TeacherHighlights>
            </TeacherInfo>
          </TeacherCard>
        ))}
      </TeacherGrid>

      <SubjectSection>
        <SubjectTitle>📚 과목별 수업 안내</SubjectTitle>
        <SubjectContent>
          <h3 style={{fontSize: '1.4rem', marginTop: '20px', marginBottom: '15px', color: '#667eea'}}>
            🔢 수학
          </h3>
          <p>
            개념 이해부터 문제 풀이까지 단계별 학습으로 수학 실력을 완성합니다.
          </p>
          <ul>
            <li>기초부터 심화까지 체계적인 단계별 커리큘럼</li>
            <li>유형별 문제 풀이 전략 집중 훈련</li>
            <li>오답 노트 작성 및 복습 시스템</li>
            <li>정기 모의고사 및 약점 보완 특강</li>
          </ul>

          <h3 style={{fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px', color: '#667eea'}}>
            🗣️ 영어
          </h3>
          <p>
            듣기, 독해, 문법, 어휘를 통합한 종합 영어 실력 향상 프로그램
          </p>
          <ul>
            <li>영역별 맞춤 학습 (듣기, 독해, 문법, 어휘)</li>
            <li>실전 모의고사 및 분석 수업</li>
            <li>매일 단어 테스트 및 관리</li>
            <li>수능 유형 집중 공략</li>
          </ul>

          <h3 style={{fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px', color: '#667eea'}}>
            📖 국어
          </h3>
          <p>
            비문학, 문학, 문법 영역별 전문 강의로 국어 실력 극대화
          </p>
          <ul>
            <li>비문학 독해 전략 및 논리적 사고력 훈련</li>
            <li>문학 작품 분석 및 감상 능력 향상</li>
            <li>문법 개념 정리 및 적용 연습</li>
            <li>고난도 문제 풀이 테크닉</li>
          </ul>

          <h3 style={{fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px', color: '#667eea'}}>
            🔬 과학 (물리/화학/생명과학/지구과학)
          </h3>
          <p>
            과목별 전문 강사의 깊이 있는 개념 설명과 문제 풀이
          </p>
          <ul>
            <li>과목별 선택 수강 가능</li>
            <li>개념 이해 중심의 원리 학습</li>
            <li>실험 영상 및 시뮬레이션 활용</li>
            <li>수능 및 내신 대비 통합 관리</li>
          </ul>
        </SubjectContent>
      </SubjectSection>
    </PageWrapper>
  );
};

export default Teachers;
