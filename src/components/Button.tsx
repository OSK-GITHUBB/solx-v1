type Props = {
    text?: string;
    onPress: () => void;
}

const Button = (props: Props) => {
    const { onPress, text } = props
    return <button className="button" onClick={onPress}>{text}</button>
}

export default Button;