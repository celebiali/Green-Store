
import IconComponent from '../icons/IconComponent.tsx';
import InformationDto from "../../models/components/InformationDto.ts";


function Information({iconType,title,info}:InformationDto) {
    return (
        <>
            <div className="container">
                <span className="icon">
                    <IconComponent iconType={iconType}/></span>
                <div className="text">
                    <h6>{title.toUpperCase()}</h6>
                    <p>{info}</p>
                </div>
            </div>
        </>
    )
}

export default Information
