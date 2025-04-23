import { notFound } from 'next/navigation';
import { F1_TEAMS } from '@/shared/utils/f1-teams';
import TeamScreen from '@/modules/f1/team-screen';

interface TeamPageProps {
  params: Promise<{
    team: string;
  }>;
}

export default async function TeamPage({ params }: TeamPageProps) {
  const {team} = await params;
  const teamData = F1_TEAMS.find((t) => t.slug === team);

  if (!teamData) {
    notFound();
  }

  return (<TeamScreen team={teamData}/>);
} 