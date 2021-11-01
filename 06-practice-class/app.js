let category = data.map((result, index) =>{
    return (
        <Category key={index} data={result}/>
    )
})

ReactDOM.render(
    <div className="row">
        {category}
    </div>,
     document.getElementById('root')
)