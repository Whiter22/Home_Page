import React, {useState} from 'react'

function OptionsButtons({ setName }){
    // const [name, setName] = useState('')
    const [showNameInput, setShowNameInput] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('');

    const enterName = () => {
        setShowNameInput(!showNameInput)
    }

    const handleBackgroundColor = (event) => {
        const new_color = event.target.value;
        setBackgroundColor(new_color);
        document.body.style.backgroundColor = new_color;
    }

    const buttonholderStyle = {
        position: 'absolute',
        marginTop: '90vh',
        display: 'flex',
        justifyContent: 'center',
    }

    const pquteStyle = {
        fontFamily: "Outfit",
        fontStyle: "normal",
        fontSize: "150%",
    }

    return(
            <div style={buttonholderStyle}>
                {showNameInput ? (  
                    <div className='holder_div' style={{marginTop: '-10vh'}} id = 'new_name_input'>
                        <p style = {pquteStyle}>Enter name</p>
                        <input onChange={(event) => setName(event.target.value)}></input>
                        <button className="option_button" onClick={enterName}>Save</button>
                    </div>
                ):(
                    <div id = 'style_buttons' style={{display: 'inherit', alignItems:'center'}}>
                        <button className="option_button" onClick={enterName}>Name</button>
                        <input type="color" onChange={handleBackgroundColor} style={{marginLeft: '10px'}}></input>
                    </div>
                )}
            </div>
    )
}

export default OptionsButtons