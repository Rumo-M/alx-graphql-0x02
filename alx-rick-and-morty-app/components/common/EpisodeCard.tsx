
---

### 2. **`components/common/EpisodeCard.tsx`**

This component will display the episode details.

```typescript
// components/common/EpisodeCard.tsx

import React from 'react';
import { Episode } from '../../interfaces';

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div className="episode-card">
      <h3>{episode.name}</h3>
      <p><strong>Episode Code:</strong> {episode.episode}</p>
      <p><strong>Air Date:</strong> {episode.air_date}</p>
    </div>
  );
};

export default EpisodeCard;
