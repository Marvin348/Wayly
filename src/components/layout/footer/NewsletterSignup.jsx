const NewsletterSignup = () => {
  return (
    <div className="mt-4 md:mt-0">
      <h3 className=" font-semibold text-[1.05rem] mb-4">Bleib auf dem Laufenden!</h3>
      <p className="text-sm mb-2 text-gray-300">
        Abonniere unseren Newsletter und erhalte spannende Updates von Wayly!
      </p>
      <form className="text-sm">
        <div className="block mb-2">
          <input
            className="input"
            type="email"
            placeholder="E-Mail (erforderlich)"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            className="input"
            type="text"
            placeholder="Vorname"
          />
          <input
            className="input"
            type="text"
            placeholder="Nachname"
          />
        </div>
        <label className="flex items-start gap-2 mt-2">
          <input className="bg-white text-black outline-none " type="checkbox" />
          <span className="text-xs text-gray-300 ">
            Mit der Anmeldung für unseren Newsletter erklärst du dich mit
            unseren{" "}
            <span className="underline text-white font-medium">
              Geschäftsbedingungen
            </span> einverstanden.
          </span>
        </label>
        <button className="btn block text-base mt-4" type="submit" onSubmit={(e) => e.preventDefault()}>
          Anmelden
        </button>
      </form>
    </div>
  );
};
export default NewsletterSignup;
