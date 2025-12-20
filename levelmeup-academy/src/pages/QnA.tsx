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

const WriteSection = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: #1a1a1a;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 15px;
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
  padding: 15px;
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
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 18px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuestionCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 6px 25px rgba(0,0,0,0.12);
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
`;

const QuestionTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a1a1a;
  flex: 1;
  min-width: 200px;
`;

const QuestionMeta = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const Tag = styled.span<{ status?: boolean }>`
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  background: ${props => props.status ? 
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' : 
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
`;

const QuestionContent = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
`;

const QuestionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #999;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
  flex-wrap: wrap;
  gap: 10px;
`;

const Answer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #667eea;
`;

const AnswerTitle = styled.div`
  font-weight: bold;
  color: #667eea;
  margin-bottom: 10px;
  font-size: 1.05rem;
`;

const AnswerContent = styled.p`
  color: #444;
  line-height: 1.8;
`;

interface Question {
  id: number;
  category: string;
  title: string;
  content: string;
  author: string;
  date: string;
  answered: boolean;
  answer?: string;
}

const QnA: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      category: '수학',
      title: '수학 기초반과 심화반의 차이가 궁금합니다',
      content: '중3인데 수학 기초가 부족한 것 같아서 걱정입니다. 기초반에서 시작하는 게 나을까요?',
      author: '김**',
      date: '2024-12-15',
      answered: true,
      answer: '안녕하세요. 레벨미업 학원입니다. 기초반은 개념 이해와 기본 문제 풀이에 중점을 두고 있으며, 심화반은 고난도 문제와 심화 개념을 다룹니다. 무료 레벨테스트를 통해 학생의 수준에 맞는 반을 추천해드리고 있으니, 먼저 상담을 받아보시는 것을 권장드립니다.'
    },
    {
      id: 2,
      category: '영어',
      title: '여름방학 특강 수강 가능한가요?',
      content: '고2인데 영어 듣기가 너무 약해서 여름방학 때 집중적으로 공부하고 싶습니다.',
      author: '이**',
      date: '2024-12-14',
      answered: true,
      answer: '네, 여름방학 특강은 7월부터 시작되며, 영어 듣기 집중반이 별도로 운영됩니다. 4주 과정으로 진행되며, 매일 실전 듣기 연습과 피드백이 제공됩니다. 자세한 일정은 상담실로 문의해주세요.'
    },
    {
      id: 3,
      category: '일반',
      title: '자습실 이용 시간이 궁금합니다',
      content: '수업 없는 날에도 자습실을 이용할 수 있나요?',
      author: '박**',
      date: '2024-12-13',
      answered: false
    }
  ]);

  const [formData, setFormData] = useState({
    category: '일반',
    title: '',
    author: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newQuestion: Question = {
      id: questions.length + 1,
      category: formData.category,
      title: formData.title,
      content: formData.content,
      author: formData.author,
      date: new Date().toISOString().split('T')[0],
      answered: false
    };

    setQuestions([newQuestion, ...questions]);
    
    setFormData({
      category: '일반',
      title: '',
      author: '',
      content: ''
    });

    alert('질문이 등록되었습니다! 빠른 시일 내에 답변 드리겠습니다.');
  };

  return (
    <PageWrapper>
      <PageTitle>질문 게시판</PageTitle>
      <PageSubtitle>궁금한 점을 자유롭게 질문해주세요. 빠르게 답변드리겠습니다.</PageSubtitle>

      <WriteSection>
        <SectionTitle>✍️ 질문하기</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>카테고리</Label>
            <Select 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              required
            >
              <option value="일반">일반</option>
              <option value="수학">수학</option>
              <option value="영어">영어</option>
              <option value="국어">국어</option>
              <option value="과학">과학</option>
              <option value="입시">입시</option>
              <option value="커리큘럼">커리큘럼</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>작성자</Label>
            <Input 
              type="text" 
              placeholder="이름을 입력하세요 (예: 김**))"
              value={formData.author}
              onChange={(e) => setFormData({...formData, author: e.target.value})}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>제목</Label>
            <Input 
              type="text" 
              placeholder="질문 제목을 입력하세요"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>내용</Label>
            <TextArea 
              placeholder="질문 내용을 자세히 입력해주세요"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              required
            />
          </InputGroup>

          <SubmitButton type="submit">질문 등록하기</SubmitButton>
        </Form>
      </WriteSection>

      <div>
        <SectionTitle style={{marginBottom: '20px'}}>📋 질문 목록</SectionTitle>
        <QuestionList>
          {questions.map((q) => (
            <QuestionCard key={q.id}>
              <QuestionHeader>
                <QuestionTitle>{q.title}</QuestionTitle>
                <QuestionMeta>
                  <Tag>{q.category}</Tag>
                  <Tag status={q.answered}>
                    {q.answered ? '답변완료' : '답변대기'}
                  </Tag>
                </QuestionMeta>
              </QuestionHeader>
              <QuestionContent>{q.content}</QuestionContent>
              <QuestionInfo>
                <span>작성자: {q.author}</span>
                <span>{q.date}</span>
              </QuestionInfo>
              
              {q.answered && q.answer && (
                <Answer>
                  <AnswerTitle>💬 답변</AnswerTitle>
                  <AnswerContent>{q.answer}</AnswerContent>
                </Answer>
              )}
            </QuestionCard>
          ))}
        </QuestionList>
      </div>
    </PageWrapper>
  );
};

export default QnA;
