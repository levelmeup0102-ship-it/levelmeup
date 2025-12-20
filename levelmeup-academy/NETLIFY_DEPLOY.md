# 🚀 Netlify 배포 가이드 (초보자용)

## 📦 준비 완료!

빌드 파일이 준비되었습니다: `levelmeup-build.tar.gz` (490KB)

---

## 방법 1: 드래그 앤 드롭 배포 (제일 쉬움! 추천!)

### 1️⃣ Netlify 회원가입

1. https://app.netlify.com/signup 접속
2. 다음 중 선택:
   - 이메일로 가입
   - GitHub 계정으로 가입 (추천)
   - GitLab 계정으로 가입

### 2️⃣ 빌드 파일 다운로드

**샌드박스에서 파일 다운로드:**

```
파일 위치: /home/user/webapp/levelmeup-academy/build/
```

**또는 압축 파일:**
```
파일: /home/user/webapp/levelmeup-academy/levelmeup-build.tar.gz
```

💡 **Tip**: 샌드박스 파일 탐색기에서 `build` 폴더를 찾아서 다운로드하세요.

### 3️⃣ Netlify에 배포

1. Netlify 로그인 후 대시보드로 이동
2. **"Add new site"** 클릭
3. **"Deploy manually"** 선택
4. **드래그 앤 드롭 영역**이 나타남
5. `build` 폴더를 통째로 드래그 앤 드롭!
   - 압축 파일은 먼저 압축 해제 후 `build` 폴더만 업로드
6. 자동 배포 시작! ⏳ (1-2분 소요)

### 4️⃣ 완료! 🎉

- 배포 완료되면 주소가 생성됩니다
- 예: `random-name-123456.netlify.app`
- 사이트명은 설정에서 변경 가능
  - Site settings → Change site name
  - 예: `levelmeup-academy.netlify.app`

---

## 방법 2: CLI로 배포 (조금 더 복잡)

### 1️⃣ Netlify 계정 연결

```bash
cd /home/user/webapp/levelmeup-academy
npx netlify-cli login
```

- 브라우저가 열리면 Netlify 로그인
- "Authorize" 클릭

### 2️⃣ 배포

```bash
npx netlify-cli deploy --prod --dir=build
```

- 첫 배포 시 사이트 생성됨
- 이후 배포는 자동으로 같은 사이트에 업데이트

---

## 방법 3: GitHub 연동 (자동 배포)

### 장점
- 코드 수정 후 GitHub에 push하면 자동 배포
- 배포 히스토리 관리
- 팀 협업 가능

### 단계

1. **GitHub 저장소 만들기**
   ```bash
   cd /home/user/webapp/levelmeup-academy
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **GitHub에 push**
   - GitHub에서 새 저장소 생성
   - 저장소 URL 복사
   ```bash
   git remote add origin [YOUR_REPO_URL]
   git branch -M main
   git push -u origin main
   ```

3. **Netlify에서 연동**
   - Netlify 대시보드 → "Add new site"
   - "Import an existing project" 선택
   - GitHub 선택
   - 저장소 선택
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - "Deploy site" 클릭

---

## 🎨 사이트 이름 변경하기

### Netlify 대시보드에서:

1. 배포된 사이트 선택
2. **Site settings** 클릭
3. **Change site name** 클릭
4. 원하는 이름 입력 (예: `levelmeup-academy`)
5. 저장

**결과**: `levelmeup-academy.netlify.app` 주소 생성!

---

## 💎 커스텀 도메인 연결 (선택사항)

### 1️⃣ 도메인 구매

**추천 사이트:**
- 가비아 (www.gabia.com) - 한국, 한글 지원
- 호스팅케이알 (www.hosting.kr) - 한국
- Namecheap (www.namecheap.com) - 해외, 저렴

**추천 도메인:**
- `levelmeup-academy.com`
- `levelmeup.co.kr`
- `levelmeup-school.com`

**가격**: 연간 약 10,000~20,000원

### 2️⃣ Netlify에서 도메인 연결

1. Netlify 사이트 설정 → **Domain management**
2. **Add custom domain** 클릭
3. 구매한 도메인 입력
4. DNS 설정 안내가 나옴
5. 도메인 구매 사이트에서 DNS 설정 변경
6. 24시간 이내 자동 연결 완료

**Netlify가 제공하는 정보:**
- A 레코드: 75.2.60.5
- CNAME: [your-site].netlify.app

---

## 📝 배포 후 확인사항

### ✅ 체크리스트

1. [ ] 사이트 접속 확인
2. [ ] 모든 페이지 작동 확인
3. [ ] 모바일에서 확인
4. [ ] 전화번호 클릭 테스트
5. [ ] 블로그 링크 작동 확인
6. [ ] 상담 신청 폼 테스트
7. [ ] 질문 게시판 작동 확인

### 🐛 문제 해결

**이미지가 안 보이면:**
- 브라우저 새로고침 (Ctrl+F5)
- 몇 분 대기 후 재접속

**페이지가 404 에러:**
- Netlify 설정에서 "Redirects" 확인
- `_redirects` 파일 필요할 수 있음

**CSS가 깨짐:**
- 캐시 문제일 수 있음
- 브라우저 시크릿 모드로 테스트

---

## 🔄 사이트 업데이트 방법

### 방법 1: 수동 배포
1. 코드 수정
2. `npm run build` 실행
3. build 폴더를 다시 Netlify에 드래그 앤 드롭

### 방법 2: CLI
```bash
cd /home/user/webapp/levelmeup-academy
npm run build
npx netlify-cli deploy --prod --dir=build
```

### 방법 3: GitHub (자동)
```bash
git add .
git commit -m "업데이트 내용"
git push
```
→ 자동으로 Netlify가 배포!

---

## 📊 배포 시간

- **수동 배포**: 1-2분
- **CLI 배포**: 2-3분  
- **GitHub 자동 배포**: 3-5분

---

## 💰 비용

### Netlify 무료 플랜
- ✅ 무제한 사이트
- ✅ SSL 인증서 무료
- ✅ CDN 글로벌 배포
- ✅ 월 100GB 대역폭
- ✅ 월 300분 빌드 시간

**레벨미업 학원 사이트**: 무료 플랜으로 충분! 💯

---

## 🎯 추천 배포 방법

### 초보자: **방법 1 (드래그 앤 드롭)**
- 가장 쉬움
- 실수 확률 낮음
- 즉시 배포 가능

### 자주 업데이트: **방법 3 (GitHub)**
- 자동 배포
- 버전 관리
- 협업 가능

---

## 📞 도움이 필요하면

1. **Netlify 공식 문서**: https://docs.netlify.com/
2. **Netlify 커뮤니티**: https://answers.netlify.com/
3. **한글 가이드**: 구글에서 "Netlify 배포 방법" 검색

---

## 🎉 배포 완료 후

배포가 완료되면:

1. ✅ 주소 저장하기
2. ✅ 학원 홍보 자료에 주소 추가
3. ✅ 네이버 블로그에 링크 공유
4. ✅ 인스타그램 프로필에 추가
5. ✅ 카카오톡 오픈채팅방에 공유

**예시 주소**: `https://levelmeup-academy.netlify.app`

---

**다음 단계**: 배포 완료 후 주소를 알려주시면 확인해드리겠습니다! 😊
