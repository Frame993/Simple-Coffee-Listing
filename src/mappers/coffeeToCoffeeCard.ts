import { CardProps } from "../components/Card"

export const coffeeToCoffeeCard = (element: any) => {
    return {
        id: element.id,
        name: element.name,
        image: element.image,
        price: element.price,
        rating: element.rating,
        votes: element.votes,
        popular: element.popular,
        available: element.available
    } as CardProps
}