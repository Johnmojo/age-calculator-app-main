import { Box } from "@mui/material";
import styled from "styled-components";

const FormDIV = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const FormLABEL = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  font-weight: 700;
  color: #707070;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  width: 20%;
`;

const FormINPUT = styled.input`
  height: 2rem;
  border: 2px solid #dbdbdb;
  border-radius: 0.25rem;
  padding: 0.5rem 1.2rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #181818;
`;

const MiddleDIV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const BallSphere = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #864cff;
  padding: 1rem;
  border-radius: 100%;
`;

const LineHR = styled.div`
  border-top: 1px solid #e5e5e5;
  width: 100%;
`;

const ResultDIV = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultH1 = styled.h1`
  font-size: 80px;
  font-weight: 900;
  color: #181818;
  font-style: italic;
  padding-bottom: 0.5rem;
`;

const ResultSPAN = styled.h1`
  color: #864cff;
  padding-right: 0.5rem;
  display: inline;
`;

export const App = () => {
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2.25rem",
          backgroundColor: "#ffffff",
          borderTopLeftRadius: "1.25rem",
          borderTopRightRadius: "1.25rem",
          borderBottomLeftRadius: "1.25rem",
          borderBottomRightRadius: "6rem",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <FormDIV>
          <FormLABEL htmlFor="date">
            Day
            <FormINPUT type="number" />
          </FormLABEL>
          <FormLABEL htmlFor="date">
            Month
            <FormINPUT type="number" />
          </FormLABEL>
          <FormLABEL htmlFor="date">
            Year
            <FormINPUT type="number" />
          </FormLABEL>
        </FormDIV>
        <MiddleDIV>
          <LineHR />
          <BallSphere>
            <img src="/icon-arrow.svg" alt="" width="45" height="auto" />
          </BallSphere>
        </MiddleDIV>
        <ResultDIV>
          <ResultH1>
            <ResultSPAN>38</ResultSPAN>years
          </ResultH1>
          <ResultH1>
            <ResultSPAN>3</ResultSPAN>months
          </ResultH1>
          <ResultH1>
            <ResultSPAN>26</ResultSPAN>days
          </ResultH1>
        </ResultDIV>
      </Box>
    </main>
  );
};
