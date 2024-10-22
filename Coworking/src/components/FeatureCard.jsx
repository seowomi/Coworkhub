
export default function FeatureCard({name, picture}) {

    return (
        <div className="feature__card">
            <img src={picture} />
            <div className="feature__card-name">{name}</div>
        </div>
    )
}