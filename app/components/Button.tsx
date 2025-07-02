// components/Button.tsx
import styles from '@/styles/button.module.scss'

type Props = {
  text: string
  onClick: () => void
}

export default function Button({ text, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}
