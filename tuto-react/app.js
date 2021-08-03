function BoilingVerdict(props){
    if (props.celsius >= 100) {
        return <div className="alert alert-success"> L'eau bout </div>
    }
    return <div className="alert alert-info">L'eau ne bout pas</div>
}

function Field (props) {
    return <div className="form-group">
        <label htmlFor={name}> {children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
        <BoilingVerdict celsius={value}/>
    </div>
}

class Calculator extends React.Component {

    constructor(props) {
        super (props)
        this.state = {
            celsius : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const value = e.target.value
        this.setState ({
            celsius : value
        })
    }

    render() {
        const celcius = this.state.celsius
        return <div>
            <input value={celcius} onChange={this.handleSubmit} />
            <BoilingVerdict celcius={parseFloat(celcius)} />
        </div>
    }
}

ReactDOM.render(<Calculator/>, document.querySelector('#app'))