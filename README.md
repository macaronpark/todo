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

<br />

## 폴더 구조

- 📂 `devlog`: 개발 기록
- 📂 `src`

<br />

## 유저스토리

- 카테고리 관리
  - ⬜ 새 카테고리를 생성할 수 있다.
  - ⬜ 카테고리를 조회할 수 있다.
  - ⬜ 카테고리의 이름을 변경할 수 있다.
  - ⬜ 카테고리를 삭제할 수 있다.
- 태스크 관리
  - ⬜ 태스크를 추가할 수 있다.
  - ⬜ 상태별 태스크 목록을 조회할 수 있다.
  - ⬜ 태스크를 수정할 수 있다.
  - ⬜ 태스크를 삭제할 수 있다.

<br />

## 유저스토리별 기획

### ⬜ 새 카테고리를 생성할 수 있다.

- [ ] [+ 새 카테고리] 버튼을 클릭해 새 카테고리를 생성한다.
- [ ] 생성한 카테고리의 초기 이름은 '새 카테고리'다.
- [ ] 생성한 카테고리는 카테고리 목록에서 바로 확인할 수 있다.

### ⬜ 카테고리를 조회할 수 있다.

- [ ] 카테고리는 추가된 순서대로 보여준다. (순서 변경은 추후 개발)
- [ ] 카테고리 목록에서 조회 중인 카테고리 메뉴를 식별할 수 있다.
- [ ] 카테고리에 속한 태스크의 총 개수를 확인할 수 있다.

### ⬜ 카테고리의 이름을 변경할 수 있다.

- [ ] 카테고리 목록에서 우 클릭 > [메뉴] > [이름 바꾸기]를 클릭해 이름을 변경할 수 있다.
- [ ] 카테고리 목록에서 카테고리가 포커스된 상태에서 'F2'키로 이름을 변경할 수 있다.
- [ ] 태스크 목록 상단의 카테고리 이름을 클릭해서 이름을 수정할 수 있다.
- [ ] 태스크 목록 상단의 [더보기] > [메뉴] > [이름 바꾸기]를 클릭해 이름을 변경할 수 있다.

### ⬜ 카테고리를 삭제할 수 있다.

- [ ] 카테고리 목록에서 우 클릭 > [메뉴] > [삭제]를 클릭해 카테고리를 삭제할 수 있다.
- [ ] 카테고리 목록에서 카테고리가 포커스된 상태에서 'Delete'키로 카테고리를 삭제할 수 있다.
- [ ] 태스크 목록 상단의 [더보기] > [메뉴] > [이름 바꾸기]를 클릭해 이름을 변경할 수 있다.
- [ ] 카테고리를 삭제하기 전, 삭제 경고 알림창을 보여준다.
  - [카테고리 삭제] "카테고리 이름"을(를) 영구적으로 삭제합니다. [삭제][취소]

### ⬜ 태스크를 추가할 수 있다.

- [ ] 태스크의 제목을 입력한 후 'Enter'키로 태스크를 등록할 수 있다.
- [ ] 태스크를 등록할 때 기한을 지정할 수 있다.
  - [기한] 버튼을 클릭하면 기한 옵션 메뉴를 보여준다.
  - 기한 옵션: '오늘 (해당 요일)', '내일 (해당 요일)', '다음 주 (해당 요일)', 날짜 선택
  - 날짜 선택 메뉴를 선택하면 달력을 보여준다. 달력에서 직접 날짜를 선택할 수 있다.

### ⬜ 상태별 태스크 목록을 조회할 수 있다.

- [ ] '진행중' 태스크 목록과 '완료됨' 태스크 목록을 조회할 수 있다.
- [ ] '완료됨' 태스크 목록은 접거나 펼칠 수 있다.
- [ ] 태스크 목록에서 태스크 정렬은 '최근 추가 내림차순'으로 정렬한다.
- [ ] 태스크 목록에서 각 태스크의 제목, 기한, 메모 여부를 확인할 수 있다.

### ⬜ 태스크를 수정할 수 있다.

- [ ] 태스크 목록에서 태스크를 선택해서 해당 태스크의 상세 정보를 조회하고 수정할 수 있다.
- [ ] 태스크의 상태를 '진행중' 또는 '완료됨'으로 변경할 수 있다.
- [ ] 태스크의 기한을 지정, 변경, 제거할 수 있다.
  - 기한 텍스트 형태
    - 오늘까지
    - 내일까지
    - x월 xx일까지
    - 기한 설정
  - 기한 텍스트 색상
    - 예정된 기한일 때: 파란색
    - 지난 기한일 때: 빨간색
    - 지정하지 않았을 때: 회색
- [ ] 태스크의 메모를 작성할 수 있다.
  - 태스크의 메모가 없다면, 메모가 마지막으로 수정된 일자를 보여주지 않는다.
  - 태스크의 메모가 있을 때, 메모가 마지막으로 수정된 일자를 보여준다.
    - 문구: x월 x일 금에 업데이트 됨

### ⬜ 태스크를 삭제할 수 있다.

- [ ] 태스크 상세 정보 섹션 하단의 [태스크 삭제] 버튼을 클릭해 태스크를 삭제할 수 있다.
- [ ] 태스크 목록에서 태스크가 포커스된 상태에서 'Delete'키로 태스크를 삭제할 수 있다.
- [ ] 태스크 목록에서 태스크 우 클릭 > [메뉴] > [태스크 삭제]를 클릭해 태스크를 삭제할 수 있다.
- [ ] 태스크를 삭제하기 전, 삭제 경고 알림창을 보여준다.
  - [태스크 삭제] "태스크 제목"을(를) 영구적으로 삭제합니다. [삭제][취소]
