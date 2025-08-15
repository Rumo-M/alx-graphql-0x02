// interfaces/index.ts

// Interface for a single character
export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

// Interface for a single episode
export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}

// GraphQL query response structure for characters
export interface CharacterData {
  characters: {
    results: Character[];
  };
}

// GraphQL query response structure for episodes
export interface EpisodeData {
  episodes: {
    results: Episode[];
  };
}
