
import {ReactNode} from 'react'

type BooksListProp = {
    children: ReactNode
}
const BooksList = ({children}:BooksListProp) => {
  return (
    <div className="grid mt-6 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:space-y-0">
        {children}
    </div>
  )
}

export default BooksList