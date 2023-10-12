import { Player as TPlayer } from "../api/player/Player";

export const PLAYER_TITLE_FIELD = "sport";

export const PlayerTitle = (record: TPlayer): string => {
  return record.sport?.toString() || String(record.id);
};
