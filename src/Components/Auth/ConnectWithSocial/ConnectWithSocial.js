import Social from '../../Common/Social/Social'
import styles from './ConnectWithSocial.module.css'
import facebook from './../../../icons/facebook.svg'
import google from './../../../icons/google.svg'

const ConnectWithSocial = () => {
    return (
        <div className={`${styles['connect-socials-container']} disable-element`}>
            <Social icon={facebook} name="Facebook" />
            <Social icon={google} name="Google" />
        </div>
    )
}

export default ConnectWithSocial