import "./Button.css";

type ButtonProps = {
  caption: string,
  link: string
};

function Button({
  caption: caption,
  link: link
}: ButtonProps) {
  return (
    <a href={link} className="btn">
      {caption}
    </a>
  );
}

export default Button;
