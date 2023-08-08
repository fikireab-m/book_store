import Card from './components/Card'
import Header from './components/Header'
import BooksList from './pages/BooksList'

function App() {
  return (
    <>
      <Header title='Book Store' />
      <BooksList>
        <Card title='Font-end Development' price={20} />
        <Card title='Font-end Development' price={20} />
        <Card title='Font-end Development' price={20} />
        <Card title='Font-end Development' price={20} />
        <Card title='Font-end Development' price={20} />
        <Card title='Font-end Development' price={20} />
        <Card title='Font-end Development' price={20} />
        <Card title='Font-end Development' price={20} />
        <Card title='Font-end Development' price={20} />
      </BooksList>
    </>
  )
}

export default App
