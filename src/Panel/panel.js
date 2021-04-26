import './panel.css'

function panel() {

    return(
        <div className='content-div' >
            <div className='items-div'>
                <h1 className='header-text'>Dúvidas</h1>
                <p className='bold-text'>Listamos aqui algumas dúvidas frequentes,</p>
                <p className='normal-text'>caso a sua dúvida não esteja aqui você pode</p>
                <p className='normal-text'>entrar em contato conosco <a className='hyperlink-text' href='url'>clicando aqui</a></p>
            </div>
        </div>
    );

}

export default panel;
