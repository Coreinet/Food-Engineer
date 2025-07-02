'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import styles from '@/styles/auth.module.scss'

export default function AuthPage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const validatePhone = (value: string) => /^09\d{9}$/.test(value)

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError('شماره موبایل معتبر نیست. باید با 09 شروع شده و 11 رقم باشد.')
      return
    }

    try {
      const res = await fetch('/api.json') // public/api.json
      if (!res.ok) throw new Error('Fetch failed')
      const data = await res.json()
      const user = data.results[0]

      localStorage.setItem('user', JSON.stringify(user))
      router.push('/dashboard')
    } catch {
      setError('خطا در دریافت اطلاعات کاربر.')
    }
  }

  return (
    <div className={styles.container}>
      <h1>ورود</h1>
      <Input
        label="شماره موبایل"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="مثلاً 09123456789"
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button text="ورود" onClick={handleLogin} />
    </div>
  )
}
