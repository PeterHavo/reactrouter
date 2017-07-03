import React from 'react';


class ItemDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }



    render() {
        const content = this.props.data;
        



        return (
            <div>
                
                <h2>{content.title}</h2>

                <h3>{content.mainContent}</h3>
                <p> video link <strong>{content.video}</strong></p>
                {content.pictures.map((picture, index )=> <p key ={index}>{picture}</p> )}
                 <div className="card card-inverse card-info text-left">
                    <div className="card-block">
                        <blockquote className="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
                 <div className="card card-inverse">
                        <img className="card-img" src="/client/public/Kempelen_Speakingmachine.png" alt="Card image"></img>
                        <div className="card-img-overlay">
                            <p className="card-text">I'm INVERTED text that has a background image!</p>
                        </div>
                </div>

                <img src="/client/public/Kempelen_Speakingmachine.png" className="img-fluid" alt="Responsive image"></img>

                
            </div>
        );
    }
}

export default ItemDetails;