import Searchbar from "@/components/searchLocation/Searchbar";
import useScrollLock from "@/hooks/useScrollLock";

const LocationModal = ({ setIsOpen }) => {
  useScrollLock(true);

  return (
    <div className="overlay" onClick={() => setIsOpen(false)}>
      <div
        className="modal w-full h-[40rem] sm:w-[30rem] sm:h-auto custome-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Wohin zieht es dich als nächstes?
        </h2>
        <p>Füge den nächsten Ort zu deiner Reiseroute hinzu.</p>
        <Searchbar onClose={() => setIsOpen(false)} />
        <button
          className="block w-full underline font-medium mt-4 cursor-pointer rounded-md h-12 hover:border border-accent"
          onClick={() => setIsOpen(false)}
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
};
export default LocationModal;
