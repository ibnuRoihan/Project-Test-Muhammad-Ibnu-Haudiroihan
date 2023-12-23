export const Card = ({date, title, img}) => {
    return(
        <>
            <div className="rounded-xl shadow-2xl">
                    <div className="bg-gray-500 w-full h-40 rounded-t-xl mb-5">
                        <img className="rounded-t-xl w-full h-full object-cover" src={img} alt="gambar" loading="lazy"/>
                    </div>

                    <div className="font-medium px-5 mb-5">
                        <p className="text-gray-500 text-sm">{date}</p>
                        <h3 className="line-clamp-3">{title}</h3>
                    </div>
            </div>
        </>
    )
}