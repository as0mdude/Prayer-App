const PrayerGetComponent = ({requests}) => {

    //const math = values[parseInt(Math.random() * requests.length)]
    return(
        
        <div className ="currentrequest">
            {requests.map(post => (
            <div className="blog-preview" key={post.id} >
            <h2>{ post.name }</h2>
            
        </div>
      ))}
        </div>
    );
};
    
export default PrayerGetComponent;
    