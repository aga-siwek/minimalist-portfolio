import Header from "@/components/layout/header/Header.tsx";
import MainContent from "@/components/layout/main_content/MainContent.tsx";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  const handleMoodChange = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setIsDark(false);
    } else if (!isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-2 w-full items-center min-h-screen justify-center font-sans w-full ">
        <Header handleMoodChange={handleMoodChange} />
        <MainContent />
      </div>
    </>
  );
}

export default App;
