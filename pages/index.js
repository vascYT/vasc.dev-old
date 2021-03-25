import Head from 'next/head';
import ProjectItem from "../elements/projectItem";

export default function Home () {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="icon" type="image/png" href="/assets/banana.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>
        <script src="/assets/main.js"/>
        <script src="/assets/typed.min.js"/>
        <title>I'm vasc</title>
      </Head>
      <div className="container">
        <h1 className="title">I'm vasc</h1>
        <h1 className="subtitle"></h1>

        <p className="mini-title">Useful Links</p>
        <ul className="social-list">
          <li className="social-item"><a href="https://twitter.com/vascyt" target="_blank">Twitter</a></li>
          <li className="social-item"><a href="https://youtube.com/vascyt" target="_blank">YouTube</a></li>
          <li className="social-item"><a href="https://discord.banany.net" target="_blank">Discord Server</a></li>
          <li className="social-item"><a href="https://paypal.me/vascyt" target="_blank">PayPal</a></li>
          <li className="social-item"><a href="https://steamcommunity.com/profiles/76561198362939816" target="_blank">Steam Profile</a></li>
          <li className="social-item"><a href="mailto:contact@vasc.dev">E-Mail</a></li>
        </ul>

        <p className="mini-title">My Projects</p>
        <ul className="project-list">
          <ProjectItem name="SpeedUHC" url="https://github.com/vascYT/SpeedUHC-Plugin" description="A Minecraft Plugin for the popular SpeedUHC gamemode."/>
          <ProjectItem name="Insaneus" url="/insaneus" description="A multifunctional Discord Bot."/>
          <ProjectItem name="CS:GO Tracker" url="https://top.gg/bot/770019524614815745" description="A Discord Bot that tracks the price of CS:GO items."/>
          <ProjectItem name="CS:GO Live" url="https://csgolive.vasc.dev" description="A website that tracks the CS:GO client using the gamestate integration feature."/>
        </ul>
      </div>
    </div>
  )
}