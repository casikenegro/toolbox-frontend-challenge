import Header from "./components/header";
import { Container } from 'react-bootstrap';
import MainView from './components/main-view';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="p-4">
        <MainView />
      </Container>
    </div>
  );
}

export default App;
