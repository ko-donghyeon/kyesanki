function insertNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.innerHTML = `
      <object data="navbar.html" width="100%" height="100%"
      style="max-height: 100px;" ></object>
    `;
  }
  
  window.onload = insertNavbar;
  


  /* 이 코드는 `insertNavbar`라는 함수를 정의하고, 
  `window.onload` 이벤트가 발생했을 때 `insertNavbar` 함수를 호출하는 것을 나타냅니다.

`insertNavbar` 함수는 다음과 같은 일을 수행합니다:

1. `navbar-container`라는 id를 가진 요소를 `navbarContainer` 변수에 할당합니다.
2. `navbarContainer.innerHTML`을 사용하여 `navbarContainer` 요소의 내용을 """"""""""변경""""""""""합니다.
3. 변경된 내용으로는 `<object>` 요소를 포함하고 있으며, `navbar.html` 파일을 로드하여 
    `navbarContainer` 요소 안에 삽입합니다. `<object>` 요소는 외부 문서를 포함하고 표시하는 데 사용됩니다.
4. `<object>` 요소에는 `width`, `height`, `style` 속성이 지정되어 있습니다. 
     이를 통해 요소의 크기와 스타일을 제어할 수 있습니다.

즉, 위의 코드는 `window.onload` 이벤트가 발생했을 때 `navbar-container` 요소에 
`navbar.html` 파일을 포함한 `<object>` 요소를 삽입하여 네비게이션 바를 표시하는 역할을 합니다.*/