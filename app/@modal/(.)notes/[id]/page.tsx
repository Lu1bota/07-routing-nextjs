import Modal from "@/components/NoteModal/NoteModal";
import NotePreview from "@/components/NotePreview/NotePreview";
import fetchNoteId from "@/lib/api";

interface NoteModalProps {
  params: Promise<{ id: string }>;
}

export default async function NoteModal({ params }: NoteModalProps) {
  const { id } = await params;
  const noteId = +id;
  const data = await fetchNoteId(noteId);

  return (
    <Modal>
      <NotePreview note={data} />
    </Modal>
  );
}
