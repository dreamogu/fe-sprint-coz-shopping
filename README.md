# 🌊 Coz Shopping Project
![May-18-2023 14-52-44](https://github.com/dreamogu/fe-sprint-coz-shopping/assets/121333344/1f3b3dfc-b8a2-49d8-a412-2fd31e4305f8)


## 🌊 프로젝트 소개
코드스테이츠 부트캠프 수료 과정 중 진행한 솔로 프로젝트입니다.

## 🌊 기술 스택

- JavaScript
- React.js 
- Post.css

- Yarn
- redux, react-redux, redux/toolkit
- ESLint
- Prettier
- React-Router-Dom
- React-Icons
- React-Toastify
- Storybook 

**Tools**
- Figma
- Visual Studio Code

## 🌊 기능 구현
### 공통 컴포넌트
- Header
  - DropDown 구현
- Footer
- Product
  - 각 타입마다 다른 UI 처리
- Filter
   - 데이터를 상품, 카테고리, 기획전, 브랜드 타입별로 나누어주는 컴포넌트
- Modal
  - Modal 내에서도 북마크 처리 가능하게 구현
- Toast
  - 북마크(또는 해제)시 Toast 출력
- Alert
  - 컨텐츠가 비어있는 부분을 사용자에게 안내하기 위한 컴포넌트

### 페이지
- Main
  - 상품 리스트 4개씩와 북마크 리스트 4개씩 출력
- ProductsList
  -  무한 스크롤
  -  타입별로 필터링
- Bookmark
  - 무한 스크롤
  - 타입별로 필터링 
- etc
  - Privacy, TermOfService, NotFound


## 🌊 파일 구조

```
src
 ┣ asset
 ┃ ┣ icons
 ┃ ┃ ┣ .DS_Store
 ┃ ┃ ┣ bookmark.svg
 ┃ ┃ ┣ content.svg
 ┃ ┃ ┣ empty_bookmark.svg
 ┃ ┃ ┣ error.svg
 ┃ ┃ ┣ loading.svg
 ┃ ┃ ┣ logo.svg
 ┃ ┃ ┗ products.svg
 ┃ ┗ img
 ┃ ┃ ┣ brand.png
 ┃ ┃ ┣ category.png
 ┃ ┃ ┣ exhibition.png
 ┃ ┃ ┣ product.png
 ┃ ┃ ┗ total.png
 ┣ common
 ┃ ┣ Alert
 ┃ ┃ ┣ Alert.jsx
 ┃ ┃ ┣ Alert.module.css
 ┃ ┃ ┗ Alert.stories.js
 ┃ ┣ FilterButton
 ┃ ┃ ┣ FilterButton.jsx
 ┃ ┃ ┣ FilterButton.module.css
 ┃ ┃ ┗ FilterButton.stories.js
 ┃ ┗ .DS_Store
 ┣ components
 ┃ ┣ Filter
 ┃ ┃ ┣ Filter.jsx
 ┃ ┃ ┗ Filter.module.css
 ┃ ┣ Footer
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┗ Footer.module.css
 ┃ ┣ Header
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┗ Header.module.css
 ┃ ┣ Modal
 ┃ ┃ ┣ Modal.jsx
 ┃ ┃ ┗ Modal.module.css
 ┃ ┣ Nav
 ┃ ┃ ┣ Nav.jsx
 ┃ ┃ ┗ Nav.module.css
 ┃ ┣ Product
 ┃ ┃ ┣ Product.jsx
 ┃ ┃ ┗ Product.module.css
 ┃ ┣ Title
 ┃ ┗ Toast
 ┃ ┃ ┣ Toast.jsx
 ┃ ┃ ┣ Toast.module.css
 ┃ ┃ ┗ ToastMessage.js
 ┣ page
 ┃ ┣ BookMark
 ┃ ┃ ┣ BookMark.jsx
 ┃ ┃ ┣ BookMark.module.css
 ┃ ┃ ┗ toastMessage.js
 ┃ ┣ Main
 ┃ ┃ ┣ Main.jsx
 ┃ ┃ ┗ Main.module.css
 ┃ ┣ NotFound
 ┃ ┃ ┣ NotFound.jsx
 ┃ ┃ ┗ NotFound.module.css
 ┃ ┣ Privacy
 ┃ ┃ ┣ Privacy.jsx
 ┃ ┃ ┗ Privacy.module.css
 ┃ ┣ Products
 ┃ ┃ ┣ ProductsList.jsx
 ┃ ┃ ┗ ProductsList.module.css
 ┃ ┣ Root
 ┃ ┃ ┣ Root.jsx
 ┃ ┃ ┗ Root.module.css
 ┃ ┗ TermOfService
 ┃ ┃ ┣ TermOfService.jsx
 ┃ ┃ ┗ TermOfService.module.css
 ┣ redux
 ┃ ┣ bookmarkSlice.js
 ┃ ┣ productSlice.js
 ┃ ┗ store.js
 ┣ stories
 ┃ ┣ assets
 ┃ ┃ ┣ code-brackets.svg
 ┃ ┃ ┣ colors.svg
 ┃ ┃ ┣ comments.svg
 ┃ ┃ ┣ direction.svg
 ┃ ┃ ┣ flow.svg
 ┃ ┃ ┣ plugin.svg
 ┃ ┃ ┣ repo.svg
 ┃ ┃ ┗ stackalt.svg
 ┃ ┣ Button.jsx
 ┃ ┣ Button.stories.js
 ┃ ┣ Header.jsx
 ┃ ┣ Header.stories.js
 ┃ ┣ Introduction.mdx
 ┃ ┣ Page.jsx
 ┃ ┣ Page.stories.js
 ┃ ┣ button.css
 ┃ ┣ header.css
 ┃ ┗ page.css
 ┣ tokens
 ┃ ┗ global.json
 ┣ .DS_Store
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ reportWebVitals.js
 ┗ setupTests.js
 ```
