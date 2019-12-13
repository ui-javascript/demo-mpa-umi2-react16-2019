// function Counter() {
//   const [count, setCount, countRef] = useRefState(0)
//   const handleIncr = useCallback(() => {
//     setCount(countRef.current + 1)
//   }, [])
//
//   useEffect(() => {
//     return () => {
//       // 在组件卸载时保存当前的count
//       saveCount(countRef.current)
//     }
//   }, [])
//
//   return (<div>{count}: <ComplexButton onClick={handleIncr}>increment</ComplexButton></div>)
// }
//
