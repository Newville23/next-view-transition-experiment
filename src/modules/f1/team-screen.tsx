"use client";

import Container from "@/shared/components/container";
import { F1Team } from "@/shared/utils/f1-teams";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from 'react';

export default function TeamScreen({ team }: { team: F1Team }) {
  return (
    <ViewTransition name="team-details">
    <div className="w-full absolute top-0 bottom-0 z-10" style={{ viewTransitionName: 'team-details' }}>
      <Container>
        <Link
          href="/f1"
          className="my-6 text-white hover:underline flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Teams
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <ViewTransition name={`title-${team.id}`}>
              <h1
                className="text-4xl font-bold mb-2 uppercase tracking-wider"
                style={{ color: team.color }}
              >
                {team.name}
              </h1>
            </ViewTransition>

            <div
              className="bg-black p-6 border-l-4"
              style={{ borderLeftColor: team.color }}
            >
              <div className="grid grid-cols-2 gap-4 mb-6 text-gray-400">
                <div>
                  <h3 className="text-xs uppercase tracking-widest">Founded</h3>
                  <p className="text-xl font-bold">{team.founded}</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest ">
                    Championships
                  </h3>
                  <p className="text-xl font-bold">{team.championships}</p>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4 uppercase tracking-wider">
                Team Profile
              </h2>
              <p className="mb-4 text-gray-300">{team.description}</p>

              <div className="flex items-center mt-6">
                <div className="flex">
                  <div
                    className="w-8 h-8 rounded-full mr-2"
                    style={{ backgroundColor: team.color }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: team.secondaryColor }}
                  ></div>
                </div>
                <span className="ml-3 text-sm text-gray-400">Team Drivers</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </ViewTransition>
  );
}
