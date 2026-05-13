import "./Card.css";

import type { IconType } from "react-icons";

type CardProps = {
  icon: IconType;
  title: string;
  desc?: string;
};

function Card({
  icon: Icon,
  title: title,
  desc: desc
}: CardProps) {
  return (
    <section className="card">
      <Icon size={24} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </section>
  );
}

export default Card;
