import CallToActionContent from "./CallToActionContent";

const CallToAction = () => {
  return (
    <section className="bg-(--secondary-color) py-16 lg:py-20">
      <div className="medical-container">
        <div className="mx-auto max-w-3xl text-center">
          <CallToActionContent />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
