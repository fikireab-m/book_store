import {useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import BooksList from './pages/BooksList'

import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  };

  return (
    <>
    <Header title='Book Store' />
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <BooksList>
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
        <Card title='레이블라우스' price={57_600} discountRate={10} />
      {/* {items.map((item:ReactNode, index:number) => (
        <div key={index}>   
        </div>
      ))} */}
      </BooksList>
    </InfiniteScroll>
    </>
  );
}

export default App;

