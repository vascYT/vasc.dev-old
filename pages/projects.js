import Head from "next/head";
import PageContainer from "../components/PageContainer";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
    return(
        <>
            <Head>
                <title>Projects @ vasc</title>
            </Head>
            <PageContainer>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Projects</h1>
                <ul className="mt-5 space-y-1.5">
                    <ProjectItem name="PresenceDB" href="https://presencedb.vercel.app" description="A service that tracks the playtime of your Discord Activities."/>
                    <ProjectItem name="SpeedUHC" href="https://github.com/vascYT/SpeedUHC-Plugin" description="A Minecraft Plugin for the popular SpeedUHC gamemode."/>
                    <ProjectItem name="Insaneus" href="https://top.gg/bot/758389658286817340" description="A multifunctional Discord Bot."/>
                    <ProjectItem name="CS:GO Tracker" href="https://top.gg/bot/770019524614815745" description="A Discord Bot that tracks the price of CS:GO items."/>
                    <ProjectItem name="CS:GO Live" href="https://csgolive.vasc.dev" description="A website that tracks the CS:GO client using the gamestate integration feature."/>
                </ul>
            </PageContainer>
        </>
    )
}