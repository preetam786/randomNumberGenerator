import {Component} from 'react'
import './index.css'

class UserProfile extends Component {
    state = {count: 0}

    getRandomNumber = () => (Math.ceil(Math.random() * 100))

    onGenerateRandomNumber = () => {
        const randomNumber = this.getRandomNumber()
        this.setState({count: randomNumber})

    }

    render() {
        const {count} = this.state
        console.log(count)

        return (
            <div className='random-container'>
                <button type='button' className='counter-btn' onClick={this.onGenerateRandomNumber}>Generate</button>
                <p className='random-number'>{count}</p>
            </div>
        )
    }
}

export default UserProfile
