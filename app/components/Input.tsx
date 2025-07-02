// components/Input.tsx
import styles from '@/styles/input.module.scss'

type Props = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function Input({ label, value, onChange, placeholder }: Props) {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}
