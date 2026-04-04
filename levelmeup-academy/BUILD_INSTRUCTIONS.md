# 레벨미업 학원 웹사이트 빌드 가이드

## 최신 코드 받기

```bash
git clone https://github.com/levelmeup0102-ship-it/levelmeup.git
cd levelmeup
git checkout movieday-dedicated-page-clean
```

## 빌드하기

```bash
# 의존성 설치
npm install

# 프로덕션 빌드 생성
npm run build
```

빌드 완료 후 `build/` 폴더가 생성됩니다.

## 배포하기

### Netlify 배포
1. [Netlify](https://app.netlify.com/) 로그인
2. "Add new site" → "Deploy manually"
3. `build` 폴더를 드래그앤드롭

### 로컬 테스트
```bash
npm install -g serve
serve -s build
```

## 주요 변경사항
- About 페이지: "Progress, not pressure" 철학 적용
- 59개 시설 이미지 추가
- #17B7A6 통일된 디자인 시스템
- 헤더/푸터 개선

빌드 크기: ~1.5GB (고화질 이미지 포함)
