import '../styling/welcome.css'

const Welcome = ({ title }) => {

    return (
        <div className='welcome-banner'>
            <h1>{title}</h1>
        </div>
    )
}

export default Welcome
