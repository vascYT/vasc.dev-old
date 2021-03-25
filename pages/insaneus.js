import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="icon" type="image/png" href="/assets/banana.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <title>I'm vasc</title>
      </Head>
      <div className="container">
        <Link href="/" shallow={true}><a>...</a></Link>
        <h1 className="title" style={{fontSize: '30px', marginTop: "15px"}}>Insaneus</h1>
        <p>
          is a multifunctional Discord Bot, which makes use of the new <Link href="https://discord.com/developers/docs/interactions/slash-commands"><a style={{fontSize:"16px"}}>Slash Commands</a></Link> feature in Discord.
          The bot gets a lot of features implemented, where it isn't worth making a own bot for it. If you are interested
          and want to add this bot to your server you can do this by clicking <Link href="https://discord.com/oauth2/authorize?client_id=758389658286817340&permissions=8&scope=bot%20applications.commands"><a style={{fontSize:"16px"}}>this</a></Link> link.
        </p>
      </div>

    </div>
  )
}

export default Home