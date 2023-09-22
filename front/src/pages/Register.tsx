import { SubmitHandler, useForm } from "react-hook-form"
import { styled } from "styled-components"
import Footer from "../components/Footer/footer"
import Header from "../components/Header/header"


const Container = styled.div`
    display: grid;
    opacity: 0.5;
    align-items: center;
    flex-direction: column;
    margin: 6px;
    background-color: #d1d1d1;
    border: none;
    height: 900px;
    border-radius: 12px;
    input[type="text"] {
        margin-top: 26px;
        width: 70%;
        height: 46px;
        padding: 0 18px;
        border: none;
        border-radius: 6px;
        transition: 0.6s;
    }
    input[type="file" ]{
        width: 20%;
        cursor: pointer;
    }
    input [type="radio"]{
        padding: 8px;
    }
    textarea {
        border: none;

    }

`

type FormValues = any;

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const formData = new FormData();
        formData.append('img', data.img[0]);
        formData.append('sku', data.sku);
        formData.append('cod_reference', data.cod_reference);
        formData.append('product_name', data.product_name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('stock', data.stock);

        try {
            const response = await fetch(import.meta.env.VITE_URL_POST_PROD, { 
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Produto registrado com sucesso!');

            } else {
                console.error('Erro ao registrar produto:', response.status);
            }
        } catch (error) {
            console.error('Erro ao enviar a solicitação:', error);
        }
    };

    return (
        <>
            <Header />
            <Container >
                <div className="form">
                    <label>SKU</label>
                    <input
                        type="text"
                        placeholder="SKU"
                        {...register("sku", { required: true })}
                    />
                    {errors?.sku?.type === "required" && (
                        <p> campo obrigatório</p>
                    )}
                </div>
                <div className="form">
                    <label>código referência </label>
                    <input type="text" placeholder="código referência"
                        {...register("cod_reference", { required: true })}
                    />
                    {errors?.cod_reference?.type === "required" && (
                        <p> campo obrigatório</p>
                    )}
                </div>
                <div className="form">
                    <label> nome </label>
                    <input type="text" placeholder="nome" {...register("product_name", { required: true })} />
                    {errors?.product_name?.type === "required" && (
                        <p> campo obrigatório</p>
                    )}
                </div>
                <div className="form">
                    <label> Descrição</label>
                    <textarea id="" cols={10} rows={5} placeholder="Descrição" {...register("description", { required: true })} />
                    {errors?.description?.type === "required" && (
                        <p> campo obrigatório</p>
                    )}
                </div>
                <div className="form">
                    <label>Preço </label>
                    <input type="number" placeholder="Preço" {...register("price", { required: true })} />
                    {errors?.price?.type === "required" && (
                        <p> campo obrigatório</p>
                    )}
                </div>
                <div className="form">
                    <label> Estoque </label>
                    <input type="number" placeholder="Estoque" {...register("stock", { required: true })} />
                    {errors?.stock?.type === "required" && (
                        <p> campo obrigatório</p>
                    )}
                </div>
                <div className="form" >
                    <label> Imagens </label>
                    <input type="file" multiple accept="image/*" id="img"  {...register("img", { required: true })} />
                    {errors?.stock?.type === "required" && (
                        <p> campo obrigatório</p>
                    )}
                </div>
                <div className="form" >
                    <label> Genêro </label>
                    <select name="" id="">
                        <option value=""> selecionar Genêro </option>
                        <option> Feminino</option>
                        <option> Masculino</option>
                    </select>
                </div>
                <div className="form">
                    <button type="submit" onClick={() => handleSubmit(onSubmit)}>Salvar</button>
                </div>
            </Container>
            <Footer />
        </>
    )
}