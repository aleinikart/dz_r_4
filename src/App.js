import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog';
import './app/styles/bootstrap.min.css'
import './app/styles/style.css'

class App extends React.Component{
    
    render(){  
        const posts = [
            {href: "/article1", title: "Статья 1: о птичках", text: "В первой статье мы поговорим о птичках"},
            {href: "/article2", title: "Статья 2: о рыбках", text: "Во второй статье мы поговоим о рыбках"},
            {href: "/article3", title: "Статья 3: ни о чем", text: "В третьей статье мы ни о чем не поговоим"},
        ];
        
        return (
               <Blog items={posts}/>
        );
        
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));