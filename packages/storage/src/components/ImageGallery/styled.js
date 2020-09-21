import styled from 'styled-components';
import { FileSelector } from 'react-rainbow-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px;
`;

export const StyledFileContainer = styled.div`
    height: 190px;
    width: 200px;
    margin-right: 10px;
    margin-bottom: 10px;
    overflow: hidden;
`;

export const StyledFileSeletor = styled(FileSelector)`
    display: block;
    width: 200px;
    height: 160px;
    margin-right: 10px;
    margin-bottom: 10px;

    > div {
        border-radius: 6px;
        min-height: auto;
    }
`;

export const StyledContainerImageUpload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 160px;

    > div {
        width: 70px;
        height: 70px;
    }

    h1 {
        display: none;
    }
`;

export const StyledContainerImage = styled.button`
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    border: 0;
    padding: 0;
    background-clip: padding-box;
    box-shadow: rgb(215, 217, 226) 0 1px 2px 0;

    &:hover,
    &:focus {
        border: 0;
        padding: 0;

        &::before {
            content: '';
            overflow: hidden;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.29),
                rgba(0, 0, 0, 0.05) 81%
            );
        }
    }

    &:focus {
        outline: 0;
        box-shadow: ${(props) => props.theme.rainbow.shadows.brand};
    }
`;

export const StyledImage = styled.img`
    display: ${(props) => (props.$loading ? 'none' : 'block')};
`;

export const StyledContainerSpinner = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
`;