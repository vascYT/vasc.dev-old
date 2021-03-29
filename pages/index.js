import Head from 'next/head';
import ProjectItem from "../components/ProjectItem";
import LinkItem from "../components/LinkItem";
import ItemsTitle from "../components/ItemsTitle";

export default function Home () {
  return (
    <div className="text-white font-sans">
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
      <div className="absolute mt-32 ml-56">
        <h1 className="text-8xl font-bold">I'm vasc</h1>
        <h1 id="typed" className="h-10 text-4xl text-gray-300 mt-3"></h1>

        <ItemsTitle title="Useful Links" />
        <ul className="mt-3 space-y-1">
          <LinkItem href="https://twitter.com/vascyt" name="Twitter"/>
          <LinkItem href="https://youtube.com/vascyt" name="YouTube"/>
          <LinkItem href="https://discord.banany.net" name="Discord Server"/>
          <LinkItem href="https://paypal.me/vascyt" name="PayPal"/>
          <LinkItem href="https://steamcommunity.com/profiles/76561198362939816" name="Steam Profile"/>
          <LinkItem href="mailto:contact@vasc.dev" name="E-Mail"/>
        </ul>

        <ItemsTitle title="My Projects" />
        <ul className="mt-3 space-y-1.5">
          <ProjectItem name="SpeedUHC" href="https://github.com/vascYT/SpeedUHC-Plugin" description="A Minecraft Plugin for the popular SpeedUHC gamemode."/>
          <ProjectItem name="Insaneus" href="https://top.gg/bot/758389658286817340" description="A multifunctional Discord Bot."/>
          <ProjectItem name="CS:GO Tracker" href="https://top.gg/bot/770019524614815745" description="A Discord Bot that tracks the price of CS:GO items."/>
          <ProjectItem name="CS:GO Live" href="https://csgolive.vasc.dev" description="A website that tracks the CS:GO client using the gamestate integration feature."/>
        </ul>
      </div>
    </div>
  )
}