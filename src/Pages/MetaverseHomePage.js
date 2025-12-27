import Body from '../Components/Common/Body/Body'
import Home from '../Components/Metaverse/Home/Home'
import MainSideBar from '../Components/Sidebar/Sidebar'
import Sidebar from '../Components/Metaverse/Sidebar/Sidebar'

const MetaverseHomePage = () => {
  return (
    <Body>
      <MainSideBar>
        <Sidebar />
      </MainSideBar>
      <Home />
    </Body>
  )
}

export default MetaverseHomePage
