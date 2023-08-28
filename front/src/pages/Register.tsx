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


export default function Register() {
    return (
        <>
            <Header />
            <Container>
                <div className="form">
                    <label> </label>
                    <input type="text" placeholder="" />
                    <p> campo obrigatório</p>
                </div>
                <div className="form">
                    <label> </label>
                    <input type="text" placeholder="" />
                    <p> campo obrigatório</p>
                </div>
                <div className="form">
                    <label> </label>
                    <input type="text" placeholder="" />
                    <p> campo obrigatório</p>
                </div>
                <div className="form">
                    <label> </label>
                    <input type="text" placeholder="" />
                    <p> campo obrigatório</p>
                </div>
                <div className="form">
                    <label> </label>
                    <input type="text" placeholder="" />
                    <p> campo obrigatório</p>
                </div>
                <div className="form">
                    <label> </label>
                    <input type="text" placeholder="" />
                    <p> campo obrigatório</p>
                </div>
                <div className="form">
                    <label> Genêro </label>
                    <select name="" id="">
                        <option value=""> selecionar Genêro </option>
                        <option> Feminino</option>
                        <option> Masculino</option>
                    </select>
                </div>
                <div className="form">
                    <button> Salvar</button>
                </div>
            </Container>
            <Footer />
        </>
    )
}