import React from 'react';
import { connect } from 'react-redux';
import { isRegisterClicked } from '../actions';

class Info extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            isRegisterClicked: false
        };
        this.updateWidth = this.updateWidth.bind(this)
      }

    updateWidth() {
        this.setState({width: window.innerWidth});
    }
    componentWillMount(){
        this.updateWidth();
    }
    componentDidMount(){
        window.addEventListener("resize", this.updateWidth);
    }

    componentDidUpdate(){
        this.props.isRegisterClicked(this.state.isRegisterClicked);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    handleClick = () => {
        this.setState({isRegisterClicked: true});
    }

    checkIfNull(){
        const { seat } = this.props;

        if(seat===null)
            return '';
        else  
            return seat;
    }

    renderMobile(){
        return (
            <div className = 'info'>
                 <div className='seatsStatus'>
                    <div className='seatStatus'>
                        <div className = 'seat'/>
                        <h3>Wolne</h3>
                    </div>
                    <div className='seatStatus'>
                        <div className = 'seat bookedSeat'/>
                        <h3>Zajęte</h3>
                    </div>
                    <div className='seatStatus'>
                        <div className = 'seat selectedSeat'/>
                        <h3>Wybrane</h3>
                    </div>
                </div>
                <ul className='resInfo'>
                    <li><h2>Tytuł:</h2></li>
                    <li><h2>Czas:</h2></li>
                    <li><h2>Miejsca: {`${this.checkIfNull()}`}</h2></li>
                </ul>
                <button id='register' onClick={this.handleClick}><div className='rezBtn'/></button>
            </div>
    );
    }

    renderDesktop(){
        return (
            <div className = 'info'>
                <ul className='resInfo'>
                    <li><h2>Tytuł: <span>Pulp Fiction</span></h2></li>
                    <li><h2>Czas: 2h20min</h2></li>
                    <li><h2>Miejsca: {`${this.checkIfNull()}`}</h2></li>
                </ul>
                <button id='register' onClick={this.handleClick}><div className='rezBtn'/></button>
                <div className='seatsStatus'>
                    <div className='seatStatus'>
                        <div className = 'seat'/>
                        <h3>Wolne</h3>
                    </div>
                    <div className='seatStatus'>
                        <div className = 'seat bookedSeat'/>
                        <h3>Zajęte</h3>
                    </div>
                    <div className='seatStatus'>
                        <div className = 'seat selectedSeat'/>
                        <h3>Wybrane</h3>
                    </div>
                </div>
            </div>
    );
    }

    render(){
        return this.state.width > 1024 ? this.renderDesktop() : this.renderMobile();
    }
}

const mapStateToProps = (state) => {
   return {
        seat: state.seatsSelected,
        clicked: state.isRegisterClicked
    };
};

export default connect(mapStateToProps, {isRegisterClicked})(Info);