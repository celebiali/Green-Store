import ButtonDto from "../../models/components/ButtonDto";

const Button = (props: ButtonDto) => {
  return <button type={props.type}>{props.title}</button>;
};

export default Button;
