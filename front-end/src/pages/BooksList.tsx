
import {ReactNode} from 'react'

type BooksListProp = {
    children: ReactNode
}
const BooksList = ({children}:BooksListProp) => {
  return (
    <div className="px-4 flex flex-wrap mt-6 mx-auto justify-center gap-6 lg:space-y-0">
        {children}
    </div>
  )
}

export default BooksList