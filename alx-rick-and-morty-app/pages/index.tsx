// pages/index.tsx

import { useQuery } from '@apollo/client';
import { GET_CHARACTERS, GET_EPISODES } from '../graphql/queries';
import { CharacterData, EpisodeData } from '../interfaces';
import EpisodeCard from '../components/common/EpisodeCard';

const HomePage = () => {
  const { loading: characterLoading, data: characterData } = useQuery<CharacterData>(GET_CHARACTERS, {
    variables: { page: 1 }, // Pass variables to query for the first page
  });

  const { loading: episodeLoading, data: episodeData } = useQuery<EpisodeData>(GET_EPISODES, {
    variables: { page: 1 }, // Pass variables to query for the first page of episodes
  });

  if (characterLoading || episodeLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Characters</h1>
      <div>
        {characterData?.characters.results.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Type:</strong> {character.type}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
          </div>
        ))}
      </div>

      <h1>Episodes</h1>
      <div>
        {episodeData?.episodes.results.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
