import { Button } from "./components/Button";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
