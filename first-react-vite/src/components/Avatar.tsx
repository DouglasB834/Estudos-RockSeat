import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  isBorder?: boolean;
}

export const Avatar = ({ src, isBorder = false }: AvatarProps) => {
  return (
    <img
      className={isBorder ? styles.avatarWithBorder : styles.avatar}
      src={src || ""}
      alt=""
    />
  );
};
