import styles from "./Coments.module.css";
import { Avatar } from "./Avatar";
import { Trash, Heart } from "phosphor-react";
import { useState } from "react";

interface ICommentProps {
  content: string;
  onDeleteComent: (comment: string) => void;
}

export const CommentList = ({ content, onDeleteComent }: ICommentProps) => {
  const [likeCount, setLikeCount] = useState(0);
  const deleteComent = (contentDelete: string) => {
    onDeleteComent(contentDelete);
  };

  const handleLike = () => {
    setLikeCount((prev) => prev + 2); //acessa o valor mais recente
  };

  return (
    <div className={styles.comments}>
      <Avatar
        src="https://github.com/DouglasB834.png"
        isBorder={true}
        alt={"image user "}
      />
      <div className={styles.commentsBox}>
        <header>
          <div className={styles.authorTime}>
            <div className={styles.authorTimeInfor}>
              <span>Douglas</span>
              <time>11 de Maio às 08:13h</time>
            </div>

            <button
              title="Deletar comentário"
              onClick={() => deleteComent(content)}
            >
              <Trash />
            </button>
          </div>

          <p className={styles.content}>{content}</p>
        </header>

        <footer>
          <button title="Comentario" onClick={handleLike}>
            Curtir
            <Heart color="red" size={20} />
          </button>
          <span> {likeCount}</span>
        </footer>
      </div>
    </div>
  );
};
