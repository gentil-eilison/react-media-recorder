import { useAuth0 } from "@auth0/auth0-react"
import Header from "./components/Header"
import RecordView from "./components/RecordView"
import LoginWarning from "./components/LoginWarning";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <main>
      <Header />
      { isAuthenticated ? (
        <RecordView />
      ) : (
        <LoginWarning />
      ) }
    </main>
  )
}

export default App
