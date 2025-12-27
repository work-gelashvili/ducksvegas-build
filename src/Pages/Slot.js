import Back from "../Components/Common/Back/Back"
import Body from "../Components/Common/Body/Body"
import MainSideBar from "../Components/Sidebar/Sidebar"
import Sidebar from "../Components/Welcome/Sidebar/Sidebar"
import SlotPage from "./../Components/Casino/Slot/Slot"

const Slot = () => {
    return  (
        <Body>
            <MainSideBar>
                <Back className={{marginBottom: '10px'}} marginBottom="48" />   
                <Sidebar />
            </MainSideBar>
            <SlotPage />
        </Body>
    )
}

export default Slot