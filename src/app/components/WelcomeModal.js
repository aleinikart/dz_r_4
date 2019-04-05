import React from 'react';
import ReactDOM from 'react-dom';

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: true
        }
    }
    
    render(){       
        let thisModal;
            if(this.state.display){
                thisModal = (
                <div className="welcome">
                    <div className="caption">Добро пожаловать!</div>
                    <p>Мы рады что, что хоть кто-то пришел почитать наш блог...</p>
                    <button className="btn" onClick={()=>{
                        this.setState({display: !this.state.display});   
                    }}>ОК</button>
                </div>
                )
        }
        return(
            <>
                {thisModal}
            </>
        );
    }
}