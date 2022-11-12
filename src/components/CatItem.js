import React  from 'react'
import { Link } from 'react-router-dom';

const  CatItem = (props) =>  {

    let {img, id} = props;
    // console.log(id);
    return (
      <div>
        <Link to={`/${id}`} >
        <div className="card">
           <div  style={{display:'flex',justifyContent:'flex-end',postion:'absolute',right:'0'}} >   
          <span className="badge rounded-pill bg-danger">
            </span>
           </div>
         <img src={img} className="card-img-top" alt="..." />
        </div>
        </Link>
      </div>
    )
}

export default CatItem