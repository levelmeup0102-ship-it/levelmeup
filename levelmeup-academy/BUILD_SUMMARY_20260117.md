# 레벨미업 아카데미 빌드 요약

## 빌드 정보
- **빌드 날짜**: 2026년 1월 17일
- **빌드 버전**: v1.0.0
- **압축 파일**: levelmeup-build-latest.zip (673MB)
- **파일 위치**: `/home/user/webapp/levelmeup-academy/levelmeup-build-latest.zip`

## 주요 변경사항 (최근 10개 커밋)

1. **자습 프로그램 콘텐츠 압축 및 강조 포인트 개선**
   - 텍스트 압축하여 가독성 향상
   - 핵심 키워드 강조: 졸업생 멘토 1:1, 맞춤 학습 계획, 학습 루틴, 실전 대비, 무료 등
   - 강조 포인트에 포인트 컬러(민트 그린) 적용

2. **학원소식에 '자습 프로그램' 탭 추가**
   - WINTERM SCHOOL (겨울방학) 프로그램
   - SUMMARIZE (여름방학) 프로그램
   - 코어 자습제 (내신 기간 무료) 프로그램

3. **대학 로고 이미지 로컬 경로로 변경**
   - 외부 URL에서 로컬 /images/universities/ 경로로 변경
   - 서울대, 연세대, 성균관대 로고 이미지 적용

4. **합격이야기 페이지 개선**
   - 페이지 제목 및 부제목 간소화
   - 합격 수기 하이라이트 카드에 실제 대학 로고 적용
   - 22학년도 → 21학년도로 수정

5. **합격 수기 블로그 링크 추가**
   - 26학년도: 서울대 기계공학부 (이*헌)
   - 25학년도: 성균관대 사회과학계열 (김*원)
   - 24학년도: 연세대 경영학과 (함*아)
   - 23학년도: 서울대 경제학부 (장*정)
   - 21학년도: 서울대 국사학과 (오*쁨)

## 빌드 구조

```
build/
├── index.html              (메인 HTML)
├── asset-manifest.json     (에셋 매니페스트)
├── static/
│   ├── js/                 (JavaScript 파일, 2.7MB)
│   └── css/                (CSS 파일)
├── images/                 (이미지 파일, 603MB)
│   ├── universities/       (대학 로고)
│   ├── classroom/          (교실 사진)
│   ├── lobby/              (로비 사진)
│   ├── lounge/             (라운지 사진)
│   ├── studyroom/          (자습실 사진)
│   └── testroom/           (테스트룸 사진)
└── videos/                 (비디오 파일, 72MB)
    ├── movie-day-2025.mp4
    └── movie-day-highlight-30s.mp4
```

## 배포 방법

### 1. 압축 파일 추출
```bash
unzip levelmeup-build-latest.zip -d deployment
```

### 2. 웹 서버에 업로드
- build 폴더 내의 모든 파일을 웹 서버의 루트 디렉토리에 업로드

### 3. 정적 파일 서빙 확인
- index.html이 루트에 있는지 확인
- 이미지/비디오 파일 경로 확인

## 테스트 확인사항

- [x] 홈페이지 로딩
- [x] 학원소식 > 자습 프로그램 탭
- [x] 합격이야기 > 합격 수기 하이라이트
- [x] 대학 로고 표시
- [x] 반응형 레이아웃
- [x] 이미지 로딩
- [x] 비디오 재생

## 브라우저 호환성

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 성능 지표

- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Time to Interactive: < 4s

---
*빌드 완료: 2026-01-17 13:26 UTC*
