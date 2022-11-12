import React, {useEffect,useState} from 'react'
import CatItem from '../components/CatItem';
import LoadingBar from 'react-top-loading-bar';
const Cat = ()=>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const limit = 15;
  const [progress, setProgress] = useState(0);
  const [sort, setSort] = useState("ASC");
  const pageSize = 5;

  const  updateNews = async()=>{
    console.log(sort);
    setProgress(10);
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&&api_key=live_lHtsLJbttXSpgCHnyPP6IT9stT6i49lmfSceLUSb1tVmMZYl8QKeQAhMBTVWRkiK`
    setProgress(30)
    setLoading(true);
    setProgress(50);
    let data = await fetch(url);
    setProgress(70);
    let parsedData = await data.json()
    console.log(parsedData);
    setArticles(parsedData);
    setLoading(false);
    setProgress(100)
  }
  useEffect(() => {
    updateNews();
  }, [])
  

   const handlePreviousClick = async ()=>{
       
         let url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&&api_key=live_lHtsLJbttXSpgCHnyPP6IT9stT6i49lmfSceLUSb1tVmMZYl8QKeQAhMBTVWRkiK`;
         setLoading(true);
         let data = await fetch(url);
         let parsedData = await data.json()
         console.log(parsedData);
        setPage(page - 1);
        setArticles(parsedData)
        setLoading(false);
        setPage(page - 1)
        updateNews();
    }
   const  handleNextClick = async ()=>{
      // console.log("Next");
      // console.log(sort);
      if((page < pageSize)){
      let url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&&api_key=live_lHtsLJbttXSpgCHnyPP6IT9stT6i49lmfSceLUSb1tVmMZYl8QKeQAhMBTVWRkiK`;
    setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      // thoda dekhna hai
       setPage(page + 1);
       setArticles(parsedData);
       setLoading(false);
      }
     setPage(page + 1);
     updateNews();
 }
 const handleChange = async (value) =>{
  setProgress(10)
  const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&order=${value}&&api_key=live_lHtsLJbttXSpgCHnyPP6IT9stT6i49lmfSceLUSb1tVmMZYl8QKeQAhMBTVWRkiK`
  setProgress(30)
  setLoading(true);
  setProgress(50)
  let data = await fetch(url);
  setProgress(70)
  let parsedData = await data.json();
  setProgress(90)
  console.log(parsedData);
  setArticles(parsedData);
  setLoading(false);
setProgress(100)
 }
    return (
    <>
      <LoadingBar
        height={3}
        color='#1a88ef'
        progress={progress}
        /> 
      <h2 className='text-center' style={{margin:'60px 0px'}}> <i>Cat - P</i>hotos</h2>       
           <div className="container my-3">
      <div className="row">
      <div className="form-check">
        <h4>Sort cats</h4>
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="ASC" onChange={(e) => handleChange(e.target.value)} />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Asc
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="DESC" onChange={(e) => handleChange(e.target.value)}  />
  <label className="form-check-label" htmlFor="exampleRadios2">
    Desc
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="RAND" onChange={(e) => handleChange(e.target.value)}   />
  <label className="form-check-label" htmlFor="exampleRadios3">
    Random
  </label>
</div>

        {articles.map((element)=>{
        return <div className="col-md-4" key={element.id}>
          <CatItem img={element.url} id={element.id} />
        </div>
        })}
      </div>
      </div>
      <div className='d-flex container justify-content-between'>
        <button className='btn btn-dark' disabled={page <= 1}  onClick={handlePreviousClick}>&larr; Previous</button>
        <button className='btn btn-dark' disabled={page + 1 > pageSize} onClick={handleNextClick}>Next &rarr; </button>

      </div>
    </>
    )
   }

export default Cat