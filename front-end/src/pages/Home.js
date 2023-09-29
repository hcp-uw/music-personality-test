import FrontPageMain from '../components/FrontPageMain'
import PersonalityCard from '../components/PersonalityCard'
import personalityData from '../personalityCardData'

export default function Home() {
    const cards = personalityData.map((card) => {
        return (
            <PersonalityCard
                key={card.id}
                id={card.id}
                type={card.type}
                img={card.img}
                title={card.title}
                description={card.description}
                gridColumn={card.id % 2 === 1 ? "left" : "right"}
            />
        )
    })

    return (
        <div>
            <FrontPageMain />
            <div className="card--grid">
                {cards}
            </div>
        </div>
    )
}