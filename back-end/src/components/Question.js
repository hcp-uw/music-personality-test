export default function Question({props, children}) {
    return (
        <div className="question">
            <h2>{children}</h2>
            <div className="question--buttons">
                <h3>Strongly Disagree</h3>
                <button type="radio" className="q--strong"></button>
                <button type="radio" className="q--slight"></button>
                <button type="radio" className="q--neutral"></button>
                <button type="radio" className="q--slight"></button>
                <button type="radio" className="q--strong"></button>
                <h3>Strongly Agree</h3>
            </div>
        </div>
    )
}