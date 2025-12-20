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

const TimeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 40px;
  
  thead {
    background: linear-gradient(135deg, #1a5f3d 0%, #2d8659 100%);
    color: white;
  }
  
  th, td {
    padding: 20px 15px;
    text-align: center;
    border-bottom: 1px solid #e9ecef;
    border-right: 1px solid #e9ecef;
  }
  
  th {
    font-weight: bold;
    font-size: 1.1rem;
  }
  
  tbody tr {
    &:hover {
      background: #f8f9fa;
    }
    
    &:last-child td {
      border-bottom: none;
    }
  }
  
  td {
    font-size: 0.95rem;
    color: #333;
    
    &:first-of-type {
      font-weight: bold;
      background: #f8f9fa;
      color: #1a5f3d;
    }
    
    &:last-child {
      border-right: none;
    }
  }
  
  .class-cell {
    background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
    font-weight: 500;
    color: #1a5f3d;
    line-height: 1.6;
    
    .subject {
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .teacher {
      font-size: 0.85rem;
      color: #666;
    }
  }
  
  .empty-cell {
    background: #fafafa;
    color: #999;
  }
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  border-left: 5px solid #1a5f3d;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #1a5f3d;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:last-child {
      border-bottom: none;
    }
    
    .label {
      font-weight: bold;
      color: #333;
    }
    
    .value {
      color: #666;
    }
  }
