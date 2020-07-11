import React from "react";

import { styles } from "./EmptyState.styles";

export const EmptyState = React.memo(() => {
  return (
    <div className="EmptyState">
      <style jsx>{styles}</style>

      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAABg0lEQVR4nO3bQUrDUBRG4VNxKO5B0IEL0YmuyLohnegeiitQcRNiwbFaB7XYgtAmf5OXZ88HGRSkXk/T3AwiSJIkSVKtDoBHYFbJ8QIcdlKihRFwS/koTY/7n9mLu2Y+0BtwXHiWTRwBr8xnHheehXPgA/gELgrP0sQZv3NflhriBJgy/ySvSg0RGDOf/R047fuXLy+NOwZyLWloBNxQYKksL41BbbMWlk+E3pbKYmlMqWNprNPrUql1aazTy1KpfWms0/lSeaL8zW9fx/OmUZpcNGcNfvY/2KjNfldvXLFGJ8peV1PsCgOGDBgyYMiAoSEEnND+fm1SYN4VQwiYqOredPGp/3eN/s7az8DiDBgyYMiAIQOGDBgyYMiAIQOGDBgyYMiAIQOGDBgyYMiAIQOGDBgyYMiAIQOGDBgyYMiAIQOGDBgyYMiAIQOGDBgyYMiAoW0FfGD1cdvaXre2rYBfrD7VWdvrXviI7x+8BoYMGGrz35q78DXemGegJEmSJFXnGyrMAyMMppPgAAAAAElFTkSuQmCC" />
      <h1>Write something...</h1>
    </div>
  );
});
