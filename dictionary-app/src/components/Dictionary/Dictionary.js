import React, { useEffect, useState } from "react";
import { Result } from "../Result/Result";
import Search from "../Search/Search";
import styleClasses from "./Dictionary.module.scss";
import Container from "@mui/material/Container";
import bookPicture from "../../images/bookpic.svg";
import { Box, Stack } from "@mui/system";
import axios from "axios";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  const searchWordApi = async () => {
    try {
      const data = await axios.get(
        `https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/search?word=${word}`
      );
      setMeanings(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchWordApi();
  }, [word]);

  return (
    <>
      <Box className={styleClasses.dictionary_wrapper}>
        <Container fixed>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            className={styleClasses.wrapper_content}
          >
            <Box>
              <h1 className={styleClasses.title}>Dictionary App</h1>
              {/* <p className={styleClasses.sub_title}>
                Find synonyms, antonyms, and related words
              </p> */}
              <Search
                word={word}
                setWord={setWord}
                meanings={meanings}
                setMeanings={setMeanings}
              />
            </Box>
            <Box>
              <img src={bookPicture} className={styleClasses.home_img} />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Result
        word={word}
        setWord={setWord}
        meanings={meanings}
        setMeanings={setMeanings}
      />
    </>
  );
};

export default Dictionary;
