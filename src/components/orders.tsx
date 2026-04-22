import { useEffect, useState } from "react"

interface OrdersProps {
    Id: number,
    date: string,
    numberOfPeople: number,
    totalPrice: number,
    customerName: string,
    email: string,
    telephone: string,
    packageSnapshot: []
}
export function Orders() {
    const [orders, setOrders] = useState<OrdersProps[]>([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/admin/manage-appointments", {
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) =>
                setOrders(data)
            )
    }, [])
    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order.Id}>{order.customerName}</li>
                ))}
            </ul>
        </div>
    )
}