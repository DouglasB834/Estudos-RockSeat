import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  isBorder?: boolean;
}

export const Avatar = ({ isBorder = false, ...props }: AvatarProps) => {
  return (
    <img
      className={isBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};
