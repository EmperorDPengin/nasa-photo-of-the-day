import React from 'react';
import styled from 'styled-components';

const StyledMediaPlayer = styled.div`
    text-align: center;
    border: ${ pr => pr.theme.tertiaryColor} double 10px;
    padding: 1.25rem 0;
    background-color: ${ pr => pr.theme.backgroundColor};

    img {
        width: 96%;
        margin: auto;
    }
`

export default function MediaPlayer(props) {
    const { url } = props;

    const CheckURL = () => {
        let address = `${url}`;
        if (address.match(/\.(jpeg|jpg|gif|png)$/)){
            return (
                <img src={url} alt='Nasas APOD'></img>
            )
        }else{
            return (
                <p>NO IMAGE TODAY, SORRY!</p>
            )
        }
    }

    return (
        <StyledMediaPlayer>
            {CheckURL()}
        </StyledMediaPlayer>
    )
}