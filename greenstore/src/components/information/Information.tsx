
import IconComponent from '../icons/IconComponent.tsx';
interface InformationProps{
    iconType: 'fa' | 'fi' | 'ai';
    title: string;
    info: string;
}

function Information({iconType,title,info}:InformationProps) {
    return (
        <>
            <div className="container">
                <span className="icon"><IconComponent iconType={iconType}/></span>
                <div className="text">
                    <h6>{title.toUpperCase()}</h6>
                    <p>{info}</p>
                </div>
            </div>
        </>
    )
}

export default Information
