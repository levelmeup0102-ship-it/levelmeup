// Level Me Up 학원 색상 테마
export const colors = {
  // 기본 배경 및 구조 색 (딥 네이비/차콜)
  navy: {
    dark: '#0A1929',      // 메인 다크 네이비
    medium: '#1A2332',    // 중간 네이비
    light: '#2C3E50',     // 밝은 네이비
  },
  charcoal: {
    dark: '#1E1E1E',      // 차콜
    medium: '#2D2D2D',    // 중간 차콜
  },
  
  // 포인트 색 1: 네이비 블루 - 버튼, CTA, 클릭 요소
  green: {
    primary: '#2E4A6F',   // 네이비 블루 메인 컬러 (채도 낮춤)
    hover: '#1E3A5F',     // 호버 시 더 진한 네이비
    light: '#3E5A7F',     // 밝은 네이비
    lightBg: 'rgba(46, 74, 111, 0.15)', // 반투명 배경
  },
  
  // 포인트 색 2: 로고의 빨간색 (M) - 성과 숫자, 제한적 강조
  red: {
    primary: '#E53935',   // 로고 M 색상
    hover: '#EF5350',     // 호버 시
    light: '#EF5350',     // 밝은 빨강
  },
  
  // 포인트 색 3: 오렌지 - 액센트 색상
  orange: {
    primary: '#FF6D00',   // 오렌지 색상
    hover: '#FF8F00',     // 호버 시
    light: '#FFA726',     // 밝은 오렌지
  },
  
  // 보조 색: 화이트와 연한 회색
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F5F5F5',
    mediumGray: '#E0E0E0',
    darkGray: '#9E9E9E',
    textGray: '#757575',
  },
  
  // 텍스트 색상
  text: {
    primary: '#FFFFFF',      // 다크 배경 위 텍스트
    secondary: '#B0BEC5',    // 보조 텍스트
    light: '#1E1E1E',        // 화이트 배경 위 텍스트
  }
};

export const gradients = {
  navy: `linear-gradient(135deg, ${colors.navy.dark} 0%, ${colors.navy.medium} 50%, ${colors.navy.light} 100%)`,
  charcoal: `linear-gradient(135deg, ${colors.charcoal.dark} 0%, ${colors.charcoal.medium} 100%)`,
  greenButton: `linear-gradient(135deg, ${colors.green.primary} 0%, ${colors.green.hover} 100%)`,
  greenOrange: `linear-gradient(135deg, ${colors.green.primary} 0%, ${colors.orange.primary} 100%)`,
  // 상담 페이지용 부드러운 네이비 그라데이션 (채도 낮춤, 명도 차이만)
  consultingNavy: `linear-gradient(135deg, #F8F9FB 0%, rgba(46, 74, 111, 0.12) 100%)`,
  consultingNavyHover: `linear-gradient(135deg, #F8F9FB 0%, rgba(46, 74, 111, 0.18) 100%)`,
  consultingNavyLight: `linear-gradient(135deg, rgba(46, 74, 111, 0.05) 0%, rgba(46, 74, 111, 0.03) 100%)`,
};
