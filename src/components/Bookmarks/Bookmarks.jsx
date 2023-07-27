
import './Bookmarks.css';

const Bookmarks = ({receivedData}) => {
  for(var d  of receivedData){
    console.log(d)
  }
  return (
    <div className='bookmark-body'>
      <li>{d}</li>
      {
        
      }
    </div>
  );
};

export default Bookmarks;