import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ExamplePage } from "./pages/examplePage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ExamplePage />
    </QueryClientProvider>
  );
}

export default App;
