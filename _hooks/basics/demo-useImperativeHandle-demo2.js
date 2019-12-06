import React,{useState,useEffect,createRef,useRef,forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom'


function Child(props,parentRef){
  // 子组件内部自己创建 ref
  let focusRef = useRef();
  let inputRef = useRef();

  // 这个函数会返回一个对象
  // 该对象会作为父组件 current 属性的值
  // 通过这种方式，父组件可以使用操作子组件中的多个 ref
  useImperativeHandle(parentRef,() => ({
      focusRef,
      inputRef,
      name: '计数器',
      focus(){
        focusRef.current.focus();
      },
      changeText(text){
        inputRef.current.value = text;
      },
  }))

  return (
    <>
      <input ref={focusRef} placeholder="主角光环" />
      <input ref={inputRef} placeholder="替补" />
    </>
  )

}

Child = forwardRef(Child);

function Parent(){
  // {current:''}
  const parentRef = useRef();

  function getFocus(){
    parentRef.current.focus();

    // 因为子组件中没有定义这个属性，实现了保护，所以这里的代码无效
    // parentRef.current.addNumber(666);


    parentRef.current.changeText('<script>alert(1)</script>');
    console.log(parentRef.current.name);
  }

  return (
    <>
      <Child ref={parentRef}/>
      <button onClick={getFocus}>获得焦点</button>
    </>
  )
}


ReactDOM.render(<Parent />, document.getElementById("root"))

