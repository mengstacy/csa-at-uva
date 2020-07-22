import { FunctionComponent } from "react";
import Head from "next/head";

import Navbar from "./Navbar";

type MainLayoutProps = {};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div className='layout'>
        <Navbar></Navbar>
        <div className='content'>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
