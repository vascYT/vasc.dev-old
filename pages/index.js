import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <body>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="icon" type="image/png" href="/assets/banana.png"/>
        <link rel="stylesheet" href="/assets/style.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <title>I'm vasc</title>
      </Head>

      <div class="container">
        <h1 class="title">I'm vasc</h1>
        <h1 class="subtitle">A hobby Developer.</h1>

        <p class="mini-title">Useful Links</p>
        <ul class="social-list">
          <li class="social-item"><a href="https://twitter.com/vascyt" target="_blank">Twitter</a></li>
          <li class="social-item"><a href="https://youtube.com/vascyt" target="_blank">YouTube</a></li>
          <li class="social-item"><a href="https://discord.banany.net" target="_blank">Discord Server</a></li>
          <li class="social-item"><a href="https://paypal.me/vascyt" target="_blank">PayPal</a></li>
          <li class="social-item"><a href="https://steamcommunity.com/profiles/76561198362939816" target="_blank">Steam Profile</a></li>
          <li class="social-item"><a href="mailto:contact@vasc.dev">E-Mail</a></li>
        </ul>

        <p class="mini-title">My Projects</p>
        <ul class="project-list">
          <li class="project-item">
            <a href="https://vasc.dev/s" target="_blank">URL Shortener</a>
            <br/>
            Make your long URLs smaller.
          </li>
          
          <li class="project-item">
            <a href="https://github.com/vascYT/SpeedUHC-Plugin" target="_blank">SpeedUHC</a>
            <br/>
            A Minecraft Plugin for the gamemode SpeedUHC.
          </li>
          
          <li class="project-item">
            <a href="https://top.gg/bot/758389658286817340" target="_blank">Insaneus</a>
            <br/>
            A multifunctional Discord Bot.
          </li>

          <li class="project-item">
            <a href="https://top.gg/bot/770019524614815745" target="_blank">CS:GO Tracker</a>
            <br/>
            A Discord Bot that tracks the price for CS:GO items.
          </li>

          <li class="project-item">
            <a href="https://csgolive.vasc.dev" target="_blank">CS:GO Live</a>
            <br/>
            A Website that tracks the CS:GO Client using the gamestate integration feature.
          </li>
        </ul>
      </div>

    </body>
  )
}

export default Home