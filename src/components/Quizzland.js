import React, {useState } from 'react'
import { Box, Button, Text, Flex, VStack, HStack, Spacer, Center } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { totalScore } from "../redux/reducer"

const Quizzland = () => {

  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [disable, setDisable] = useState(false)
  const [bgButtonA, setBgButtonA] = useState('white')
  const [bgButtonB, setBgButtonB] = useState('white')
  const [questionTrue, setquestionTrue] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const listQuestion = useSelector(state => state.quizzLandStore.questionAndAnswer)
  const topic = useSelector(state => state.quizzLandStore.topic)

  console.log(listQuestion);

  const handleClickButtonA = () => {
    if (listQuestion[currentQuestion]?.answers?.answer1?.isTrue === "true"){
      setquestionTrue(true)
      setScore(score+1)
      setBgButtonA('green')
      setDisable(true)
    } else{
      setBgButtonA('red')
      setDisable(true)
      setquestionTrue(false)
    }
  }

  const handleClickButtonB = () => {
    if (listQuestion[currentQuestion]?.answers?.answer2?.isTrue === "true"){
      setquestionTrue(true)
      setScore(score+1)
      setBgButtonB('green')
      setDisable(true)
    } else{
      setBgButtonB('red')
      setDisable(true)
      setquestionTrue(false)
    }
  }

  const handleNext = () => {
    setCurrentQuestion(currentQuestion+1)
    setBgButtonA('white')
    setBgButtonB('white')
    setDisable(false)
    setquestionTrue(false)

    if (currentQuestion === 3) {
      navigate("/result")
    }

    dispatch(totalScore(score))
  }

  const handleExit = () => {
    navigate("/")
  }

  return (
    <>
      <Flex w={'100%'} h={'730px'} alignItems={'center'} justifyContent={'center'}>
        <VStack w={'auto'}>

          <Center>Chủ đề: {topic}</Center>

          <HStack w={'100%'}>
            <Text>Câu {currentQuestion + 1}/4</Text>
            <Spacer/>
            <Text>Điểm: {score}</Text>
          </HStack>


          <Box bg={'#a5afc0'} w={'auto'} h={'auto'} p={'40px'} textAlign={'center'}>
            <Text w={'400px'} color={'#fff'}>{listQuestion[currentQuestion].question}</Text>

            <HStack alignItems={'center'} justifyContent={'center'} mt={'15px'}>
              <Button
                bg={bgButtonA}
                _hover={{ bg: `${bgButtonA}` }}
                onClick={handleClickButtonA}
                isDisabled={disable}
              >
                {listQuestion[currentQuestion]?.answers?.answer1?.content}
              </Button>

              <Button
                  bg={bgButtonB}
                  _hover={{ bg: `${bgButtonB}` }}
                  onClick={handleClickButtonB}
                  isDisabled={disable}
              >
                {listQuestion[currentQuestion]?.answers?.answer2?.content}
              </Button>

            </HStack>

            {questionTrue && <Text mt={"10px"} w={'400px'} color={"black"}>{listQuestion[currentQuestion].explanation}</Text>}
            
          </Box>

          <HStack w={'100%'}>
            <Button onClick={handleNext}>Tiếp Theo</Button>
              <Spacer/>
            <Button onClick={handleExit}>Thoát</Button>
          </HStack>
        </VStack>
      </Flex>


      
    </>
  )
}

export default Quizzland