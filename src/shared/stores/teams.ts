import { create } from 'zustand'
import { F1_TEAMS } from '../utils/f1-teams';

type HoverState = {
  hoveredTeam: string | null
  setHoveredTeam: (team: string | null) => void
}

export const useTeamStore = create<HoverState>((set) => ({
  hoveredTeam: F1_TEAMS[0].slug,
  setHoveredTeam: (team) => set({ hoveredTeam: team }),
}))
