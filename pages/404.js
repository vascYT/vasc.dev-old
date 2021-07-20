import Head from "next/head";

export default function page() {
  return (
    <div className="flex h-screen text-white font-sans">
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <div className="flex flex-row items-center p-5pt align-center space-x-5">
        <h1 className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          404
        </h1>
        <div className="h-32 w-1 bg-white rounded-full"></div>
        <h3 className="text-2xl">Not the 🍌 you are looking for.</h3>
      </div>
    </div>
  );
}
