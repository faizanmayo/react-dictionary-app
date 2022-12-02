import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styleClasses from "./Result.module.scss";
export const Result = ({ word, setWord, setMeanings, meanings }) => {
  return (
    <Container fixed mb={5}>
      <Box className={styleClasses.result_wrapper}>
        <Box>
          {word === "" ? (
            <h4>Start by typing a word in search field.</h4>
          ) : (
            <>
              <div className={styleClasses.inner_content}>
                <h3 className={styleClasses.inner_titile}>
                  SYNONYMS FOR: <span>{word} </span>{" "}
                </h3>
                <h3 className={styleClasses.inner_titile}>
                  {" "}
                  Total Result: <span> {meanings.length}</span>
                </h3>
              </div>
              <ul className={styleClasses.meanings}>
                {meanings.map((meaning, index) => (
                  <li className={styleClasses.meanings_list} key={index}>{meaning}</li>
                ))}
              </ul>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};
