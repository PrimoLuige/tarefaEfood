import { Link } from "react-router-dom"
import * as S from "./styles"
import fundo from "../../assets/images/fundo.png"
import logo from "../../assets/images/logo.png"

export default function Header () {
    return (
        <S.HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
            <S.Logo>
                <Link to={"/"}>
                <img src={logo} alt="Logo da efood" />
                </Link>
            </S.Logo>
            <S.Titulo>
            Viva experiências gastronômicas
            <br /> no conforto da sua casa
            </S.Titulo>
        </S.HeaderContainer>
    )
}