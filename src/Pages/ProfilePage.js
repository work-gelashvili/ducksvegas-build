import Body from '../Components/Common/Body/Body'
import ProfileContent from '../Components/Profile/Profile'
import Sidebar from '../Components/Profile/Sidebar/Sidebar'
import MainSideBar from '../Components/Sidebar/Sidebar'

const ProfilePage = () => {
    return (
        <Body>
            <MainSideBar>
                <Sidebar />
            </MainSideBar>
            <ProfileContent />
        </Body>
    )
}

export default ProfilePage