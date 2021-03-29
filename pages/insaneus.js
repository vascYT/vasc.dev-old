import Head from "next/head";
import BackButton from "../components/BackButton";

const Home = () => {
  return (
    <div className="text-white font-sans">
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="icon" type="image/png" href="/assets/banana.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <title>I'm vasc</title>
      </Head>
      <div className="container">
        <BackButton />
        <h1 className="text-4xl font-bold mt-4 mb-2">Insaneus</h1>
        <p>
          is a multifunctional Discord Bot, which makes use of the new <a href="https://discord.com/developers/docs/interactions/slash-commands">Slash Commands</a> feature in Discord.
          The bot gets a lot of features implemented, where it isn"t worth making a own bot for it. If you are interested
          and want to add this bot to your server you can do this by clicking <a href="https://discord.com/oauth2/authorize?client_id=758389658286817340&permissions=8&scope=bot%20applications.commands">this</a> link.
        </p>
      </div>

    </div>
  )
}

export default Home