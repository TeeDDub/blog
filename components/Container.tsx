import Head from "next/head";
import Header from "./Header";
import style from "@/styles/Container.module.scss";

const Container = function(props:any) {
    return (
      <div className={style.container + ` w-full`}>
        <Head>
          <title>Minhyeok.me</title>
        </Head>
        <header className={`w-full flex justify-center items-center`}>
            <Header/>
        </header>
        <main className={`w-full mx-2 md:w-10/12 md:mx-auto`}>
            {props.children}
        </main>
        <footer className={`w-full mx-2`}>
            footer
        </footer>
      </div>
    );
  };
  
  export default Container;