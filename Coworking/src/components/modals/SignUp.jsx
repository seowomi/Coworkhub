import {Modal} from './Modal.jsx'
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useModal} from "../../hooks/useModal.js";
import {checkData} from "../../utils/data.js";

export function SignUp({open = false}) {
    const navigate = useNavigate();
    const  {setIsActive} = useModal();

    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            email: '',
            full_name: '',
            password: ''
        }
    })

    const submitHandler = async data => {
        if (!checkData(data)) {
            alert("Введите корректные данные!");
            return
        }
        await axios.post("http://localhost:8081/api/user/create", data)
            .then(response => {
                if (response.status === 201) {
                    console.log(response)
                    navigate("profile")
                    setIsActive(false)
                    reset()
                }
            })
            .catch( err => {
                console.log(err)
                alert(err);
            })
    }

    return (
        <Modal open={open}>
            <form className='modal__form' onSubmit={handleSubmit(submitHandler)}>
                <input  {...register('email')} className='modal__input' placeholder='Email' type='email' maxLength={45}/>
                <input {...register('full_name')} className='modal__input' placeholder='Имя пользователя' type='text' maxLength={25}/>
                <input {...register('password')} className='modal__input' placeholder='Пароль' type='password' maxLength={45}/>
                <button className='modal__button' type='submit'>Зарегистрироваться</button>
            </form>
        </Modal>
    )
}