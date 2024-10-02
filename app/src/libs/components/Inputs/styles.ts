import styled from 'styled-components';
import { Input } from 'antd';

export const InputDefault = styled(Input)`
    position: relative;
    padding: 12px 20px;
    border-radius: 8px;
    border: 2px solid transparent;
    font-size: 16px;
    width: 100%;
    max-width: 400px; /* Define a largura máxima */
    transition: border-color 0.3s, box-shadow 0.2s;

    &:focus {
        border-color: #04befe; /* Cor ao focar */
        box-shadow: 0 0 10px rgba(4, 190, 254, 0.4); /* Sombra ao focar */
    }

    &:hover {
        border-color: #5372ff; /* Mudança de cor ao hover */
    }

    &:disabled {
        background: #f5f5f5;
        color: #b0c4de;
        cursor: not-allowed;
    }
`;

export const InputPrimary = styled(InputDefault)`
    border-color: #e52e71; /* Cor principal */
    
    &:focus {
        border-color: #ff7a18; /* Cor de foco personalizada */
        box-shadow: 0 0 10px rgba(255, 122, 24, 0.4); /* Sombra ao focar */
    }

    &:hover {
        border-color: #ff9148; /* Mudança de cor ao hover */
    }

    &:disabled {
        background: #f5f5f5;
        color: #b0c4de;
    }
`;
