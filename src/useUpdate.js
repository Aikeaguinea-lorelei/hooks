import {useState,useEffect}from "react"

const useUpdate=(fn,dep)=>{  // 自定义的函数名必须是useXXX
    const [count,setCount]=useState(0)  // count最初值是0
    // 模拟update
    useEffect(()=>{
      setCount(x=>x+1)
    },[dep])
    // 第二次的时候再计数
    useEffect(()=>{
      if (count>1){
        fn()
      }
    },[count,fn])  // 监听每次count的变化
  }
  
export default useUpdate  