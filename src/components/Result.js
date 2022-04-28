import React from 'react'
import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

const Result = () => {

  const navigate = useNavigate()
  const result = useSelector(state => state.quizzLandStore.score)
  const topic = useSelector(state => state.quizzLandStore.topic)

  const handleClick = () => {
    navigate("/")
  }

  let gift;

  switch (topic) {
    case "Animal":
      gift = "Quà 1"
      break;
    case "History":
      gift = "Quà 2"
      break;
    case "Culture":
      gift = "Quà 3"
      break;
    default:
      break;
  }

  return (
    <>
      <Flex w={'100%'} h={'730px'} alignItems={'center'} justifyContent={'center'}>
        <VStack>
          <Text fontSize="20px" color={'gray'}>
            {
                result === 4
                ? "Chúc mừng bạn đã đạt được kết quả tối đa"
                : "Rất tiếc!!!"
            }
          </Text>
          <Text fontSize="18px" color={'gray'}>Tổng điểm của bạn là: {result}/4</Text>

          {
            result === 4
            ?
            <>
              <Text fontSize="18px" color={'gray'}>Bạn đã nhận được món quà: {gift}</Text>
            </>
            :
            <>
              <Text fontSize="18px" color={'gray'}>Rất tiếc bạn chưa nhận được quà</Text>
            </>
          }

          <Button onClick={handleClick}>Quay lại chủ đề</Button>
        </VStack>
      </Flex>

    </>
  )
}

export default Result