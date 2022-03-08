import { useState, useCallback, Dispatch, SetStateAction } from 'react'

export default function useStorage(
  key,
  // 默认值
  defaultValue,
  // 是否在窗口关闭后保持数据
  keepOnWindowClosed = true,
) {
  const storage = keepOnWindowClosed ? localStorage : sessionStorage

  // 尝试从Storage恢复值
  const getStorageValue = () => {
    try {
      const storageValue = storage.getItem(key)
      if (storageValue != null) {
        return JSON.parse(storageValue)
      } else if (defaultValue) {
        // 设置默认值
        const value = typeof defaultValue === 'function' ? defaultValue() : defaultValue
        storage.setItem(key, JSON.stringify(value))
        return value
      }
    } catch (err) {
      console.warn(`useStorage 无法获取${key}: `, err)
    }

    return undefined
  }

  const [value, setValue] = useState(getStorageValue)

  // 更新组件状态并保存到Storage
  const save = useCallback(value => {
    setValue(prev => {
      const finalValue = typeof value === 'function' ? value(prev) : value
      storage.setItem(key, JSON.stringify(finalValue))
      return finalValue
    })
  }, [])

  // 移除状态
  const clear = useCallback(() => {
    storage.removeItem(key)
    setValue(undefined)
  }, [])

  return [value, save, clear]
}
