
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from "./style"

const players = [{ name: 'Kirat Boli', probability: [5, 30, 25, 10, 15, 1, 9, 5] },
{ name: 'NS Nodhi', probability: [10, 40, 20, 5, 10, 1, 4, 10] },
{ name: 'R Rumrah', probability: [20, 30, 15, 5, 5, 1, 4, 20] },
{ name: 'Shashi Henra', probability: [30, 25, 5, 0, 5, 1, 4, 30] }
];

const initialScoreCard = { runs: 0, wickets: 0, overs: 0 };

const T20Match = () => {
    const [strikerIndex, setStrikerIndex] = useState(0);
    const [nonStrikerIndex, setNonStrikerIndex] = useState(1);
    const [balls, setBalls] = useState(0);
    const [scoreCard, setScoreCard] = useState(initialScoreCard);
    const [ballByBallRun, setBallByBallRun] = useState(0);

    const getRuns = (probability) => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        let sum = 0;
        for (let i = 0; i < probability.length; i++) {
            sum += probability[i];
            if (randomNum <= sum) {
                return i;
            }
        }
    };

    const handleBowlPress = () => {
        const runs = getRuns(players[strikerIndex].probability);
        setBallByBallRun(runs)
        setScoreCard((prevScoreCard) => {
            const newScoreCard = { ...prevScoreCard };
            if (runs === 7) {
                newScoreCard.wickets++;
                newScoreCard.wickets === 3 ? null : setStrikerIndex((prevStriker) => prevStriker + 1);
                setBalls((prevBalls) => prevBalls + 1);
                if (newScoreCard.wickets === 3) {
                    alert(`Chennai won the match with ${40 - newScoreCard.runs} runs`)
                }
            } else {
                newScoreCard.runs += runs;
                if (runs % 2 !== 0) {
                    var temp = strikerIndex
                    setStrikerIndex(nonStrikerIndex)
                    setNonStrikerIndex(temp)
                }
                if (newScoreCard.runs >= 40) {
                    alert(`Bengaluru won the match with ${3 - newScoreCard.wickets} wicket and ${6 - balls} ball remaining`)
                }
                if (balls === 5) {
                    var temp = strikerIndex
                    setStrikerIndex(nonStrikerIndex)
                    setNonStrikerIndex(temp)
                    setBalls(0);
                    newScoreCard.overs++;
                } else {
                    setBalls((prevBalls) => prevBalls + 1);
                }
            }
            return newScoreCard;
        });
    };

    return (
        <View style={style.rootConatiner}>
            <View style={style.scoreView}>
                <View style={style.overView}>
                    <Text style={style.scoreText}>Score: {scoreCard.runs}/{scoreCard.wickets}</Text>
                    <Text style={style.scoreText}>Overs:{scoreCard.overs}.{balls}</Text>
                </View>
                <View style={style.runView}>
                    <Text style={style.runTextSize}>{ballByBallRun == 7 ? "wicket" : ballByBallRun}</Text>
                    <Text style={style.runsText}>Runs</Text>
                </View>
            </View>
            <View style={style.individualScoreView}>
                <Text style={style.firstPlayerText}>{players[strikerIndex].name} {players[strikerIndex].score} {players[strikerIndex].balls}</Text>
                <Text style={style.secondPlayerText}>{players[nonStrikerIndex].name} {players[nonStrikerIndex].score} {players[nonStrikerIndex].balls}</Text>
            </View>
            <TouchableOpacity style={style.bowlButtonView} onPress={() => handleBowlPress()}>
                <Text style={style.runsText}>Bowl</Text>
            </TouchableOpacity>
        </View>
    )
}
export default T20Match