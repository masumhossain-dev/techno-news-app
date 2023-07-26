import './Bookmarks.css';

const Bookmarks = ({data}) => {
  const receivedData = data;

  return (
    <div className='bookmark-body'>
      <p>{receivedData}</p>
    </div>
  );
};

export default Bookmarks;