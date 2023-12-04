import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header";
import "./global.css";
import styles from "./app.module.css";
import { Post } from "./components/Post";

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  title?: string;
  type: string;
  content: string;
}

export interface IPost {
  id?: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

function App() {
  const post: IPost[] = [
    {
      id: 1,
      author: {
        name: "douglas",
        avatarUrl: "https://github.com/DouglasB834.png",
        role: "Dev Desempregado",
      },
      content: [
        {
          type: "paragraph",
          title: "chama nenem ",
          content:
            "Fala galeraa 👋 essa frase me lembra muito quando eu estudava com Ricardo que ele quase reprovou em um teste pq nao lembrava o nome de uma habilidade de um digmon kkkkk",
        },
        {
          type: "link",
          content: "Doug.desing/ui/ux",
        },
      ],
      publishedAt: new Date("2023-10-17 09:15:00"),
    },
    {
      id: 2,
      author: {
        name: "cesarrafaeljunior",
        avatarUrl: "https://github.com/cesarrafaeljunior.png",
        role: "Dev Angular",
      },
      content: [
        {
          type: "paragraph",
          title: "React",
          content:
            "Conteudo de estudos para praticar o React junto com diego. ",
        },
        {
          type: "link",
          content: "Gui.desing/dectorcare",
        },
      ],
      publishedAt: new Date("2023-11-14 09:15:00"),
    },
    {
      id: 3,
      author: {
        name: "GuilhermeSchulz",
        avatarUrl: "https://github.com/GuilhermeSchulz.png",
        role: "Dev Vue",
      },
      content: [
        {
          type: "paragraph",
          title: "React",
          content:
            "Conteudo de estudos para praticar o React junto com diego. ",
        },
        {
          type: "link",
          content: "Gui.desing/dectorcare",
        },
      ],
      publishedAt: new Date("2023-11-14 09:15:00"),
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {post.map((post: IPost) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
