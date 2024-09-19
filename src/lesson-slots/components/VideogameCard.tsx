import { FC } from "react";
import image from "../image.png";

interface Props {
  children?: React.ReactNode;
  header?: ({ title }: { title: string }) => React.ReactNode;
  title: string;
}

export const VideogameCard: FC<Props> = ({ children, header, title }) => {
  return (
    <article style={{ border: "1px solid red" }}>
      {header ? header({ title }) : <h2>{title}</h2>}
      <img width="200" src={image} alt="" />
      {children ? (
        children
      ) : (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          numquam non dolores
        </p>
      )}
    </article>
  );
};
