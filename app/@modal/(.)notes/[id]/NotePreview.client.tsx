"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import fetchNoteId from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();
  const noteId = +id;
  const { data } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteId(noteId),
  });

  return (
    <Modal>
      <NotePreview note={data} />
    </Modal>
  );
}
