import './button.scss'
import cn from 'classnames'

export const Button = ({ children, size, ...props }) => {
  return (
    <button
      className={cn('button', {
        ['s']: size == 's',
        ['m']: size == 'm',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
