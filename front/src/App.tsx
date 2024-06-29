import { MailView } from "./components/MailView";
import { TopBar } from "./components/TopBar";
import { ContextProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <ContextProvider>
      <TopBar />
      <MailView />
    </ContextProvider>
  );
}

export default App;
