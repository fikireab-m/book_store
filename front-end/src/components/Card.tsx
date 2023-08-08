type CardProps = {
  title: string,
  description?: string,
  coverImage?: string,
  price: number,
  discountRate?: number
}

const Card = (props: CardProps) => {
  return (
    <div className="group  items-center relative shadow-md max-w-sm ">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
        <img
          src={"/src/assets/front-end.jpg"}
          alt="font-end"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <a href="{callout.href}">
          <span className="absolute inset-0" />
          {props.title}
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-900">{props.price}</p>
    </div>
  )
}

export default Card