import "./styles/edit.scss"

export default function CoworkingEditInput({register, inputName, coworkingInfo}) {
    return (
        <div className="edit__coworking">
            <div className="edit__coworking-name">{inputName.label}:</div>
            {
                inputName.value === "type" ?
                    <select {...register(inputName.value)} className="edit__coworking-input">
                        <option value="Час">Час</option>
                        <option value="День">День</option>
                    </select> :
                    <input {...register(inputName.value)} className="edit__coworking-input"/>
            }
        </div>
    )
}