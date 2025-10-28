export default function CandidGallery({ children }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full">
      {
        children.map((candid, index) => (
          <div key={index}
            className={index % 2 == 0 ? "rotate-2 mt-20 translate-x-10 w-2/3 z-0" : "-rotate-3 z-10 -translate-y-10 -translate-x-10 w-2/3"}
          >
            {candid}
          </div>
        ))
      }
    </div>
  );
}