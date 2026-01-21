import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors, gradients } from '../theme';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: ${gradients.navy};
  color: ${colors.text.primary};
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 10px 0;
  
  @media (max-width: 968px) {
    padding: 8px 0;
  }
`;

const TopBar = styled.div`
  background: rgba(26, 35, 50, 0.95);
  padding: 0;
  min-height: 32px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const TopBarContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 6px 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
    gap: 12px;
    padding: 5px 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  
  svg {
    width: 16px;
    height: 16px;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  white-space: nowrap;
  
  @media (max-width: 1200px) {
    gap: 10px;
  }
  
  @media (max-width: 968px) {
    gap: 8px;
  }
`;

const PhoneNumber = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s;
  white-space: nowrap;
  
  svg {
    width: 14px;
    height: 14px;
    opacity: 0.8;
    flex-shrink: 0;
  }
  
  span {
    @media (max-width: 1200px) {
      display: none;
    }
  }
  
  &:hover {
    color: rgba(255, 255, 255, 0.95);
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const BlogButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(23, 183, 166, 0.12);
  color: rgba(23, 183, 166, 0.9);
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(23, 183, 166, 0.2);
  
  svg {
    width: 13px;
    height: 13px;
  }
  
  &:hover {
    background: rgba(23, 183, 166, 0.25);
    border-color: #17B7A6;
    color: #17B7A6;
  }
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const UtilityCenter = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const UtilityRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    background: rgba(23, 183, 166, 0.15);
    color: #17B7A6;
    text-decoration: none;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 1px solid rgba(23, 183, 166, 0.3);
    
    svg {
      width: 14px;
      height: 14px;
    }
    
    &:hover {
      background: rgba(23, 183, 166, 0.25);
      border-color: rgba(23, 183, 166, 0.5);
      transform: translateY(-1px);
    }
  }
  
  @media (max-width: 768px) {
    a {
      padding: 5px 12px;
      font-size: 0.75rem;
    }
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
  min-height: 60px;
  
  @media (max-width: 1200px) {
    gap: 15px;
    min-height: 56px;
  }
  
  @media (max-width: 968px) {
    gap: 10px;
    min-height: 52px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  
  @media (max-width: 1200px) {
    gap: 12px;
  }
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  flex: 0 0 auto;
  flex-shrink: 0;
  min-width: 180px;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    min-width: 120px;
  }
`;

const LogoImage = styled.img`
  height: 48px !important;
  width: auto !important;
  max-height: none !important;
  display: block !important;
  object-fit: contain !important;
  
  @media (max-width: 1200px) {
    height: 46px !important;
  }
  
  @media (max-width: 768px) {
    height: 40px !important;
  }
`;

const LogoText = styled.span`
  color: ${colors.text.primary};
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1;
  
  .highlight-m {
    color: ${colors.red.primary};
  }
  
  .highlight-e {
    color: ${colors.green.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 1.5px;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  width: 100%;
  justify-content: center;
  
  @media (max-width: 968px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: min(240px, 80vw);
    background: linear-gradient(135deg, #1a2332 0%, #2d3748 100%);
    padding: 14px 16px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 14px;
    flex-direction: column;
    gap: 8px;
  }
`;

const MenuItemWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 8px 0;
  
  @media (max-width: 968px) {
    width: 100%;
    padding: 0;
    margin-bottom: 6px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${colors.text.primary};
  text-decoration: none;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 6px;
  transition: all 0.3s;
  background: ${props => props.$isActive ? '#17B7A6' : 'transparent'};
  white-space: nowrap;
  font-size: 0.95rem;
  
  &:hover {
    background: #17B7A6;
  }
  
  @media (max-width: 968px) {
    display: block;
    padding: 11px 13px;
    font-size: 15.5px;
    line-height: 1.4;
    width: 100%;
    text-align: left;
    border-radius: ${props => props.$isActive ? '11px' : '8px'};
    font-weight: ${props => props.$isActive ? '600' : '500'};
    background: ${props => props.$isActive ? 'rgba(23, 183, 166, 0.2)' : 'transparent'};
    border: ${props => props.$isActive ? '1px solid rgba(23, 183, 166, 0.3)' : '1px solid transparent'};
    
    &:hover {
      background: rgba(23, 183, 166, 0.15);
      border-color: rgba(23, 183, 166, 0.25);
    }
  }
`;

const DropdownMenu = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #2d3748 0%, #1a2332 100%);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  margin-top: 4px;
  min-width: 160px;
  padding: 8px 0;
  z-index: 9999;
  animation: fadeInDown 0.3s ease;
  
  /* 부모와 드롭다운 사이 간격을 채워서 hover 유지 */
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background: transparent;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  color: ${colors.text.primary};
  text-decoration: none;
  padding: 10px 20px;
  font-size: 0.95rem;
  transition: all 0.2s;
  
  &:hover {
    background: ${colors.green.primary};
    color: white;
  }
`;

const MenuButtonContainer = styled.div`
  display: none;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 968px) {
    display: flex;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 968px) {
    display: block;
  }
`;

const MenuText = styled.span`
  display: none;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  
  @media (max-width: 968px) {
    display: block;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const FooterLogo = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 20px;
  color: ${colors.text.primary};
`;

const Footer = styled.footer`
  background: ${gradients.navy};
  color: ${colors.text.primary};
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

interface SubMenuItem {
  path: string;
  label: string;
}

interface MenuItem {
  path: string;
  label: string;
  subMenu?: SubMenuItem[];
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  
  const handleMenuEnter = (path: string) => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    setHoveredMenu(path);
  };
  
  const handleMenuLeave = () => {
    const timer = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
    setCloseTimer(timer);
  };

  const menuItems: MenuItem[] = [
    { path: '/', label: '홈' },
    { 
      path: '/about', 
      label: '학원소개',
      subMenu: [
        { path: '/about#guide', label: '학원안내' },
        { path: '/about#facilities', label: '학원시설' },
        { path: '/about#location', label: '찾아오는 길' }
      ]
    },
    { path: '/teachers', label: '강사소개' },
    { 
      path: '/curriculum', 
      label: '커리큘럼',
      subMenu: [
        { path: '/curriculum#process', label: '학습 프로세스' },
        { path: '/curriculum#subjects', label: '과목 소개' }
      ]
    },
    { path: '/timetable', label: '시간표' },
    { path: '/hall-of-fame', label: '합격이야기' },
    { 
      path: '/events', 
      label: '학원소식',
      subMenu: [
        { path: '/events#study', label: '자습 프로그램' },
        { path: '/events#analysis', label: '내신 분석' },
        { path: '/events#programs', label: '특강 프로그램' },
        { path: '/events#management', label: '학습 관리' }
      ]
    },
    { 
      path: '/gallery', 
      label: '갤러리',
      subMenu: [
        { path: '/gallery?tab=system', label: '학습시스템' },
        { path: '/gallery?tab=event', label: '학습 이벤트' }
      ]
    },
    { path: '/consulting', label: '상담안내' },
  ];

  return (
    <LayoutWrapper>
      <Header>
        <NavContainer>
          <Logo to="/">
            <LogoImage src="/logo-v2.png?v=2" alt="LEVEL ME UP" />
          </Logo>
          
          <Nav isOpen={menuOpen}>
          <NavRow>
            {menuItems.map(item => (
              <MenuItemWrapper
                key={item.path}
                onMouseEnter={() => item.subMenu && handleMenuEnter(item.path)}
                onMouseLeave={handleMenuLeave}
              >
                <NavLink
                  to={item.path}
                  $isActive={location.pathname === item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
                {item.subMenu && (
                  <DropdownMenu 
                    show={hoveredMenu === item.path}
                    onMouseEnter={() => handleMenuEnter(item.path)}
                    onMouseLeave={handleMenuLeave}
                  >
                    {item.subMenu.map(subItem => (
                      <DropdownItem
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setHoveredMenu(null);
                        }}
                      >
                        {subItem.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </MenuItemWrapper>
            ))}
          </NavRow>
        </Nav>
        
        <HeaderRight>
          <PhoneNumber href="tel:032-322-0592">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>032-322-0592</span>
          </PhoneNumber>
          <BlogButton href="https://blog.naver.com/levelmeup" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            블로그
          </BlogButton>
          <MenuButtonContainer>
            <MenuText>MENU</MenuText>
            <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? '✖' : '≡'}
            </MenuButton>
          </MenuButtonContainer>
        </HeaderRight>
        
        </NavContainer>
      </Header>
      
      <Main>{children}</Main>
      
      <Footer>
        <FooterContainer>
          <FooterContent>
            <FooterSection>
              <FooterLogo>LEVEL ME UP</FooterLogo>
              <p>부천 중동 위치</p>
              <p>중고등 국영수과 전문 학원</p>
              <p>학생 개개인의 성적 향상을 위해</p>
              <p>최선을 다하겠습니다.</p>
            </FooterSection>
            <FooterSection>
              <h3>연락처</h3>
              <p>☎ 전화: 032-322-0592</p>
              <p>✆ 휴대폰: 010-2406-0591</p>
              <p>⌖ 주소: 경기도 부천시 길주로 275</p>
              <p style={{marginLeft: '28px'}}>중동프라자 6층</p>
            </FooterSection>
            <FooterSection>
              <h3>운영시간</h3>
              <p>평일: 15:00 - 22:00</p>
              <p>주말: 12:00 - 22:00</p>
              <p>※ 전화 카카오톡 문의 상시 응대 가능</p>
            </FooterSection>
          </FooterContent>
          <Copyright>
            © 2026 레벨미업 학원 (LevelMeUp Academy). All rights reserved.
          </Copyright>
        </FooterContainer>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
