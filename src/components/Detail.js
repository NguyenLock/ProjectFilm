import { useParams } from "react-router-dom";
import { data } from "../shared/ListOfFilms";

function Detail() {
  const userName = useParams();


  const film = data.find((obj) => {
    return obj.id == userName.id;
  });

  return (
    <div className="">
      <div className=" detail">
        <div className="product-thumb ">
          <div className="badge">{film.title}</div>
          <img src={`../${film.img}`} alt="" />{" "}
          
         
        </div>

        <div className="midcard">
          <div className="product-details">
            <h4>{film.title} </h4>
            <p>Year: {film.year} </p>
            <p>Nation: {film.nation} </p>
           <h6>Overview</h6>
            <div>{film.info}</div>
           <div className="trailer">
            <iframe
              src={film.clip}
              width="90%"
             height="410px"
              
              frameborder="0"
              title="film.title"
              allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
              allowfullScreen
            /> </div>
            
          </div>
           </div>
        </div>
        
     
      
       
       
     
   
    </div>
  );
}

export default Detail;
