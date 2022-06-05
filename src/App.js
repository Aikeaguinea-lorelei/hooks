import React,{useState,useEffect}from "react"
import useUpdate from "./useUpdate"

const App=props=>{
  const[n,setN]=useState(0)
  const onClick=()=>{
    setN(n+1)
  }
  useUpdate(()=>{
    console.log('变了')
  },n)  // 第二个参数为n: 监听n的变化  

  const [childVisible,setChildVisible]=useState(true)  // 默认可见 可见就显示Child标签
  const hide=()=>{
    setChildVisible(false)
  }
  const show=()=>{
    setChildVisible(true)
  }

  return (
    <>
      <div>
        {n}
        <button onClick={onClick}>+1</button>
      </div>
      <div>
        {childVisible ? <button onClick={hide}>hide</button> : <button onClick={show}>show</button>}
        {childVisible ? <Child/> : null}
      </div>
    </>
  )
}

// 设置一个外部标签,并在页面设置显示和隐藏
const Child=(props)=>{
  // useEffect(()=>{
  //   console.log('变化了')
  //   return()=>{
  //     console.log('Child要销毁了')
  //   }
  // })
  return (
    <div>Child</div>
  )
}

export default App;
