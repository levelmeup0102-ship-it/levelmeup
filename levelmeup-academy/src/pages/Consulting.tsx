import React, { useState } from 'react';
import styled from '@emotion/styled';

const PageWrapper = styled.div`
  max-width: 900px;
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

const ConsultingCard = styled.div`
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Required = styled.span`
  color: #ff6b6b;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Select = styled.select`
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px 0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const InfoSection = styled.div`
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  border-left: 4px solid #667eea;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

const InfoList = styled.ul`
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

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  
  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  p {
    color: white;
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const Consulting: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    subjects: [] as string[],
    preferredTime: '',
    message: ''
  });

  const handleCheckbox = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 여기서 실제로는 서버로 데이터를 전송
    console.log('상담 신청 데이터:', formData);
    
    setSubmitted(true);
    
    // 3초 후 폼 초기화
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        grade: '',
        subjects: [],
        preferredTime: '',
        message: ''
      });
    }, 5000);
  };

  if (submitted) {
    return (
      <PageWrapper>
        <PageTitle>상담 신청</PageTitle>
        <SuccessMessage>
          <h3>🎉 상담 신청이 완료되었습니다!</h3>
          <p>
            빠른 시일 내에 담당자가 연락드리겠습니다.<br />
            감사합니다.
          </p>
        </SuccessMessage>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageTitle>상담 신청</PageTitle>
      <PageSubtitle>무료 상담을 신청하시면 맞춤형 학습 계획을 제안해드립니다</PageSubtitle>

      <InfoSection>
        <InfoTitle>💡 상담 신청 안내</InfoTitle>
        <InfoList>
          <li>상담 신청 후 1~2일 이내에 연락드립니다</li>
          <li>학생의 현재 수준과 목표에 맞는 학습 계획을 제안합니다</li>
          <li>무료 레벨테스트를 통해 정확한 실력 진단이 가능합니다</li>
          <li>학원 시설 견학 및 수업 참관도 가능합니다</li>
        </InfoList>
      </InfoSection>

      <ConsultingCard>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>
              이름 <Required>*</Required>
            </Label>
            <Input
              type="text"
              placeholder="학생 이름을 입력하세요"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>
              연락처 <Required>*</Required>
            </Label>
            <Input
              type="tel"
              placeholder="010-1234-5678"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>
              이메일
            </Label>
            <Input
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </InputGroup>

          <InputGroup>
            <Label>
              학년 <Required>*</Required>
            </Label>
            <Select
              value={formData.grade}
              onChange={(e) => setFormData({...formData, grade: e.target.value})}
              required
            >
              <option value="">학년을 선택하세요</option>
              <option value="중1">중학교 1학년</option>
              <option value="중2">중학교 2학년</option>
              <option value="중3">중학교 3학년</option>
              <option value="고1">고등학교 1학년</option>
              <option value="고2">고등학교 2학년</option>
              <option value="고3">고등학교 3학년</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>
              수강 희망 과목 <Required>*</Required>
            </Label>
            <CheckboxGroup>
              {['국어', '영어', '수학', '물리', '화학', '생명과학', '지구과학'].map(subject => (
                <CheckboxLabel key={subject}>
                  <input
                    type="checkbox"
                    checked={formData.subjects.includes(subject)}
                    onChange={() => handleCheckbox(subject)}
                  />
                  {subject}
                </CheckboxLabel>
              ))}
            </CheckboxGroup>
          </InputGroup>

          <InputGroup>
            <Label>
              선호 상담 시간
            </Label>
            <Select
              value={formData.preferredTime}
              onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
            >
              <option value="">시간대를 선택하세요</option>
              <option value="오전">오전 (10:00-12:00)</option>
              <option value="점심">점심 (12:00-14:00)</option>
              <option value="오후">오후 (14:00-18:00)</option>
              <option value="저녁">저녁 (18:00-20:00)</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>
              문의사항
            </Label>
            <TextArea
              placeholder="궁금하신 점이나 특별히 원하시는 사항을 자유롭게 작성해주세요"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </InputGroup>

          <SubmitButton type="submit">
            무료 상담 신청하기
          </SubmitButton>
        </Form>
      </ConsultingCard>

      <div style={{
        marginTop: '40px',
        padding: '30px',
        background: '#f8f9fa',
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h3 style={{marginBottom: '15px', fontSize: '1.3rem'}}>
          📞 전화 상담도 가능합니다
        </h3>
        <p style={{color: '#666', fontSize: '1.1rem', marginBottom: '10px'}}>
          <strong style={{color: '#667eea'}}>032-322-0592</strong> / <strong style={{color: '#667eea'}}>010-2406-0591</strong>
        </p>
        <p style={{color: '#999', fontSize: '0.95rem'}}>
          평일 15:00-22:00 | 주말 12:00-19:00 | 전화문의 상시 응대 가능
        </p>
      </div>
    </PageWrapper>
  );
};

export default Consulting;
