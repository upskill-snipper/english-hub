import { getServerBoard } from "@/lib/board/get-server-board";
import { RevisionNotesView } from "./revision-notes-view";

export default async function RevisionNotesHub() {
  const board = await getServerBoard();
  return <RevisionNotesView board={board} />;
}
