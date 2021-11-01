class Card extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src="http://lorempixel.com/400/200/city" alt="" />
                    </div>

                    <div className="card-content">
                        <p>{this.props.data.subject}</p>
                        <p>{this.props.data.instructor}</p>
                    </div>

                    <div class="card-action">
                        <a href="#">50</a>    
                    </div>
                </div>
            </div>
)
    }
}