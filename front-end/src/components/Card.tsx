type CardProps = {
  title: string,
  description?: string,
  coverImage?: string,
  price: number,
  discountRate: number
}

const Card = (props: CardProps) => {
  return (
    <div className="group items-center relative shadow-md max-w-sm hover:scale-105">
      <div className="relative h-80 w-full overflow-hidden bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
        <img
          src={"/src/assets/front-end.jpg"}
          alt="font-end"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col p-4 md:px-8">
        <h2 className="text-gray-700 font-bold text-xl">
          {props.title}
        </h2>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-red-500">{props.discountRate}%</h2>
          <h2 className="text-xl font-bold text-gray-900">
            {props.price.toLocaleString()}
            <span className="text-gray-700 font-semibold text-base">원</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Card
