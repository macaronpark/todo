# todo

학습을 위한 토이 프로젝트 `2024-08-29~`

- 목표
  - ⬜ 투두리스트 앱 완성
    - 레퍼런스: [Microsoft To Do](https://www.microsoft.com/ko-kr/microsoft-365/microsoft-to-do-list-app)
    - 개발 체크리스트: [/devlog/00.checklist.md](/devlog/00.checklist.md)
    - 개발 히스토리: [macaronpark/todo/pulls](https://github.com/macaronpark/todo/pulls)
  - ⬜ [Feature-Sliced Design](https://feature-sliced.design/) 학습과 적용
  - ⬜ [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) 학습과 적용
  - ⬜ Node.js, Express 학습과 적용

<br />

## 시작하기

### 사전 요구사항

- node >=18

### 설치 방법

1. 레포지토리 클론: `git@github.com:macaronpark/todo.git`
2. 의존성 설치: `pnpm install`
3. 개발 서버 실행: `pnpm dev`

<br />

## 폴더 구조

- 📂 `_devlog`: 학습 기록
- 📂 `client`
  - 📂 `src`
    - 📂 `app`
      - 📄 `index.tsx`: 앱 진입점
      - ...
    - 📂 `pages`: 화면
    - 📂 `widgets`: 화면 구성 인터페이스
    - 📂 `features`: 비즈니스 액션
    - 📂 `entities`: 데이터 엔티티
    - 📂 `shared`: 앱 전반에서 사용하는 리소스
- 📂 `server`

<br />
