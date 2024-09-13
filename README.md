# todo

토이 프로젝트 (2024-08-29~)

<br />

## 시작하기

### 사전 요구사항

- node >=18

### 설치 방법

1. 레포지토리 클론: `git@github.com:macaronpark/todo.git`
2. corepack 허용: `corepack enable`
3. 의존성 설치: `pnpm install`
4. 개발 서버 실행: `pnpm dev`

### 개발 기록

[macaronpark/todo/pulls](https://github.com/macaronpark/todo/pulls) 참고

<br />

## 폴더 구조

- 📂 `devlog`: 학습 기록
- 📂 `src`
  - 📂 `app`: 전역 스타일, 프로바이더, index.tsx 등 앱 실행 전반에 필요한 코드
  - 📂 `entities`: 엔티티 (카테고리, 태스크)
  - 📂 `features`: 기능 단위의 컴포넌트와 로직
  - 📂 `pages`: 화면
