import reactLogo from '../assets/react.svg'

function Image() {
    return (

            <div id="image">
                <p>This is a webpage created by react</p>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>

    )
}

export default Image