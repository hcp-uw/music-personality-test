export default function Question(props) {

    function getId (radioNum) {
        return `radio${((props.id - 1) * 5) + radioNum}`
    }

    function getRadioNum (radioNum) {
        return ((props.id - 1) * 5) + radioNum
    }

    return (
        <div className="question">
            <h2>{props.children}</h2>
            <div className="question--buttons">
                <h3 className="negative">Strongly Disagree</h3>
                <input
                    id={getId(0)}
                    type="radio"
                    className="q--strong-neg"
                    onClick={()=> {
                        props.addResult(props.id, getRadioNum(0));
                        props.updateSelectedOptions(0);
                        console.log(props.selected);
                        }}

                    checked={props.result === getRadioNum(0) ? true : false}
                />
                <label htmlFor={getId(0)}></label>
                <input
                    id={getId(1)}
                    type="radio"
                    className="q--slight-neg"
                    onClick={()=> {
                        props.addResult(props.id, getRadioNum(1));
                        props.updateSelectedOptions(1);
                        console.log(props.selected);
                        }}
                    checked={props.result === getRadioNum(1) ? true : false}
                />
                <label htmlFor={getId(1)}></label>
                <input
                    id={getId(2)}
                    type="radio"
                    className="q--neutral"
                    onClick={()=> {
                        props.addResult(props.id, getRadioNum(2));
                        props.updateSelectedOptions(3);
                        console.log(props.selected);
                        }}
                    checked={props.result === getRadioNum(2) ? true : false}
                />
                <label htmlFor={getId(2)}></label>
                <input
                    id={getId(3)}
                    type="radio"
                    className="q--slight-pos"
                    onClick={()=> {
                        props.addResult(props.id, getRadioNum(3));
                        props.updateSelectedOptions(4);
                        console.log(props.selected);
                        }}
                    checked={props.result === getRadioNum(3) ? true : false}
                />
                <label htmlFor={getId(3)}></label>
                <input
                    id={getId(4)}
                    type="radio"
                    className="q--strong-pos"
                    onClick={()=> {
                        props.addResult(props.id, getRadioNum(4));
                        props.updateSelectedOptions(5);
                        console.log(props.selected);
                        }}
                    checked={props.result === getRadioNum(4) ? true : false}
                />
                <label htmlFor={getId(4)}></label>
                <h3 className="positive">Strongly Agree</h3>
            </div>
            <hr size="2" color="#777C97" width="100%"/>
        </div>
    )
}