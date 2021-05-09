import { useLanyard } from "use-lanyard";

/* 
    Thanks to https://github.com/iGalaxyYT/igalaxy.dev/blob/main/components/Lanyard.tsx for the help :)
*/


export default function Lanyard() {
    const { data: activity } = useLanyard("346977366569910274");

    if (activity == undefined || activity.discord_status === "offline") return null;

    // Spotify
    if (activity.listening_to_spotify) {
        return (
            <div className="flex space-x-2">
                <div className="animate-pulse h-full w-1 rounded-full bg-green-400"></div>
                <div>
                    <span className="text-lg font-bold">Listening to Spotify</span>
                    <br />
                    <span className="text-gray-400">{activity.spotify.song}</span>
                    <br />
                    <span className="text-gray-400">{activity.spotify.artist.replace(";", ",")}</span>
                </div>
            </div>
        );
    }
        
    // Playing a game
    if (activity.activities.length != 0) {
        if (activity.activities[0].details) {
            return (
                <div className="flex space-x-2">
                    <div className="animate-pulse h-full w-1 rounded-full bg-green-400"></div>
                    <div>
                        <span className="font-bold">Playing {activity.activities[0].name}</span>
                        <br />
                        <span className="text-gray-400">{activity.activities[0].details}</span>
                        <br />
                        <span className="text-gray-400">{activity.activities[0].state}</span>
                    </div>
                </div>
            );   
        } else {
            return (
                <div className="flex space-x-2">
                    <div className="animate-pulse h-full w-1 rounded-full bg-green-400"></div>
                    <div>
                        <span className="font-bold">Playing {activity.activities[0].name}</span>
                    </div>
                </div>
            );
        }
    }

    return null;
}