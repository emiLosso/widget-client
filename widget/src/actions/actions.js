import Constants from '../constants'

export const processCheckout = (amount, address, email, crypto) => {
    const data = new FormData();
    data.append('amount', amount);
    data.append('address', address);
    data.append('email', email);
    data.append('crypto', crypto);

    console.log(data, "dataa")

    return fetch(`${Constants.checkoutUrl}`, {
        method: 'POST',
        headers : new Headers(),
        body: data
        }).then(response => {
            // ver si manejar errores aca
            console.log(response, "res")
            return "success"
        })
        .catch((err) => {
            console.log(err, "err")
            return "error"
        })
}
