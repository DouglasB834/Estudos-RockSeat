import { ChangeEvent, useState } from "react";
import { IPost } from "../App";
import { Avatar } from "./Avatar";
import { CommentList } from "./Comments";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Post = ({ post }: IPost) => {
  const [coments, setComents] = useState(["oiii"]);
  const [newComentText, setNewComentText] = useState("");

  const deleteComent = (commentDelete: string) => {
    console.log("deletar comentario", commentDelete);
    const ComentesDelete = coments.filter(
      (comment) => comment !== commentDelete
    );
    setComents(ComentesDelete);
  };

  const timeTitle = format(post.publishedAt, "d 'de' LLLL  'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const timeDistanceToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateComments = (event: React.FormEvent) => {
    event.preventDefault();
    if (newComentText.trim() === "") {
      return alert("preencha o campo comentario");
    }
    setComents([...coments, newComentText]);
    setNewComentText("");
  };

  const handleNewCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("");
    setNewComentText(event.target.value);
  };

  const handleNewCommentInvalid = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("event.currentTarget");
    event.currentTarget.setCustomValidity("preenche essa merda ai logo ");
  };

  const isTextAreaComentEmpty = !newComentText.length;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />

          <div className={styles.infoAuth}>
            <strong>{post.author.name}</strong>
            <p>{post.author.role} </p>
          </div>
        </div>
        <time title={timeTitle} dateTime={post.publishedAt.toISOString()}>
          {timeDistanceToNow}
        </time>
      </header>
      {/* conteudo do post  */}

      <div className={styles.content}>
        {post.content.map((line) => (
          <div key={line.content}>
            {line.title}
            {line.type === "paragraph" ? (
              <p>{line.content}</p>
            ) : (
              <p>
                <a href="#">{line.content}</a>
              </p>
            )}
          </div>
        ))}
      </div>
      {/* formulario post  */}

      <form onSubmit={handleCreateComments} className={styles.commentForm}>
        <h4>Deixe seu Feedback </h4>
        <textarea
          onChange={handleNewCommentChange}
          name="Comentario"
          value={newComentText}
          placeholder="Comentarios"
          required
          onInvalid={handleNewCommentInvalid}
        ></textarea>

        <button disabled={isTextAreaComentEmpty} type="submit">
          Comentar
        </button>
      </form>
      {/* Comentarios   */}
      {coments.map((coment) => (
        <CommentList
          key={coment}
          content={coment}
          onDeleteComent={deleteComent}
        />
      ))}
    </article>
  );
};
