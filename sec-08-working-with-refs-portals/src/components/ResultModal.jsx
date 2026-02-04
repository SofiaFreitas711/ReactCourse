import { useRef } from "react"
import { forwardRef, useImperativeHandle } from "react"
import { createPortal } from 'react-dom'

const ResultModal = forwardRef( function ResultModal({ targetTime, remainigTime, onReset}, ref){
    const dialog = useRef()
    const userLost = remainigTime <=0
    const formattedRemainingTime = (remainigTime/1000).toFixed(2)
    const score = (1 - remainigTime/(targetTime*1000)) * 100
    console.log(remainigTime);
    
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })
    
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds</strong> </p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button >Close</button>
            </form>
        </dialog>,
        document.querySelector("#modal")

    )
})

export default ResultModal