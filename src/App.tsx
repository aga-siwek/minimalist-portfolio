import Header from "@/components/layout/header/Header.tsx";
import MainContent from "@/components/layout/main_content/MainContent.tsx";

function App() {
  return (
    <>
      <div className="flex min-h-screen justify-center font-sans w-full max-w-7xl items-center">
        <div className="flex flex-col gap-2 w-full">
          <Header />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
