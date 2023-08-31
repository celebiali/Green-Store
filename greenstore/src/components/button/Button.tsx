interface ButtonProps{
    title: string
}

export default function Button({title}:ButtonProps){
    return (
        <>
            <button>
               <title>{title}</title>
            </button>
        </>
    )
}

