import styles from '../styles/components/Tooltip.module.css';

interface TooltipProps {
  content?: React.ComponentType;
  children?: React.ReactNode;
}

export function Tooltip({ content: Content, children }: TooltipProps) {
  return (
    <div className={styles.tooltipContainer}>
      <span className={styles.tooltipContent}>
      <Content/>
      </span>
      {children}
    </div>
  )
} 