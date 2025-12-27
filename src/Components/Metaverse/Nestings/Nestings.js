import CompletedNested from './CompletedNested/CompletedNested'
import InitNesting from './InitNesting/InitNesting'
import NestingHead from './NestingHead/NestingHead'
import styles from './Nestings.module.css'
import NestingSteps from './NestingSteps/NestingSteps'
import NftExchanger from './NftExchanger/NftExchanger'
import StepCircles from './StepCircles/StepCircles'

const Nestings = () => {
    return (
        <div className={styles['nesting-page-background']}>
            <NestingHead />
            <NestingSteps />
            <StepCircles />
            <CompletedNested />
            <InitNesting />
            <NftExchanger />
        </div>
    )
}

export default Nestings