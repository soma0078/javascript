// 함수: 새로운 문단을 생성해서 HTML 본문 끝에 붙입니다.


function createParagraph(){
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}

/*
  1. 페이지 내의 모든 버튼에 대한 참조를 배열 형태로 가져옵니다.
  2. 버튼 각각을 순회하면서 클릭 이벤트 수신기를 추가합니다.

  아무 버튼이나 클릭하면 createParagraph() 함수가 실행됩니다.
*/


const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', createParagraph);
}