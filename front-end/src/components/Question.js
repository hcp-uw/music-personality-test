// buggy implementation, input id's need to be fixed to separate them
export default function Question(props) {
    function getId (radioNum) {
        return `radio${((props.id - 1) * 5) + radioNum}`
    }
    console.log(props.id)
    return (
        <div className="question">
            <h2>{props.children}</h2>
            <div className="question--buttons">
                <h3>Strongly Disagree</h3>
                <input
                    id={getId(0)}
                    type="radio" 
                    className="q--strong" 
                    onClick={()=>{
                        console.log(getId(0))
                        props.addResult(props.id, 0)}}
                    checked={props.result === 0 ? true : false}
                />
                <label htmlFor="radio0"></label>
                <input
                    id={getId(1)}
                    type="radio" 
                    className="q--slight"
                    onClick={()=>props.addResult(props.id, 1)}
                    checked={props.result === 1 ? true : false}
                />
                <label htmlFor="radio1"></label>
                <input
                    id={getId(2)} 
                    type="radio" 
                    className="q--neutral"
                    onClick={()=>props.addResult(props.id, 2)}
                    checked={props.result === 2 ? true : false}
                />
                <label htmlFor="radio2"></label>
                <input
                    id={getId(3)} 
                    type="radio" 
                    className="q--slight"
                    onClick={()=>props.addResult(props.id, 3)}
                    checked={props.result === 3 ? true : false}
                />
                <label htmlFor="radio3"></label>
                <input
                    id={getId(4)} 
                    type="radio" 
                    className="q--strong"
                    onClick={()=>props.addResult(props.id, 4)}
                    checked={props.result === 4 ? true : false}
                />
                <label htmlFor="radio4"></label>
                <h3>Strongly Agree</h3>
            </div>
        </div>
    )
}