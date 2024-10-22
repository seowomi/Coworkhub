import CoworkingEditInput from "./CoworkingEditInput.jsx";
import "./styles/edit.scss"
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import getImg from "../utils/images.js";
import {checkEditData} from "../utils/data.js";

export default function EditPanel({current, setCurrent}) {
    const {register, handleSubmit, reset, formState: {errors}, getValues} = useForm({
        defaultValues: {
            id: current.id,
            name: current.name,
            description: current.description,
            address: current.address,
            price: current.price,
            type: current.type,
            picture: current.picture
        }
    })

    const [imgSrc, setImgSrc] = useState("/src/assets/content/pictures/placeholder.svg");

    const handlePictureError = () => {
        setImgSrc("/src/assets/content/pictures/placeholder.svg");
    }

    const submitHandler = async data => {

        console.log(data)
        if (!checkEditData(data)) {
            alert("Введите корректные данные!")
            return
        }

        const formData = new FormData()
        data.price = parseFloat(data.price.toString())
        if (data.picture !== null && data.picture.length === 1) {
            formData.append("picture", data.picture[0])
            data.picture = data.picture[0].name
        } else {
            data.picture = ""
        }
        formData.append("info", JSON.stringify(data))

        if (!data.id) {
            await axios.post(`http://localhost:8081/api/coworking/create`, formData)
                .then(response => {
                    if(response.status === 201) {
                        if (data.picture) {
                            getImg(data.picture, setImgSrc)
                        }
                        setCurrent(data);
                        console.log("Successfully created!")
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            await axios.put(`http://localhost:8081/api/coworking/updateById/${data.id}`, formData)
                .then(response => {
                    if (response.status === 200) {
                        if (data.picture) {
                            getImg(data.picture, setImgSrc)
                        }
                        setCurrent(data)
                        console.log("Successfully updated!")
                    }
                }).catch(err => {
                        console.log(err)
                    }
                )
        }
    }

    useEffect(() => {
        reset(current)
        getImg(current.picture, setImgSrc)
        // console.log(getValues())
        console.log(current)
    }, [current, reset]);

    return (
        <div className="account__coworkings-edit">
            <div className="account__coworkings-title">{Object.keys(current).length === 0 || current.id === null ? "Добавить" : "Редактировать"}</div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="account__coworkings-edit-block">
                    <div className="account__coworkings-edit-text_info">
                        <CoworkingEditInput register={register} coworkingInfo={current.name}
                                            inputName={{value: "name", label: "Название"}}/>
                        <CoworkingEditInput register={register} coworkingInfo={current.description}
                                            inputName={{value: "description", label: "Описание"}}/>
                        <CoworkingEditInput register={register} coworkingInfo={current.address} inputName={{
                            value: "address",
                            label: "Адрес"
                        }}/>
                        <CoworkingEditInput register={register} coworkingInfo={current.price} inputName={{
                            value: "price",
                            label: "Цена"
                        }}/>
                        <CoworkingEditInput register={register} coworkingInfo={current.type}
                                            inputName={{value: "type", label: "Вид оплаты"}}/>
                    </div>
                    <div className="account__coworkings-edit-picture">
                        <img className="account__coworkings-picture"
                             src={imgSrc} onError={handlePictureError} alt="Coworking picture to change"/>
                        <input {...register("picture")} type="file" className="account__coworkings-edit-button"/>
                    </div>
                </div>
                <button className="account__coworkings-edit-button">
                    {Object.keys(current).length === 0 || current.id === null ? "Добавить" : "Сохранить"}
                </button>
            </form>
        </div>
    )
}