import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import {
  dehydrate,
  HydrationBoundary,
  keepPreviousData,
  QueryClient,
} from "@tanstack/react-query";

interface NotesProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Notes({ params }: NotesProps) {
  const initialQuery = "";
  const initialPage = 1;
  const queryClient = new QueryClient();
  const { slug } = await params;
  console.log(slug);

  const tag = slug[0] === "all" ? "" : slug[0];
  console.log(tag);

  await queryClient.prefetchQuery({
    queryKey: ["notes", initialQuery, tag, initialPage],
    queryFn: () => fetchNotes(initialQuery, tag, initialPage),
    initialData: keepPreviousData,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient
        initialQuery={initialQuery}
        initialPage={initialPage}
        initialTag={tag}
      />
    </HydrationBoundary>
  );
}
