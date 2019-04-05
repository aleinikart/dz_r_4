import React from 'react';

export default class Post extends React.Component {
    render(){        
        return(
            <article key={this.props.index} className="blog-item col-12 col-sm-6 col-lg-4">
               <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                <a href={this.props.href}>Подробнее</a>
            </article>
        );
    }
}