import Head from "next/head";

export default function SocialGallery(props) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="h-full space-x-4 flex-auto text-2xl mt-4">
        <a
          className="fab fa-github"
          href="https://github.com/vascyt"
          target="_blank"
        />
        <a
          className="fab fa-twitter"
          href="https://twitter.com/vascyt"
          target="_blank"
        />
        <a className="fas fa-envelope" href="mailto:nico@vasc.dev" />
      </div>
    </>
  );
}
