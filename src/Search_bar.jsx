
function Search_bar(){

    const styles = {
        display: 'flex',
        /* align-items: center; */
        padding: '5px 10px',
        borderRadius: '10px',
        backgroundColor: 'black',
        width: '40vw'
    }

    const inputsearchStyle = {
        height: '40px',
        width: '100%',
        border: '0',
        outline: '0',
        fontSize: '18px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
    }

    const pquteStyle = {
        fontFamily: "Outfit",
        fontStyle: "normal",
        fontSize: "150%",
    }

    return(
        <>
        <div id = 'inspirational_quote'>
            <p style={pquteStyle}>What will we discover today</p>
        </div>
        <div id = 'search_bar_div' style = {styles}>
            <form action='https://www.google.com/search' method = 'get'>
                <input id="search_bar" type="text" placeholder="Search" name="q" style={inputsearchStyle}></input>
            </form>
        </div>
        </>
    )
}

export default Search_bar