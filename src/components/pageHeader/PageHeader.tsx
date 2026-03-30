const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <div className="medical-container">
        <h1 className="text-3xl font-bold tracking-tight text-(--heading-color) md:text-4xl text-balance">
          {title}
        </h1>
        <p className="mt-4 text-base text-(--text-color) md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
