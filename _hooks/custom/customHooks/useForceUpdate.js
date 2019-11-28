import { useCallback, useState } from "react"

export default function useForceUpdate() {
  const [, setValue] = useState(0)
  return useCallback(() => {

    // 递增state值，强制React进行重新渲染
    setValue(val => (val + 1) % (Number.MAX_SAFE_INTEGER - 1))
  }, [])
}
