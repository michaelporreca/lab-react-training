function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    return (
        <div style={{backgroundColor: bgColor, color: color}}>
            <div>{type}</div>
            <div>{number}</div>
            <div>{expirationMonth}/{expirationYear}</div>
            <div>{bank}</div>
            <div>{owner}</div>
        </div>
    )
}

export default CreditCard