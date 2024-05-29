import React from 'react'

// App(부모)
// ㄴ ChildComponent(자식)
//  ㄴ GrandChildComponenet(후손)

// ::후손 컴포넌트는 자식 컴포넌트보다 위에 써야함!!

// 후손 컴포넌트
const GrandChildComponenet = (props) => {

  // props == ChildComponent에서 전달 받은 값
  const {name, age} = props;

  return(
    <h3>이름 : {name}/ 나이 : {age}</h3>
  )

}



// 자식 컴포넌트
const ChildComponent = (props) => {

  // props == App에서 전달 받은 값

  return(
    <>
      {/* App에서 전달 받은 값을 GrandChildComponenet에 다시 전달
        == "Props Drilling"
      */}
      <GrandChildComponenet 
        name = {props.name} 
        age  = {props.name === '김영희' ? 20 : 25} // 김영희 이면 20, 김영희 아니면 25
        />
        {/* 리액트에서는 ==(동등비교연산)을 권장하지 않음(컴파일 시 에러가 난다)
            ===(동일비교연산, 타입까지 다 같은 것)을 권장한다
            리액트에서는 타입스크립트도 사용한다. (자료형의 애매함을 없애줌)
            */}
    </>
  )

}

export default ChildComponent;
