
import './Bookmarks.css';

const Bookmarks = ({receivedData}) => {

  return (
    <div className='bookmark-body'>
      <li>{receivedData}</li>
    </div>
  );
};

export default Bookmarks;