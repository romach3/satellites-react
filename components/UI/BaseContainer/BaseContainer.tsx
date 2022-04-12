import {ReactElement, FC} from 'react'
import styles from './BaseContainer.module.css'

interface Props {
    children: ReactElement
}

const BaseContainer: FC<Props> = (props) => {
    return <div className={styles.container} {...props}>{props.children}</div>
}

export default BaseContainer
