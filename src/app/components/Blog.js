import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import WelcomeModal from './WelcomeModal';

export default class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: false
        }
    }
    render(){
        let curModal;
        if(this.state.display){
            curModal = (
            <WelcomeModal/>
            )
        }
        const posts = this.props.items.map((item, index) => {
            return <Post key={index} href={item.href} text={item.text} title={item.title}/>
        });
        return (
            <>
                <main>

                    <h1 className="col-12">Блог</h1>
                    <div className="col-12">
                        <div className="row">
                            {posts}
                        </div>
                    </div>
                </main>
                {curModal}
            </>
        );
    }
    componentDidMount(){
        this.setState({display: !this.state.display});
        console.log('DID MOUNT');
    }
}
