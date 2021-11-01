class Category extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="row">
                <ul className="cat-nav center-align">
			        <li className="cat-link left valign-wrapper">
                        <i className="material-icons">{this.props.data.icon}</i>
                        {this.props.data.title}
			        </li>    
                </ul>
            </div>
        )
    }
}