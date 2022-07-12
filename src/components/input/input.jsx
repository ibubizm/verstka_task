import './input.scss'

export const Input = ({ placeholder, ...props }) => {
  return (
    <input className="input" type="text" placeholder={placeholder} {...props} />
  )
}
