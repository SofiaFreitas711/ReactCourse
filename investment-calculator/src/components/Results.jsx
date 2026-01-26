import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({initialInvestment, annualInvestment, expectedReturn, duration}){
    console.log(initialInvestment, annualInvestment, expectedReturn, duration);
    let resultsData = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration})
    console.log(resultsData);
    let firstInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>YEAR</th>
                    <th>INVESTMENT VALUE</th>
                    <th>INTEREST (YEAR)</th>
                    <th>TOTAL INTEREST</th>
                    <th>INVESTED CAPITAL</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((result)=> {
                    let totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - firstInvestment
                    let totalAmountInvested = result.valueEndOfYear - totalInterest
                    return <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}