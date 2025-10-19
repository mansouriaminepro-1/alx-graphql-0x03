// interfaces/index.ts
interface InfoProps {
  pages: number;
  next: number | null;   // ← API returns null for first/last page
  prev: number | null;   // ← so use null, not just number
  count: number;
}

export interface EpisodeProps {
  id: string;            // ← MUST be string (API returns "1", not 1)
  name: string;
  air_date: string;
  episode: string;
  // ❌ Do NOT include `info` here — it's not part of an episode!
}

// ✅ Correct card props
export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name' | 'air_date' | 'episode'>;