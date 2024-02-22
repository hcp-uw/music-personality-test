import { useState } from 'react'
import PersonalityCard from '../PersonalityCard'
import personalityData from '../../personalityCardData'

export default function About() {
    const [cards, setCards] = useState(personalityData)

    function toggleDescState(id) {
        setCards(prevCards => {
            return prevCards.map((card) => {
                return card.id === id ? {...card, descShown: !card.descShown} : card
            })
        })
    }

    const cardElements = cards.map((card) => {
        return (
            <PersonalityCard
                key={card.id}
                id={card.id}
                type={card.type}
                title={card.title}
                description={card.description}
                selected={card.descShown}
                gridColumn={card.id % 2 === 1 ? "left" : "right"}
                toggleDescState={toggleDescState}
            />
        )
    })

    return (
        <div className="card--grid">
            {cardElements}
        </div>
    )
}
