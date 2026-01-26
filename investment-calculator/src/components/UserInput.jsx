import { useState } from "react"

export default function UserInput({initialInvestment, annualInvestment, expectedReturn, duration, onChange}){
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={initialInvestment} min={0} onChange={(event)=>onChange('initialInvestment',event.target.value)} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={annualInvestment} min={0} onChange={(event)=>onChange('annualInvestment',event.target.value)} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={expectedReturn} min={0} onChange={(event)=>onChange('expectedReturn',event.target.value)} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={duration} min={0} onChange={(event)=>onChange('duration',event.target.value)} required />
                </p>
            </div>
        </section>
    )
}