import React from 'react';
import styled from '@emotion/styled';
import { colors, gradients } from '../theme';

const PageWrapper = styled.div`
  max-width: 1000px;
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
    border-radius: 2px;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 60px;
  line-height: 1.6;
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const ContactCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, rgba(23, 183, 166, 0.20) 100%);
  border: 2px solid #17B7A6;
  padding: 30px 25px;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(23, 183, 166, 0.2);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 420px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(23, 183, 166, 0.35);
    background: linear-gradient(135deg, #ffffff 0%, rgba(23, 183, 166, 0.30) 100%);
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    min-height: auto;
  }
`;

const PhoneSection = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, rgba(23, 183, 166, 0.20) 100%);
  border: 2px solid #17B7A6;
  padding: 30px 40px;
  border-radius: 30px;
  text-align: center;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(23, 183, 166, 0.2);
  
  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

const ContactIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  margin-top: 5px;
`;

const PhoneTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #1a1a1a;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const PhoneNumberContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 12px 0;
`;

const PhoneNumber = styled.a`
  color: #17B7A6;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
  padding: 2px 4px;
  
  &:hover {
    color: #0E8F86;
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const PhoneIcon = styled.span`
  font-size: 0.9rem;
`;

const OperatingHours = styled.div`
  margin-top: 12px;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
`;

const KakaoButton = styled.a`
  display: inline-block;
  background: #FEE500;
  color: #3c1e1e;
  padding: 12px 30px;
  border-radius: 8px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background: #fdd835;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(254, 229, 0, 0.4);
  }
`;

const KakaoQRCode = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px auto;
  display: block;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
`;

const KakaoID = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #3c1e1e;
  margin: 10px 0;
  padding: 8px 16px;
  background: rgba(254, 229, 0, 0.15);
  border-radius: 6px;
  display: inline-block;
`;

const ConsultingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ConsultingCard = styled.div`
  background: #fafafa;
  padding: 25px 30px;
  border-radius: 8px;
  border-left: 3px solid ${colors.green.primary};
  
  @media (max-width: 768px) {
    padding: 20px 25px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  margin-bottom: 8px;
  color: #1a1a1a;
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const InfoSection = styled.div`
  background: linear-gradient(135deg, rgba(23, 183, 166, 0.05) 0%, rgba(23, 183, 166, 0.03) 100%);
  padding: 40px;
  border-radius: 15px;
  border-left: 5px solid #17B7A6;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #1a1a1a;
  font-weight: 700;
`;

const InfoText = styled.p`
  color: #555;
  line-height: 1.9;
  font-size: 1.05rem;
  margin-bottom: 15px;
`;

const StepContainer = styled.div`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StepTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 10px;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled.li`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.7;
  padding-left: 18px;
  position: relative;
  margin-bottom: 6px;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${colors.green.primary};
    font-weight: 700;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;



const AddressSection = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const AddressTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #1a1a1a;
  font-weight: 700;
`;

const AddressText = styled.p`
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 10px;
  
  strong {
    color: ${colors.green.primary};
    font-weight: 700;
  }
`;

const Consulting: React.FC = () => {
  return (
    <PageWrapper>
      <PageTitle>상담 안내</PageTitle>
      <PageSubtitle>
        문의 주시면 학생에게 맞는 학습 방향을 자세히 안내드립니다
      </PageSubtitle>

      <ContactSection>
        <ContactCard>
          <ContactIcon>☎</ContactIcon>
          <PhoneTitle>전화 상담</PhoneTitle>
          <PhoneNumberContainer>
            <PhoneNumber href="tel:032-322-0592">
              <PhoneIcon>☎</PhoneIcon>
              032-322-0592
            </PhoneNumber>
            <PhoneNumber href="tel:010-2406-0591">
              <PhoneIcon>📱</PhoneIcon>
              010-2406-0591
            </PhoneNumber>
          </PhoneNumberContainer>
          <OperatingHours>
            평일 15:00 - 22:00 | 주말 12:00 - 22:00<br />
            전화문의 상시 응대 가능
          </OperatingHours>
        </ContactCard>

        <ContactCard>
          <ContactIcon>💬</ContactIcon>
          <PhoneTitle>카카오톡 상담</PhoneTitle>
          <KakaoID>카카오톡 ID: Levelmeup</KakaoID>
          <KakaoQRCode src="/images/kakao-qr.png" alt="카카오톡 친구추가 QR코드" />
          <OperatingHours>
            빠른 시간 내에 답변드립니다
          </OperatingHours>
        </ContactCard>
      </ContactSection>

      <ConsultingGrid>
        <ConsultingCard>
          <CardTitle>학생별 맞춤 계획 상담</CardTitle>
          <CardDescription>
            현재 성적과 목표를 듣고, 학생에게 맞는 수업 과목과 학습 방향을 함께 정합니다.
          </CardDescription>
        </ConsultingCard>

        <ConsultingCard>
          <CardTitle>무료 레벨테스트</CardTitle>
          <CardDescription>
            정확한 실력 진단을 위한 레벨테스트를 무료로 진행할 수 있습니다.
          </CardDescription>
        </ConsultingCard>

        <ConsultingCard>
          <CardTitle>학원 시설 견학</CardTitle>
          <CardDescription>
            학원 시설과 자습실, 강의실 등을 직접 둘러보실 수 있습니다.
          </CardDescription>
        </ConsultingCard>

        <ConsultingCard>
          <CardTitle>수업 참관</CardTitle>
          <CardDescription>
            실제 수업 분위기와 강의 방식을 참관하실 수 있습니다.
          </CardDescription>
        </ConsultingCard>
      </ConsultingGrid>

      <InfoSection>
        <InfoTitle>문의 주시면 이렇게 도와드립니다</InfoTitle>
        
        <StepContainer>
          <StepTitle>[1단계] 현재 상황 간단 확인</StepTitle>
          <BulletList>
            <BulletItem>학생의 학년과 현재 성적, 고민 중인 과목을 함께 확인합니다.</BulletItem>
          </BulletList>
        </StepContainer>
        
        <StepContainer>
          <StepTitle>[2단계] 학습 방향 및 계획 안내</StepTitle>
          <BulletList>
            <BulletItem>학생 수준에 맞는 수업 과목과 학습 방향을 안내해드립니다.</BulletItem>
            <BulletItem>필요 시 맞춤 학습 계획을 함께 설명드립니다.</BulletItem>
          </BulletList>
        </StepContainer>
        
        <StepContainer>
          <StepTitle>[3단계] 추가 안내</StepTitle>
          <BulletList>
            <BulletItem>무료 레벨테스트 안내</BulletItem>
            <BulletItem>학원 시설 견학 및 실제 수업 청강 가능</BulletItem>
          </BulletList>
        </StepContainer>
      </InfoSection>

      <AddressSection>
        <AddressTitle>오시는 길</AddressTitle>
        <AddressText>
          <strong>경기도 부천시 길주로 275</strong><br />
          중동프라자 6층
        </AddressText>
        <AddressText style={{ fontSize: '1rem', color: '#888', marginTop: '15px' }}>
          부천 중동 위치 | 중고등 국영수과 전문 학원
        </AddressText>
      </AddressSection>
    </PageWrapper>
  );
};

export default Consulting;
