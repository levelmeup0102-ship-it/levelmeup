import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #1a5f3d 0%, #2d8659 50%, #ff8c42 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const TopBar = styled.div`
  background: rgba(0,0,0,0.1);
  padding: 10px 0;
`;

const TopBarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    font-size: 0.8rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    opacity: 0.9;
  }
`;

const LogoIcon = styled.span`
  font-size: 2rem;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 15px;
  align-items: center;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    flex-direction: column;
    padding: 20px;
    gap: 0;
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 5px;
  transition: all 0.3s;
  border-bottom: 3px solid ${props => props.$isActive ? 'white' : 'transparent'};
  white-space: nowrap;
  font-size: 0.95rem;
  
  &:hover {
    background: rgba(255,255,255,0.1);
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-radius: 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 40px 0;
`;

const Footer = styled.footer`
  background: #2d3748;
  color: white;
  padding: 40px 0 20px;
  margin-top: auto;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 15px;
    font-size: 1.1rem;
  }
  
  p, a {
    color: #cbd5e0;
    line-height: 1.8;
    font-size: 0.9rem;
  }
  
  a:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #cbd5e0;
  font-size: 0.9rem;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: '홈' },
    { path: '/about', label: '학원소개' },
    { path: '/teachers', label: '강사소개' },
    { path: '/timetable', label: '시간표' },
    { path: '/gallery', label: '갤러리' },
    { path: '/hall-of-fame', label: '명예의전당' },
    { path: '/events', label: '이벤트' },
    { path: '/qna', label: '질문게시판' },
    { path: '/consulting', label: '상담신청' },
  ];

  return (
    <LayoutWrapper>
      <Header>
        <TopBar>
          <TopBarContainer>
            <ContactInfo>
              <span>📞 문의전화: 032-322-0592</span>
              <span>⏰ 운영시간: 평일 15:00-22:00 | 주말 12:00-19:00</span>
            </ContactInfo>
            <div>
              <a href="https://blog.naver.com/levelmeup" target="_blank" rel="noopener noreferrer" style={{color: 'white', marginLeft: '10px'}}>
                📝 블로그
              </a>
            </div>
          </TopBarContainer>
        </TopBar>
        <NavContainer>
          <Logo to="/">
            <LogoIcon>📚</LogoIcon>
            <span>레벨미업 학원</span>
          </Logo>
          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </MenuButton>
          <Nav isOpen={menuOpen}>
            {menuItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                $isActive={location.pathname === item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>
        </NavContainer>
      </Header>
      
      <Main>{children}</Main>
      
      <Footer>
        <FooterContainer>
          <FooterContent>
            <FooterSection>
              <h3>레벨미업 학원</h3>
              <p>부천 중동 위치</p>
              <p>중고등 국영수 전문 학원</p>
              <p>학생 개개인의 성적 향상을 위해</p>
              <p>최선을 다하겠습니다.</p>
            </FooterSection>
            <FooterSection>
              <h3>연락처</h3>
              <p>📞 전화: 032-322-0592</p>
              <p>📱 휴대폰: 010-2406-0591</p>
              <p>📍 주소: 경기도 부천시 길주로 275</p>
              <p style={{marginLeft: '28px'}}>중동프라자 6층</p>
            </FooterSection>
            <FooterSection>
              <h3>운영시간</h3>
              <p>평일: 15:00 - 22:00</p>
              <p>주말: 12:00 - 19:00</p>
              <p>※ 전화문의 상시 응대 가능</p>
            </FooterSection>
          </FooterContent>
          <Copyright>
            © 2024 레벨미업 학원 (LevelMeUp Academy). All rights reserved.
          </Copyright>
        </FooterContainer>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
