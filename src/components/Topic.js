import React from 'react'
import { Button, Center, Text } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { quizzLandData, topic } from "../redux/reducer"


const Topic = (props) => {

    const { data, name, bg } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        const quizShuffled = data.sort(() => Math.random() - 0.5)
        const quiz = quizShuffled.slice(0,4)
        dispatch(topic(name))
        dispatch(quizzLandData(quiz))
        navigate("/quizzland")
    }

    return (
        <>
            <Center>
                <Button bg={bg} w='30%' mt={5} p={10} color='white' onClick={handleClick}>
                    <Text fontSize={20} color={'black'}>Topic: {name}</Text>
                </Button>
            </Center>
        </>
    )
}

export default Topic