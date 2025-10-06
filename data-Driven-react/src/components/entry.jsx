export default function Entry(loc) {
    return (
        <article>
            <img src={loc.image} alt="mount fuji" />
            <div>
                <span>{loc.name}</span>
                <h2 className="entry-title">{loc.title}</h2>
                <p className="trip-dates">{loc.date}</p>
                <p className="entry-text">{loc.text}</p>
        
            </div>
        </article>
    )
}