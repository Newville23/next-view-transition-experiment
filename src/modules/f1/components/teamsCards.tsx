import { F1_TEAMS } from "@/shared/utils/f1-teams";
import Link from "next/link";

export default function TeamsCards() {
  return (
    <div className="flex">
      {F1_TEAMS.map((team) => (
        <Link href={`f1/team/${team.slug}`} key={team.name}>
          <div
            className={`
            font-orbitron tracking-wider
            flex items-center bg-gray-900 text-white 
            px-10 py-3 rounded-lg mr-4 text-sm 
            border border-gray-800 transition-all duration-300 ease-in-out 
            shadow-sm hover:shadow-xl  hover:scale-150
            hover:border-gray-400 
            `}
          >
            <span
              className="h-3.5 w-1 block mr-3"
              style={{ backgroundColor: team.color }}
            />
            <span>{team.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
