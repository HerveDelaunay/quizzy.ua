import React from 'react'
import './QuizzDisplay.css'

const QuizzDisplay : React.FC = () => {
  return (
    <div className="card-container">
      <div className="cards">
        <div className='cards-title'>
          DAYS
        </div>
        <div className='cards-subtitle'>
          Are you still confused about what is Ukrainian Sunday, whether it is a Середа or Субота?
          This game is perfect choice for you!
        </div>
      </div>
      <div className="cards">
        <div className='cards-title'>
          NUMBER
        </div>
        <div className='cards-subtitle'>
          If you're scared of paying at the stores and have chaos in your head from all those сто, п’ятдесять.
          Pick this quiz ;)
        </div>
      </div>
      <div className="cards">
        <div className='cards-title'>
          MONTHS
        </div>
        <div className='cards-subtitle'>
          If you're in doubt, what's the best month for a vacation?
          Червень, серпень чи травень?
          Choose this game!
        </div>
      </div>
      <div className="cards">
        <div className='cards-title'>
          FOOD
        </div>
        <div className='cards-subtitle'>
          Do you want to become a real Ukrainian? So it’s time to try борщ, сало і
          холодець! Choose this exercise but be careful, after it, you will definitely want to eat :)
        </div>
      </div>
    </div>
  )
}

export default QuizzDisplay