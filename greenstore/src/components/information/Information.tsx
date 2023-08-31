interface InformationProps{
    icon: string;
    title: string;
    info: string;
}

function Information({icon,title,info}:InformationProps) {
    return (
        <>
            <button>
               <title>{icon}</title>
                <title>{title}</title>
                <title>{info}</title>
            </button>
        </>
    )
}

export default Information
