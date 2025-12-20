# 레벨미업 학원 웹사이트 배포 가이드

## 🌐 현재 테스트 주소
https://3000-im9gcv2wg9x9vypc94n4w-82b888ba.sandbox.novita.ai

---

## 📦 배포 방법

### 방법 1: Netlify (가장 쉬움, 무료)

1. **Netlify 회원가입**
   - https://www.netlify.com/ 접속
   - GitHub, GitLab, 또는 이메일로 가입

2. **사이트 배포**
   ```bash
   # 1. Netlify CLI 설치 (한 번만)
   npm install -g netlify-cli
   
   # 2. 로그인
   netlify login
   
   # 3. 배포
   cd /home/user/webapp/levelmeup-academy
   netlify deploy --prod --dir=build
   ```

3. **커스텀 도메인 연결 (선택사항)**
   - Netlify 대시보드에서 "Domain settings" 클릭
   - "Add custom domain" 클릭
   - 구매한 도메인 입력 및 연결

**결과:** `levelmeup-academy.netlify.app` 같은 주소를 받게 됩니다!

---

### 방법 2: Vercel (매우 쉬움, 무료)

1. **Vercel 회원가입**
   - https://vercel.com/ 접속
   - GitHub, GitLab, 또는 이메일로 가입

2. **사이트 배포**
   ```bash
   # 1. Vercel CLI 설치 (한 번만)
   npm install -g vercel
   
   # 2. 로그인
   vercel login
   
   # 3. 배포
   cd /home/user/webapp/levelmeup-academy
   vercel --prod
   ```

**결과:** `levelmeup-academy.vercel.app` 같은 주소를 받게 됩니다!

---

### 방법 3: GitHub Pages (무료)

1. **GitHub 저장소 생성**
   ```bash
   cd /home/user/webapp/levelmeup-academy
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/levelmeup-academy.git
   git push -u origin main
   ```

2. **package.json에 homepage 추가**
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/levelmeup-academy"
   }
   ```

3. **배포**
   ```bash
   npm install gh-pages --save-dev
   npm run build
   npx gh-pages -d build
   ```

**결과:** `YOUR_USERNAME.github.io/levelmeup-academy`

---

## 🌟 커스텀 도메인 구매 및 연결

### 도메인 구매처
- **가비아** (https://www.gabia.com/) - 한국
- **호스팅케이알** (https://www.hosting.kr/) - 한국
- **Namecheap** (https://www.namecheap.com/) - 해외
- **GoDaddy** (https://www.godaddy.com/) - 해외

### 추천 도메인 이름
- `levelmeup-academy.com`
- `levelmeup.co.kr`
- `levelmeup-school.com`

### 도메인 연결 방법
1. 도메인 구매 후 DNS 설정으로 이동
2. Netlify/Vercel에서 제공하는 DNS 레코드 추가
3. 24시간 이내 자동 연결

---

## 📱 실제 정보 업데이트 완료!

✅ 전화번호: 032-322-0592 / 010-2406-0591
✅ 주소: 경기도 부천시 길주로 275 중동프라자 6층
✅ 운영시간: 평일 15:00-22:00, 주말 12:00-19:00
✅ 블로그: https://blog.naver.com/levelmeup
✅ I.C.C. 시스템 소개 추가
✅ 학원 어플 정보 추가

---

## 🎯 다음 단계 (선택사항)

1. **SEO 최적화**
   - Google Search Console 등록
   - 네이버 웹마스터도구 등록

2. **분석 도구 추가**
   - Google Analytics
   - 네이버 애널리틱스

3. **소셜 미디어 연동**
   - 인스타그램 연동
   - 카카오톡 채널 추가

---

## 💡 빠른 배포 명령어 (추천)

```bash
# Netlify로 바로 배포
cd /home/user/webapp/levelmeup-academy
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=build
```

---

## 📞 문의

레벨미업 학원
- 전화: 032-322-0592
- 휴대폰: 010-2406-0591
- 블로그: https://blog.naver.com/levelmeup
