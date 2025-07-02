'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/dashboard.module.scss'
import Image from 'next/image'

type User = {
  name: {
    first: string
    last: string
  }
  picture: {
    medium: string
  }
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) {
      router.push('/auth')
    } else {
      setUser(JSON.parse(storedUser))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/auth')
  }

  if (!user) return null

  return (
    <div className={styles.container}>
      <h1>Welcome to the Dashboard 👋</h1>
      <p>Hello, {user.name.first} {user.name.last}</p>
      <Image
        src={user.picture.medium}
        alt="Profile Picture"
        width={100}
        height={100}
        className={styles.image}
      />
      <button className={styles.logoutButton} onClick={handleLogout}>
        خروج
      </button>
    </div>
  )
}
