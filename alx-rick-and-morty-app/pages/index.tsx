import { useQuery } from "@apollo/client/react";
import { GET_EPISODES } from "@/graphql/queries";
import EpisodeCard from "@/components/common/EpisodeCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data, refetch } = useQuery(GET_EPISODES, {
    variables: { page },
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (loading) return <h1 className="text-center mt-10">Loading...</h1>;
  if (error) return <h1 className="text-center mt-10 text-red-500">Error: {error.message}</h1>;

  const results = (data as any)?.episodes?.results || [];
  const info = (data as any)?.episodes?.info;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#A3D5E0] to-[#F4F4F4] text-gray-800">
      <header className="bg-[#4CA1AF] text-white py-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">Rick and Morty Episodes</h1>
      </header>
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((episode: any) => (
            <EpisodeCard
              key={episode.id}
              id={episode.id}
              name={episode.name}
              air_date={episode.air_date}
              episode={episode.episode}
            />
          ))}
        </div>
        {info && (
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)}
              disabled={page <= 1}
              className="bg-gray-300 disabled:opacity-50 px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(prev => prev < info.pages ? prev + 1 : prev)}
              disabled={page >= info.pages}
              className="bg-gray-300 disabled:opacity-50 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
}