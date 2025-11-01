import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center px-8 mt-16">
      <form
        className="max-w-[25rem] h-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-3xl font-semibold">Anmelden</h2>
        <p className="text-gray-800 text-sm mt-4">
          Melde dich mit deiner E-Mail-Adresse und deinem Passwort an.
        </p>
        <div className="my-4">
          <input className="input border" type="email" placeholder="E-Mail" />
        </div>
        <div className="my-4">
          <input
            className="input border"
            type="password"
            placeholder="Passwort"
          />
        </div>
        <div>
          <label className="text-gray-600 text-sm cursor-pointer">
            <input className="mr-2" type="checkbox" />
            Ja, ich möchte Rabatte, Angebote & Inspiration per E-Mail erhalten.
          </label>
        </div>
        <button className="btn my-2" type="submit">
          Anmelden
        </button>
        <Link className="block underline mb-8" to="/login">
          Passwort vergessen?
        </Link>
        <div className="flex flex-col gap-4">
          <button className="login-btn">
            <FaFacebook /> Mit Facebook fortfahren
          </button>
          <button className="login-btn">
            <FaGoogle /> Mit Google fortfahren
          </button>
          <button className="login-btn">
            <FaApple /> Mit Apple fortfahren
          </button>
        </div>
        <p className="mt-4">
          Du hast kein Konto?
          <Link className="underline ml-1" to="/login">
            Jetzt registrieren
          </Link>
        </p>
      </form>
    </section>
  );
};
export default LoginPage;
