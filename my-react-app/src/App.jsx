
import "./App.css";
import Student from "./Student";


export default function App() {
  return (
    <div>
      <Student name="Labibul Ahsan Alif" age={24} isStudent={true}
      />
      <Student name="John Doe" age={30} isStudent={false}
      />
      <Student name="Jane Smith" age={22} isStudent={true}
      />
    </div>
  )
}

