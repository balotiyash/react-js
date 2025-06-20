import React, { useState } from 'react'

const MyComponent = () => {

    // Input type text
    const [name, setName] = useState("Guest");
    const handleNameChange = (event) => setName(event.target.value);

    // Input type number
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => setQuantity(event.target.value);

    // Textarea
    const [comment, setComment] = useState('');
    const handleCommentChange = (event) => setComment(event.target.value);

    // Select
    const [payment, setPayment] = useState('');
    const handlePaymentChange = (event) => setPayment(event.target.value);

    // Radio
    const [delivery, setDelivery] = useState("Delivery");
    const handleDeliveryType = (event) => setDelivery(event.target.value);

    return (
        <div>
            <h2>Order Booking</h2>
            {/* Input type text */}
            <p>Enter Your Name: </p>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Your Name is: {name}</p>
            <br />

            {/* Input type number */}
            <p>Enter Quantity:</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity Selected: {quantity} </p>
            <br />

            {/* Textarea */}
            <p>Enter your Delivery Instructions: </p>
            <textarea value={comment} onChange={handleCommentChange} placeholder='Instructions Here!!' ></textarea>
            <p>Delivery Instruction: {comment} </p>
            <br />

            {/* Select */}
            <p>Select Your Payment Option:</p>
            <select value={payment} onChange={handlePaymentChange} >
                <option value="" selected disabled>Select Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment == '' ? "Payment not Selected" : payment} </p>
            <br />

            {/* Radio */}
            <p>Select Delivery Method:</p>
            <label htmlFor="">
                <input type="radio" value="Pick Up"
                    checked={delivery === "Pick Up"}
                    onChange={handleDeliveryType} />
                Pick Up
            </label>

            <label htmlFor="">
                <input type="radio" value="Delivery"
                    checked={delivery === "Delivery"}
                    onChange={handleDeliveryType} />
                Delivery
            </label>
            <p>Delivery: {delivery} </p>
        </div>
    )
}

export default MyComponent