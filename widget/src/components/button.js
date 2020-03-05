import { h } from 'preact';

const Button = (props) => (
    <div className="checkout__form__group">
        <button className="checkout__btn" disabled={!props.canSend()} onClick={e => props.submitForm()}>
            <span className="checkout__btn__title"> Enviar </span>
        </button>
        {/* <button className="checkout__btn" onClick={e => alert("volver")}>
            <span className="checkout__btn__title"> Enviar otro </span>
        </button> */}
    </div>

);

export default Button;
