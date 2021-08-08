const scaleNames = {
    c : 'Celsius',
    f : 'Fahrenheit'
}

function BoilingVerdict(props){
    if (props.celsius >= 100) {
        return <div className="alert alert-success"> L'eau bout </div>
    }
    return <div className="alert alert-info">L'eau ne bout pas</div>
}

function toCelsius(fahrenheit) {
    return  (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert (temperature, convert) {
    const value = parseFloat(temperature)
    if (Number.isNaN(value)) {
        return '';
    }
    return (Math.round(convert(value) * 100) / 100).toString()
}

class TemperatureInput extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render () {
        const scale = scaleNames[this.props.scale]
        console.log(scale);
        const temperature = this.props.temperature
        return <div className="form-group">
            <label htmlFor={scale}>Temperature (en {scale}) : </label>
            <input id={scale} value={temperature} className="form-control" onChange={this.handleChange} />
        </div>
    }
}

class Calculator extends React.Component {

    constructor(props) {
        super (props)
        this.state = {
            scale : 'c',
            temperature : 20
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)     
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale : 'c',
            temperature
        })

    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale : 'f',
            temperature
        })

    }

    render() {
        const temperature = this.state.temperature
        const scale = this.state.scale
        const celsius = (scale === 'c' ? temperature : tryConvert(temperature, toCelsius))
        const fahrenheit = (scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit))
        console.log(celsius)
        return <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
            <BoilingVerdict celsius={celsius} />
        </div>
    }
}

ReactDOM.render(<Calculator/>, document.querySelector('#app'))