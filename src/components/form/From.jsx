import './form.css'
const Form =()=>{

    return(
        <div className="container">
            <h2 className="primary-gradient">Bármiféle form</h2>
            <div>
                <form>
                    <div className='inputs'>
                        <label htmlFor="">Név: </label>
                        <input type="text" />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="">Jelszó: </label>
                        <input type="text" />
                    </div>
                    <button>Beküldés</button>
                </form>
            </div>
        </div>
    )
}

export default Form;