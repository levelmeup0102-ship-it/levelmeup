# LEVEL ME UP 학원 웹사이트 배포 가이드

## 📦 프로젝트 정보
- **프로젝트명**: LEVEL ME UP Academy Website
- **프레임워크**: React 18 + TypeScript
- **스타일링**: Emotion (CSS-in-JS)
- **라우팅**: React Router v6
- **빌드 도구**: Create React App

## 🎯 주요 업데이트 사항 (2026-01-07)

### 1. 메인 페이지 슬라이드 캐러셀 추가
- 4개 슬라이드 자동 재생 (3초 간격)
- 좌우 화살표 네비게이션
- 하단 인디케이터 점
- 마우스 호버 시 일시정지
- 반응형 디자인 (PC/모바일)

### 2. 상담 안내 페이지 개선
- 전화/카카오톡 상담 2열 카드 레이아웃
- 카카오톡 QR 코드 추가
- 카카오톡 ID 표시 (Levelmeup)
- 정사각형 카드에서 최적화된 크기로 변경
- 중앙 정렬 (max-width: 900px)

### 3. 학원소개 페이지
- 주요 성과 통계 섹션 추가
- 2026학년도 입시 결과 반영
  - 27건 주요대학 합격
  - 서울대·연세대·고려대 합격자 배출

### 4. 갤러리 페이지
- 이미지 여백 제거 (object-fit: cover)
- 학습시스템 5개 + 학습 이벤트 3개
- 일관된 카드 디자인

### 5. UI/UX 개선
- 네비게이션 메뉴 글씨 크기 확대
- 페이지 전환 시 스크롤 자동 초기화
- 모바일 메뉴 배경색 개선
- 탭 디자인 강화

## 🚀 Netlify 배포 방법

### 방법 1: Git 연동 (권장)
1. Netlify 대시보드에서 "New site from Git" 클릭
2. GitHub 저장소 연결: `levelmeup0102-ship-it/levelmeup`
3. 브랜치 선택: `movieday-dedicated-page`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Base directory: `levelmeup-academy`
5. Deploy site 클릭

### 방법 2: 수동 배포
1. 로컬에서 빌드 실행:
   ```bash
   cd /home/user/webapp/levelmeup-academy
   npm install
   npm run build
   ```
2. `build` 폴더를 Netlify에 드래그 앤 드롭

## 📋 환경 변수
현재 프로젝트는 환경 변수가 필요하지 않습니다.

## 🔗 중요 링크
- **GitHub 저장소**: https://github.com/levelmeup0102-ship-it/levelmeup
- **현재 브랜치**: movieday-dedicated-page
- **카카오톡 채널**: http://pf.kakao.com/_xexjTxbn
- **Instagram**: https://www.instagram.com/levelme__up/
- **블로그**: https://blog.naver.com/levelmeup

## 📱 연락처
- 전화: 032-322-0592
- 휴대폰: 010-2406-0591
- 주소: 경기도 부천시 길주로 275, 중동프라자 6층

## 🛠️ 개발 서버 실행
```bash
npm start
```
개발 서버: http://localhost:3000

## 📸 주요 이미지 파일
- 슬라이드: slide2.jpg, slide3.jpg, slide4.jpg, slide5.jpg
- 시설: facility-*.jpg (6개)
- 갤러리: gallery-*.jpg, event-*.jpg (8개)
- 카카오톡 QR: kakao-qr.png
- 로고: logo.png

## ✅ 최근 커밋 (20개)
```
23ae618 - style: 상담 카드 크기 및 정렬 개선
aff39a8 - feat: 카카오톡 상담 섹션에 QR 코드 및 ID 추가
87cbe05 - content: 학원소개 페이지 통계 정보 업데이트
bdb6c26 - style: 갤러리 이미지 여백 제거 및 표시 개선
c7033e3 - style: 슬라이드 캐러셀 설정 개선
cd2a98d - feat: 슬라이드 캐러셀 개선
9f4488e - style: 슬라이드 캐러셀 높이 증가
2f892d1 - fix: 슬라이드 캐러셀 이미지 표시 개선
b99f43f - feat: 학원소개 페이지에 주요 성과 통계 섹션 추가
ce33893 - feat: 메인 페이지에 슬라이드 캐러셀 추가
```

## 📦 빌드 정보
- 빌드 크기: ~100MB
- 메인 JS: 514KB
- CSS: 512B (gzipped)
- 이미지: 56개

## 🎨 기술 스택
- React 18.3.1
- TypeScript 4.9.5
- Emotion 11.13.5
- React Router DOM 7.1.1
- Web Vitals 2.1.4

---
배포 완료 후 https://[your-site-name].netlify.app 에서 확인하세요!
