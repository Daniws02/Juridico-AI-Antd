import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonT = styled(Button)`
    border-width: 0; /* Define a largura da borda como 0 */
    position: relative; /* Necessário para posicionar o pseudo-elemento */
    overflow: hidden; /* Garante que o pseudo-elemento não transborde */
    padding: 10px 20px; /* Espaçamento interno do botão */
    color: white; /* Cor do texto */
    background-color: transparent; /* Fundo transparente */
    font-size: 16px; /* Tamanho da fonte */
    cursor: pointer; /* Muda o cursor para pointer */
    border-radius: 5px; /* Bordas arredondadas */
    transition: color 0.3s; /* Transição suave para a cor do texto */

    & > span {
        position: relative; /* Necessário para o efeito de sobreposição */
        z-index: 1; /* Mantém o texto acima do pseudo-elemento */
    }

    &::before {
        content: ''; /* Conteúdo vazio para o pseudo-elemento */
        background: linear-gradient(135deg, #6253e1, #04befe); /* Gradiente de fundo */
        position: absolute; /* Posicionamento absoluto em relação ao botão */
        inset: 0; /* Preenche todo o botão */
        opacity: 1; /* Opacidade inicial */
        transition: all 0.3s; /* Transição suave para todas as propriedades */
        border-radius: inherit; /* Mantém o mesmo raio de borda do botão */
        z-index: 0; /* Coloca o pseudo-elemento atrás do texto */
    }

    &:hover::before {
        opacity: 0; /* Faz o pseudo-elemento desaparecer ao passar o mouse */
    }

    &:hover {
        color: #fff; /* Cor do texto ao passar o mouse */
    }
`;

export const ButtonDefault = styled(Button)`
    position: relative;
    background: linear-gradient(135deg, #6253e1, #04befe);
    color: white;
    padding: 20px 25px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.4s, transform 0.2s, box-shadow 0.2s;

    &:hover {
        background: linear-gradient(135deg, #5372ff, #05dcfe); /* Mudança de cor ao hover */
        transform: translateY(-4px); /* Eleva o botão */
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Sombra mais pronunciada */
    }

    &:active {
        transform: translateY(2px); /* Efeito de clique */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra reduzida */
    }

    &:disabled {
        background: #b0c4de;
        color: #f0f0f0;
        cursor: not-allowed;
    }
`;

export const ButtonPrimary = styled(ButtonDefault)`
    background: linear-gradient(135deg, #ff7a18, #e52e71);

    &:hover {
    background: linear-gradient(135deg, #ff9148, #ff4f91) !important;
    box-shadow: 0px 4px 15px rgba(255, 122, 24, 0.7), 0px 4px 15px rgba(229, 46, 113, 0.7) !important;
  }

    &:active {
        transform: translateY(2px); 
        box-shadow: 0 4px 10px rgba(255, 122, 24, 0.1);
    }

    &:disabled {
        background: #b0c4de;
        color: #f0f0f0;
    }
`;