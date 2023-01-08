const Button = (props) => {
    const { onPress, text } = props
    return <button className="button" onClick={onPress}>{text}</button>
}

export default Button;