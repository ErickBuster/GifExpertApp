export const GiftCard = ({id, title, url}) => {
    return (
        <div className='GiftCard' key = {id}>
            <a href={url} target="_blank">
                <img src={url} alt="" />
            </a>
            <p>{title}</p>
        </div>
    )
}
