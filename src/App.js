import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Text, Center } from '@chakra-ui/react'
import Topic from './components/Topic'
import Quizzland from './components/Quizzland'
import Result from './components/Result'

const getData = () => {
  const res = require("./database/db.json")
  return res
}

function App() {

  const data = getData()

  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/" element={
            <>
              <Center bg='#fff' p={10} mb={10} h='100%'>
                <Text fontSize='20px' color='gray'>QuizzLand</Text>
              </Center>
      
              <Topic bg="gray" data={data.animal} name="Animal"/>
              <Topic bg="pink" data={data.history} name="History"/>
              <Topic bg="red" data={data.culture} name="Culture"/>
            </>
          } />

          <Route path="/quizzland" element={<Quizzland/>} />
          <Route path="/result" element={<Result/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
