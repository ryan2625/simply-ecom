export default function productReducer(tasks, action) {
    switch (action.type) {
        case "RESET":
            return (
                {
                    item: action.payload,
                    quantity: 1,
                    image: action.payload.img,
                    price: action.payload.price
                }
            )
    
        case "INCREMENT":
            return (
                {
                    ...tasks, quantity : tasks.quantity + 1
                }

            )
        case "DECREMENT":
            return (
                {
                    ...tasks, quantity : tasks.quantity - 1
                }
            )
        case "SET_IMG":
            return (
                {
                    ...tasks, image: action.payload
                }
            )
        case "SET_PRICE":
            return (
                {
                    ...tasks, price: action.payload
                }
            )
        }
}