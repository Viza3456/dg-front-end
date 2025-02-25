"use client";

import Header from "./components/Home/header";
import Footer from "./components/Home/footer";
import Student from "./components/Home/Sections/student";
import Tool from "./components/Home/Sections/tool";
import Feature from "./components/Home/Sections/feature";
import International from "./components/Home/Sections/international";
import Count from "./components/Home/Sections/count";
import Comment from "./components/Home/Sections/comment";
import Join from "./components/Home/Sections/join";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <main>
        <Student></Student>
        <Tool></Tool>
        <Feature></Feature>
        <International></International>
        <Count></Count>
        <Comment></Comment>
        <Join></Join>
      </main >
      <Footer></Footer>
    </div>
  );
}