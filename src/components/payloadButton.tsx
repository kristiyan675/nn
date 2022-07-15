import { useDispatch} from 'react-redux';
import { counterActions} from '../store/index';

interface PayloadType {
    amount: number
}

const PayloadButton = ({amount}: PayloadType) => {
    const dispatch = useDispatch()

    const increaseBy5Handler = () => {
        dispatch(counterActions.increase(amount))
    }

    return (
        <button onClick={increaseBy5Handler}> Increment by 5 </button>
    )
}

export default PayloadButton