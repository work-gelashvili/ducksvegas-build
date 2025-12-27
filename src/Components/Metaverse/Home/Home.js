// import Sidebar from "../../Welcome/Sidebar/Sidebar";
import { Route } from 'react-router-dom'
import HomeContent from '../HomeContent/HomeContent'
import Nestings from '../Nestings/Nestings'

const Home = () => {
  return (
    <>
      <Route path="/metaverse" exact>
        <HomeContent />
      </Route>
      <Route path="/metaverse/holder/nesting" exact>
        <Nestings />
      </Route>
    </>
  )
}

export default Home
