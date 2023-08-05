import React from 'react';

class Questions extends React.Component {

    getId (radioNum) {
        const props = this.props
        return `radio${((props.id - 1) * 5) + radioNum}`
    }

    getRadioNum (radioNum) {
        const props = this.props;
        return ((props.id - 1) * 5) + radioNum
    }

    render() {
    const props = this.props;
    return (
        <div className="question">
            <h2>{props.children}</h2>
            <div className="question--buttons">
                <h3 className="negative">Strongly Disagree</h3>
                <input
                    id={this.getId(0)}
                    type="radio"
                    className="q--strong-neg"
                    onClick={()=>props.addResult(props.id, this.getRadioNum(0))}
                    checked={props.result === this.getRadioNum(0) ? true : false}
                />
                <label htmlFor={this.getId(0)}></label>
                <input
                    id={this.getId(1)}
                    type="radio"
                    className="q--slight-neg"
                    onClick={()=>props.addResult(props.id, this.getRadioNum(1))}
                    checked={props.result === this.getRadioNum(1) ? true : false}
                />
                <label htmlFor={this.getId(1)}></label>
                <input
                    id={this.getId(2)}
                    type="radio"
                    className="q--neutral"
                    onClick={()=>props.addResult(props.id, this.getRadioNum(2))}
                    checked={props.result === this.getRadioNum(2) ? true : false}
                />
                <label htmlFor={this.getId(2)}></label>
                <input
                    id={this.getId(3)}
                    type="radio"
                    className="q--slight-pos"
                    onClick={()=>props.addResult(props.id, this.getRadioNum(3))}
                    checked={props.result === this.getRadioNum(3) ? true : false}
                />
                <label htmlFor={this.getId(3)}></label>
                <input
                    id={this.getId(4)}
                    type="radio"
                    className="q--strong-pos"
                    onClick={()=>props.addResult(props.id, this.getRadioNum(4))}
                    checked={props.result === this.getRadioNum(4) ? true : false}
                />
                <label htmlFor={this.getId(4)}></label>
                <h3 className="positive">Strongly Agree</h3>
            </div>
        </div>
        )
    }
}

export default Questions;