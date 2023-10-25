import PlayMovie from '../Components/Events/PlayMovie'
import SimpleBtn from '../Components/Events/SimpleBtn'
import ALertButton from '../Components/Events/AlertButton'
import OnSmash from '../Components/Events/OnSmash'
import StopingPropogation from '../Components/Events/StopingPropogation'
import SingUp from '../Components/Events/SingUp'

export default function Home() {
    return (
        <>
            <PlayMovie />
            <br />
            <SimpleBtn />
            <br />
            <ALertButton />
            <br />
            <OnSmash />
            <br />
            <StopingPropogation />
            <br />
            <SingUp />
        </>
    )
}
