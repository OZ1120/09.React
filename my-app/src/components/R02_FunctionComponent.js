// :: 함수형은 컴포넌트 안씀
import React, {useState} from "react"; // imr -> 자동완성


const ClickCount = () => {

  const [count,setCount] = useState(0);
   /* 변수 두개 선언
    useState 함수 호출하면 배열 반환되고
    배열 0은 count, 1은 setCount
   */

  return(
    <div>
      <h3>{count}</h3>
      <button onClick={() => { setCount(count+1)}}>클릭시 1 증가</button>
    </div>
  )
}

// 함수형 컴포넌트
// 1. 함수 생성하기
// 2. return 구문에 출력하고자 하는 html 코드 작성
// 3. 만든 함수를 export default 지정하기


const FunctionEx = () => {

  return(
    /* 리액트 컴포넌트에 class 추가시 className 이라고 작성! */
    <>
      <h2 className="red">함수형 컴포넌트 입니다!</h2>

      <hr/>

      <ClickCount/> {/* 태그형식으로 적으면 여기 랜더링 */}
    </>
  );
}

export default FunctionEx;