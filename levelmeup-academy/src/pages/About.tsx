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

const ContentSection = styled.section`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SectionContent = styled.div`
  color: #444;
  line-height: 1.8;
  font-size: 1.05rem;
  
  p {
    margin-bottom: 15px;
  }
  
  ul {
    margin-left: 20px;
    margin-bottom: 15px;
  }
  
  li {
    margin-bottom: 10px;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  padding: 30px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
  margin: 30px 0;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

const CardContent = styled.p`
  color: #666;
  line-height: 1.6;
`;

const About: React.FC = () => {
  return (
    <PageWrapper>
      <PageTitle>학원 소개</PageTitle>
      <PageSubtitle>레벨미업 학원과 함께 꿈을 이루세요</PageSubtitle>

      <ContentSection>
        <SectionTitle>🏫 레벨미업 학원을 소개합니다</SectionTitle>
        <SectionContent>
          <p>
            레벨미업 학원은 <strong>부천 신중동에 위치한 중고등학생을 위한 국영수 전문 학원</strong>으로, 
            체계적인 커리큘럼과 집중 케어 시스템(I.C.C.)으로 학생들의 성적 향상과 
            목표 달성을 도와왔습니다.
          </p>
          <p>
            우리는 단순히 성적만을 추구하는 것이 아니라, 학생 개개인의 학습 습관을 
            바로잡고 자기주도적 학습 능력을 키우는 것을 목표로 합니다. 
            예습과 복습 과제를 통해 학생들이 '무엇을, 어떻게 공부해야 할지'를 
            자연스럽게 터득할 수 있도록 지도합니다.
          </p>
        </SectionContent>
      </ContentSection>

      <ContentSection>
        <SectionTitle>✨ 우리의 교육 철학</SectionTitle>
        <SectionContent>
          <HighlightBox>
            <h3 style={{marginBottom: '15px', fontSize: '1.3rem'}}>
              "모든 학생은 무한한 가능성을 가지고 있습니다"
            </h3>
            <p>
              레벨미업 학원은 학생 한 명 한 명의 개성과 재능을 존중하며, 
              그들의 잠재력을 최대한 끌어올리는 교육을 실천합니다. 
              우리는 학생들이 자신감을 가지고 도전할 수 있는 환경을 조성하고, 
              성취감을 통해 자기주도적 학습 습관을 형성할 수 있도록 돕습니다.
            </p>
          </HighlightBox>
        </SectionContent>
      </ContentSection>

      <SectionTitle style={{marginBottom: '30px'}}>🎯 레벨미업의 강점</SectionTitle>
      <GridSection>
        <Card>
          <CardIcon>👨‍🏫</CardIcon>
          <CardTitle>검증된 강사진</CardTitle>
          <CardContent>
            10년 이상의 교육 경력을 보유한 전문 강사진이 학생들의 학습을 책임집니다. 
            각 과목별 전문가가 최신 교육 트렌드와 입시 정보를 바탕으로 효과적인 
            수업을 진행합니다.
          </CardContent>
        </Card>

        <Card>
          <CardIcon>📚</CardIcon>
          <CardTitle>체계적인 커리큘럼</CardTitle>
          <CardContent>
            기초부터 심화까지 단계별로 구성된 커리큘럼으로 탄탄한 실력을 쌓아갑니다. 
            정기적인 평가를 통해 학습 진도를 점검하고, 필요한 부분을 집중 보완합니다.
          </CardContent>
        </Card>

        <Card>
          <CardIcon>📊</CardIcon>
          <CardTitle>I.C.C. 집중 케어 시스템</CardTitle>
          <CardContent>
            Intensive Care Class를 통해 과제 미수행 학생이나 보충이 필요한 학생을 
            개별 관리합니다. 부족한 부분을 즉시 파악하고 집중 보완하여 학습 공백을 
            최소화합니다.
          </CardContent>
        </Card>

        <Card>
          <CardIcon>🤝</CardIcon>
          <CardTitle>소규모 맞춤 수업</CardTitle>
          <CardContent>
            한 반당 10명 이하의 소규모 수업으로 학생 개개인에게 충분한 관심과 
            지도를 제공합니다. 질문이 많은 학생도 자유롭게 소통할 수 있는 환경을 
            만듭니다.
          </CardContent>
        </Card>

        <Card>
          <CardIcon>💬</CardIcon>
          <CardTitle>학부모 소통 시스템</CardTitle>
          <CardContent>
            학원 어플 '메이크에듀'를 통해 실시간으로 학생의 과제 수행 및 테스트 결과를 
            확인할 수 있습니다. 학습일지와 성적 확인 기능으로 투명한 학습 관리가 
            가능합니다.
          </CardContent>
        </Card>

        <Card>
          <CardIcon>🏆</CardIcon>
          <CardTitle>입증된 실적</CardTitle>
          <CardContent>
            매년 평균 2등급 이상의 성적 향상과 주요 대학 합격생 배출로 교육 품질을 
            입증하고 있습니다. 학생들의 성공 스토리가 우리의 자부심입니다.
          </CardContent>
        </Card>
      </GridSection>

      <ContentSection style={{marginTop: '60px'}}>
        <SectionTitle>📍 찾아오시는 길</SectionTitle>
        <SectionContent>
          <p><strong>주소:</strong> 경기도 부천시 길주로 275 중동프라자 6층</p>
          <p><strong>전화:</strong> 032-322-0592</p>
          <p><strong>휴대폰:</strong> 010-2406-0591</p>
          <p><strong>운영시간:</strong></p>
          <ul>
            <li>평일: 15:00 - 22:00</li>
            <li>주말: 12:00 - 19:00</li>
            <li>※ 전화문의 상시 응대 가능</li>
          </ul>
          <p style={{marginTop: '15px'}}><strong>오시는 길:</strong></p>
          <ul>
            <li>신중동역 4번 출구 방향</li>
            <li>중동프라자 건물 6층</li>
          </ul>
        </SectionContent>
      </ContentSection>
    </PageWrapper>
  );
};

export default About;
