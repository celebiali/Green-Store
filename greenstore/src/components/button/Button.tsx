import ButtonDto from "../../models/components/ButtonDto.ts";

export default function Button({title}:ButtonDto){
    return (
        <>
            <button>
               <title>{title}</title>
            </button>
        </>
    )
}

