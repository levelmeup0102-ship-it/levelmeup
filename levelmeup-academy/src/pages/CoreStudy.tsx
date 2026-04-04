import React from 'react';
import styled from '@emotion/styled';

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px 80px;
`;

const PageTitle = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 8px;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #2E4A6F;
    margin: 16px auto 0;
    border-radius: 2px;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #888;
  margin-bottom: 48px;
`;

const PosterImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 48px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
`;

const Section = styled.div`
  margin-bottom: 36px;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2E4A6F;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 14px 16px;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  th {
    width: 120px;
    font-weight: 600;
    color: #2E4A6F;
    background: #f8f9fb;
    border-right: 2px solid #e8e8e8;
    vertical-align: top;
  }
  
  td {
    color: #333;
  }
  
  @media (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
      padding: 10px 12px;
    }
    th {
      border-right: none;
      border-bottom: none;
      padding-bottom: 4px;
    }
    td {
      padding-top: 0;
    }
  }
`;

const Highlight = styled.span`
  background: #fff3cd;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
`;

const ContactBox = styled.div`
  background: #2E4A6F;
  text-align: center;
  padding: 32px 24px;
  border-radius: 12px;
  margin-top: 48px;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
    font-weight: 700;
    color: white;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 4px;
    color: rgba(255,255,255,0.8);
  }
  
  a {
    color: white;
    font-size: 1.4rem;
    font-weight: 800;
    text-decoration: none;
    display: inline-block;
    margin-top: 8px;
  }
`;

const CoreStudy: React.FC = () => {
  return (
    <PageWrapper>
      <PageTitle>2026-1학기 중간대비 코어자습</PageTitle>
      <PageSubtitle>학기 중에도, 성적이 오르는 자기주도 학습 루틴 유지하기</PageSubtitle>

      <PosterImage src="/images/banner-core-study.png" alt="코어자습 안내 포스터" />

      <Section>
        <SectionTitle>프로그램 안내</SectionTitle>
        <InfoTable>
          <tbody>
            <tr>
              <th>기간</th>
              <td>3/23(월) ~ 5/3(일) <strong>(6주)</strong></td>
            </tr>
            <tr>
              <th>의무자습</th>
              <td>
                평일 오후 5시 ~ 10시<br />
                주말 오전 10시 ~ 오후 10시<br />
                <span style={{ color: '#999', fontSize: '0.85rem' }}>※ 식사 제공 없음</span>
              </td>
            </tr>
            <tr>
              <th>학습 OT</th>
              <td>
                중간대비 학습계획 작성 지도 (신청학생 필수등원)<br />
                3/22(일) 1차 오전 10시~12시 / 2차 오후 12시~2시
              </td>
            </tr>
            <tr>
              <th>수강료</th>
              <td>
                30만원 (6주)<br />
                <Highlight>재원생 시범운영 — 수강료 청구 없음</Highlight>
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </Section>

      <Section>
        <SectionTitle>수강 신청</SectionTitle>
        <InfoTable>
          <tbody>
            <tr>
              <th>우선 수강</th>
              <td>
                3/16(월) ~ 3/18(수) 신청 (선착순 마감)<br />
                레벨미업 2과목 이상 수강생(국/영/수/과), 26-1 윈텀스쿨 수강생
              </td>
            </tr>
            <tr>
              <th>수강 대상</th>
              <td>
                3/18(수) ~ 3/21(토) 일반 신청 (선착순 마감)<br />
                레벨미업학원 재원생 대상, 여석에 대한 수강신청 진행
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </Section>

      <Section>
        <SectionTitle>코어자습 특징</SectionTitle>
        <InfoTable>
          <tbody>
            <tr>
              <th>학습 계획</th>
              <td>1학기 학습 계획 수립을 위한 학습 OT 진행</td>
            </tr>
            <tr>
              <th>자습관</th>
              <td>프리미엄 자습관에서 학습 시간 관리</td>
            </tr>
            <tr>
              <th>플래너</th>
              <td>드림업 학습플래너로 약점 체크 & 계획 수립</td>
            </tr>
            <tr>
              <th>주간 확인</th>
              <td>주간 학습 확인으로 학습 습관 밀착 관리</td>
            </tr>
          </tbody>
        </InfoTable>
      </Section>

      <ContactBox>
        <h3>신청 문의</h3>
        <p>학원으로 문자 또는 전화 신청</p>
        <a href="tel:032-322-0592">📞 032-322-0592</a>
      </ContactBox>
    </PageWrapper>
  );
};

export default CoreStudy;
