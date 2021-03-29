import Head from 'next/head';

export default function page() {
    return (
        <div className="flex h-screen text-white font-sans">
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="icon" type="image/png" href="/assets/banana.png"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
                <title>404 - Not Found</title>
            </Head>
            <div className="m-auto text-center">
                <h1 className="text-8xl font-bold">404</h1>
                <h3 className="text-xl">Not the 🍌 you are looking for.</h3>
            </div>
        </div>
    )
}