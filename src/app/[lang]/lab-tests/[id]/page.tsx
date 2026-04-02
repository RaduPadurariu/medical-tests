export default async function LabTestByIdPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  await params;
  return (
    <section
      className="min-h-[50vh] bg-white py-12 md:py-16"
      aria-label="Lab test"
    >
      Single Page
    </section>
  );
}
