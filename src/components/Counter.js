import {observer} from "mobx-react-lite";
import counter from "../store/counter";

const Counter = observer(() => {

    return (
        <>
            <h3>
                {"Count: " + counter.count}
            </h3>
            <div>
                <button className="btn" onClick={() => counter.increment()}>+</button>
                <button className="btn" onClick={() => counter.decrement()}>-</button>
            </div>
        </>
    )
});

export default Counter;