`;

interface ClassInfo {
  subject: string;
  teacher: string;
}

type Schedule = Record<string, ClassInfo | null>;

const schedules: Record<string, { monday: Schedule; tuesday: Schedule; wednesday: Schedule; thursday: Schedule; friday: Schedule }> = {
  '중학생': {
    monday: {
      '16:00-17:20': { subject: '중등 국어', teacher: '국어 전문 강사' },
      '17:30-18:50': { subject: '중등 영어', teacher: '영어 전문 강사' },
      '19:00-20:20': { subject: '중등 수학', teacher: '수학 전문 강사' },
      '20:30-21:50': null
    },
    tuesday: {
      '16:00-17:20': { subject: '중등 수학', teacher: '수학 전문 강사' },
      '17:30-18:50': { subject: '중등 국어', teacher: '국어 전문 강사' },
      '19:00-20:20': { subject: '중등 영어', teacher: '영어 전문 강사' },
      '20:30-21:50': null
    },
    wednesday: {
      '16:00-17:20': { subject: '중등 영어', teacher: '영어 전문 강사' },
      '17:30-18:50': { subject: '중등 수학', teacher: '수학 전문 강사' },
      '19:00-20:20': { subject: '중등 국어', teacher: '국어 전문 강사' },
      '20:30-21:50': null
    },
    thursday: {
      '16:00-17:20': { subject: '중등 국어', teacher: '국어 전문 강사' },
      '17:30-18:50': { subject: '중등 영어', teacher: '영어 전문 강사' },
      '19:00-20:20': { subject: '중등 수학', teacher: '수학 전문 강사' },
      '20:30-21:50': null
    },
    friday: {
      '16:00-17:20': { subject: '중등 수학', teacher: '수학 전문 강사' },
      '17:30-18:50': { subject: '중등 국어', teacher: '국어 전문 강사' },
      '19:00-20:20': { subject: '중등 영어', teacher: '영어 전문 강사' },
      '20:30-21:50': null
    }
  },
  '고1': {
    monday: {
      '16:00-17:20': { subject: '고1 국어', teacher: '국어 전문 강사' },
      '17:30-18:50': { subject: '고1 영어', teacher: '영어 전문 강사' },
      '19:00-20:20': { subject: '고1 수학', teacher: '수학 전문 강사' },
      '20:30-21:50': { subject: '자율학습', teacher: '관리 교사' }
    },
    tuesday: {
      '16:00-17:20': { subject: '고1 수학', teacher: '수학 전문 강사' },
      '17:30-18:50': { subject: '고1 국어', teacher: '국어 전문 강사' },
      '19:00-20:20': { subject: '고1 영어', teacher: '영어 전문 강사' },
      '20:30-21:50': { subject: '자율학습', teacher: '관리 교사' }
    },
    wednesday: {
      '16:00-17:20': { subject: '고1 영어', teacher: '영어 전문 강사' },
      '17:30-18:50': { subject: '고1 수학', teacher: '수학 전문 강사' },
      '19:00-20:20': { subject: '고1 국어', teacher: '국어 전문 강사' },
      '20:30-21:50': { subject: '자율학습', teacher: '관리 교사' }
    },
    thursday: {
      '16:00-17:20': { subject: '고1 국어', teacher: '국어 전문 강사' },
      '17:30-18:50': { subject: '고1 영어', teacher: '영어 전문 강사' },
      '19:00-20:20': { subject: '고1 수학', teacher: '수학 전문 강사' },
      '20:30-21:50': { subject: '자율학습', teacher: '관리 교사' }
    },
    friday: {
      '16:00-17:20': { subject: '고1 수학', teacher: '수학 전문 강사' },
      '17:30-18:50': { subject: '고1 국어', teacher: '국어 전문 강사' },
      '19:00-20:20': { subject: '고1 영어', teacher: '영어 전문 강사' },
      '20:30-21:50': { subject: '주말 특강', teacher: '전담 강사' }
    }
  },
  '고2': {
    monday: {
      '16:00-17:20': { subject: '고2 국어', teacher: '국어 전문 강사' },
      '17:30-18:50': { subject: '고2 영어', teacher: '영어 전문 강사' },
      '19:00-20:20': { subject: '고2 수학', teacher: '수학 전문 강사' },
      '20:30-21:50': { subject: '자율학습', teacher: '관리 교사' }
    },
    tuesday: {
      '16:00-17:20': { subject: '고2 수학', teacher: '수학 전문 강사' },
      '17:30-18:50': { subject: '고2 국어', teacher: '국어 전문 강사' },
      '19:00-20:20': { subject: '고2 영어', teacher: '영어 전문 강사' },
      '20:30-21:50': { subject: '내신 특강', teacher: '담당 강사' }
    },
    wednesday: {
      '16:00-17:20': { subject: '고2 영어', teacher: '영어 전문 강사' },
      '17:30-18:50': { subject: '고2 수학', teacher: '수학 전문 강사' },
      '19:00-20:20': { subject: '고2 국어', teacher: '국어 전문 강사' },
      '20:30-21:50': { subject: '자율학습', teacher: '관리 교사' }
    },
    thursday: {
      '16:00-17:20': { subject: '고2 국어', teacher: '국어 전문 강사' },
      '17:30-18:50': { subject: '고2 영어', teacher: '영어 전문 강사' },
      '19:00-20:20': { subject: '고2 수학', teacher: '수학 전문 강사' },
      '20:30-21:50': { subject: '내신 특강', teacher: '담당 강사' }
    },
    friday: {
      '16:00-17:20': { subject: '고2 수학', teacher: '수학 전문 강사' },
      '17:30-18:50': { subject: '고2 국어', teacher: '국어 전문 강사' },
      '19:00-20:20': { subject: '고2 영어', teacher: '영어 전문 강사' },
      '20:30-21:50': { subject: '주말 특강', teacher: '전담 강사' }
    }
  },
  '고3': {
    monday: {
      '16:00-17:20': { subject: '고3 국어', teacher: '국어 전문 강사' },
      '17:30-18:50': { subject: '고3 영어', teacher: '영어 전문 강사' },
      '19:00-20:20': { subject: '고3 수학', teacher: '수학 전문 강사' },
      '20:30-21:50': { subject: '수능 대비', teacher: '수능 전담' }
    },
    tuesday: {
      '16:00-17:20': { subject: '고3 수학', teacher: '수학 전문 강사' },
      '17:30-18:50': { subject: '고3 국어', teacher: '국어 전문 강사' },
      '19:00-20:20': { subject: '고3 영어', teacher: '영어 전문 강사' },
      '20:30-21:50': { subject: '수능 대비', teacher: '수능 전담' }
    },
    wednesday: {
      '16:00-17:20': { subject: '고3 영어', teacher: '영어 전문 강사' },
      '17:30-18:50': { subject: '고3 수학', teacher: '수학 전문 강사' },
      '19:00-20:20': { subject: '고3 국어', teacher: '국어 전문 강사' },
      '20:30-21:50': { subject: '수능 대비', teacher: '수능 전담' }
    },
    thursday: {
      '16:00-17:20': { subject: '고3 국어', teacher: '국어 전문 강사' },
      '17:30-18:50': { subject: '고3 영어', teacher: '영어 전문 강사' },
      '19:00-20:20': { subject: '고3 수학', teacher: '수학 전문 강사' },
      '20:30-21:50': { subject: '수능 대비', teacher: '수능 전담' }
    },
    friday: {
      '16:00-17:20': { subject: '고3 수학', teacher: '수학 전문 강사' },
      '17:30-18:50': { subject: '고3 국어', teacher: '국어 전문 강사' },
      '19:00-20:20': { subject: '고3 영어', teacher: '영어 전문 강사' },
      '20:30-21:50': { subject: '주말 특강', teacher: '전담 강사' }
    }
  }
};

const TimeTablePage: React.FC = () => {
  const [activeGrade, setActiveGrade] = useState<'중학생' | '고1' | '고2' | '고3'>('고1');
  
  const schedule = schedules[activeGrade];
  const days = ['월요일', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const dayLabels = ['월요일', '화요일', '수요일', '목요일', '금요일'];
  const timeSlots = ['16:00-17:20', '17:30-18:50', '19:00-20:20', '20:30-21:50'];

  return (
    <PageWrapper>
      <PageTitle>수업 시간표</PageTitle>
      <PageSubtitle>레벨미업 학원의 학년별 수업 시간표를 확인하세요</PageSubtitle>

      <TabContainer>
        <Tab active={activeGrade === '중학생'} onClick={() => setActiveGrade('중학생')}>
          중학생
        </Tab>
        <Tab active={activeGrade === '고1'} onClick={() => setActiveGrade('고1')}>
          고등학교 1학년
        </Tab>
        <Tab active={activeGrade === '고2'} onClick={() => setActiveGrade('고2')}>
          고등학교 2학년
        </Tab>
        <Tab active={activeGrade === '고3'} onClick={() => setActiveGrade('고3')}>
          고등학교 3학년
        </Tab>
      </TabContainer>

      <TimeTable>
        <thead>
          <tr>
            <th>시간</th>
            {dayLabels.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, timeIndex) => (
            <tr key={timeIndex}>
              <td>{time}</td>
              {days.map((day, dayIndex) => {
                const dayKey = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'][dayIndex];
                const classInfo = schedule[dayKey as keyof typeof schedule][time];
                
                return (
                  <td key={dayIndex}>
                    {classInfo ? (
                      <div className="class-cell">
                        <div className="subject">{classInfo.subject}</div>
                        <div className="teacher">{classInfo.teacher}</div>
                      </div>
                    ) : (
                      <div className="empty-cell">-</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </TimeTable>

      <InfoBox>
        <h3>수업 안내</h3>
        <ul>
          <li>
            <span className="label">수업 시간</span>
            <span className="value">80분 수업 (10분 휴식)</span>
          </li>
          <li>
            <span className="label">운영 요일</span>
            <span className="value">월요일 ~ 금요일 (주 5일)</span>
          </li>
          <li>
            <span className="label">반 편성</span>
            <span className="value">소규모 반 (최대 12명)</span>
          </li>
          <li>
            <span className="label">자습관 이용</span>
            <span className="value">수업 전후 자유 이용 가능 (Pre ME Up)</span>
          </li>
          <li>
            <span className="label">시험 기간</span>
            <span className="value">학교별 맞춤 내신 대비 특강 운영</span>
          </li>
        </ul>
      </InfoBox>

      <div style={{textAlign: 'center', marginTop: '40px'}}>
        <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '20px'}}>
          시간표는 학원 사정에 따라 변경될 수 있습니다. 자세한 상담은 전화 문의 바랍니다.
        </p>
        <a
          href="tel:032-322-0592"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #1a5f3d 0%, #ff8c42 100%)',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(26, 95, 61, 0.3)',
            transition: 'all 0.3s',
            marginRight: '15px'
          }}
        >
          전화 상담 (032-322-0592)
        </a>
        <a
          href="/consulting"
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#1a5f3d',
            padding: '15px 40px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            border: '3px solid #1a5f3d',
            transition: 'all 0.3s'
          }}
        >
          온라인 상담 신청
        </a>
      </div>
    </PageWrapper>
  );
};

export default TimeTablePage;
