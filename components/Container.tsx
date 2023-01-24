import Head from "next/head";
import Header from "./Header";
import style from "@/styles/Container.module.scss";

const Container = function(props:any) {
    return (
      <div className={style.container}>
        <Head>
          <title>Minhyeok.me</title>
        </Head>
        <header>
            <Header/>
        </header>
        <main>
            {props.children}
        </main>
        <footer>
            footer
        </footer>
      </div>
    );
  };
  
  export default Container;