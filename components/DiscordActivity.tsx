import { useLanyard } from "use-lanyard";

/* 
    Thanks to https://github.com/iGalaxyYT/igalaxy.dev/blob/main/components/Lanyard.tsx for the help :)
*/

export default function DiscordActivity() {
  const { data: activity } = useLanyard("346977366569910274");

  if (
    !activity ||
    activity.discord_status === "offline" ||
    activity.activities.length <= 0
  )
    return <></>;

  return (
    <div className="flex flex-row items-center space-x-2 mt-3">
      <div className="animate-pulse h-2 w-2 rounded-full bg-green-300"></div>
      <span className="text-green-300 text-sm">
        {activity.listening_to_spotify ? (
          <span>
            Listening to{" "}
            <a
              href={`https://open.spotify.com/track/${activity.spotify?.track_id}`}
              target="_blank"
              className="hover:underline"
            >
              "{activity.spotify?.song}"
            </a>
          </span>
        ) : (
          `Playing ${activity.activities[0].name}`
        )}
      </span>
    </div>
  );
}
