import './navigator.css'

function navigator() {

    return (
        <>
            <div className='main-div'>
                <div className='inner-div'>
                    <button className='franchisee-button'> <i className='icon'/>SEJA UM FRANQUEADO</button>
                    <button className='consultant-button'> <i className='icon'/>SEJA UM CONSULTOR(A)</button>
                    <button className='buy-button'>QUERO COMPRAR</button>
                </div>
            </div>
            <button className='restrict-button'> <i className='icon'/>ÁREA RESTRITA</button>
        </>
    );
}

export default navigator; 
