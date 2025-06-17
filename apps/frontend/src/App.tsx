import { BrowserRouter } from "react-router";
import { ApplicationRoutes } from "./screens/ApplicationRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";
import { Provider } from "react-redux";
import "./interceptors/authRefresh";
import "./interceptors/userUUID";
import "./App.css";
import { PopupList } from "./components/PopupsList";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ApplicationRoutes />
          <PopupList />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
