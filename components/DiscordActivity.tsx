import { useLanyard } from "use-lanyard";

/* 
    Thanks to https://github.com/iGalaxyYT/igalaxy.dev/blob/main/components/Lanyard.tsx for the help :)
*/

export default function DiscordActivity() {
  const { data: activity } = useLanyard("346977366569910274");

  if (
    activity == undefined ||
    activity.activities.length == 0 ||
    activity.discord_status === "offline"
  )
    return <></>;

  const spotify: any = activity.spotify || undefined;

  return (
    <div className="flex flex-row items-center space-x-2 mt-3">
      <div className="animate-pulse h-[0.40rem] w-[0.40rem] rounded-full bg-green-300"></div>
      <span className="text-green-300 text-sm">
        {activity.listening_to_spotify ? (
          <a
            href={`https://open.spotify.com/track/${spotify.track_id}`}
            target="_blank"
          >
            Listening to Spotify
          </a>
        ) : (
          `Playing ${activity.activities[0].name}`
        )}
      </span>
    </div>
  );
}
